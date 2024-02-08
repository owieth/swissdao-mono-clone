import { Address, BigInt } from '@graphprotocol/graph-ts';
import {
  AddGuild as AddGuildEvent,
  EditGuild as EditGuildEvent,
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../../generated/SwissDAOMembership/SwissDAOMembership';
import { Guild } from '../../generated/schema';
import { fetchHolder, fetchTokenTransaction } from '../utils';

export function fetchGuild(id: string): Guild {
  let guild = Guild.load(id);

  if (!guild) {
    guild = new Guild(id);
    guild.tokenID = BigInt.fromString(id);
    guild.imageUri = '';
    guild.name = '';
    guild.description = '';
    guild.holders = [];
  }

  return guild;
}

export function handleGuildTransfer(event: TransferSingleEvent): void {
  const tokenId = event.params.id;

  let guild = fetchGuild(tokenId.toString());

  const holders = guild.holders;

  let tokenTransaction = fetchTokenTransaction(
    event.transaction.hash.toHexString()
  );

  tokenTransaction.tokenID = tokenId;
  tokenTransaction.txHash = event.transaction.hash;
  tokenTransaction.timestamp = event.block.timestamp;

  if (event.params.from == Address.zero()) {
    tokenTransaction.type = 'GUILD_JOIN';
    tokenTransaction.to = fetchHolder(event.address, event.params.to).id;

    const holder = fetchHolder(event.address, event.params.to);

    holders.push(holder.id);

    guild.holders = holders;

    guild.save();
  } else if (event.params.to == Address.zero()) {
    tokenTransaction.type = 'GUILD_LEAVE';
    tokenTransaction.from = fetchHolder(event.address, event.params.from).id;

    const holder = fetchHolder(event.address, event.params.from);

    const indexOfHolder = holders.indexOf(holder.id);

    guild.holders = holders.splice(indexOfHolder, 1);

    guild.save();
  }

  tokenTransaction.save();
}

export function handleGuildAdd(event: AddGuildEvent): void {
  const tokenId = event.params._guildId;

  let guild = fetchGuild(tokenId.toString());

  const contract = SwissDAOMembership.bind(event.address);

  const badgeStruct = contract.getBadgeStructByTokenId(tokenId);

  guild.name = badgeStruct.name;
  guild.description = badgeStruct.description;
  guild.imageUri = badgeStruct.imageUri;
  guild.save();

  let tokenTransaction = fetchTokenTransaction(
    event.transaction.hash.toHexString()
  );

  tokenTransaction.tokenID = tokenId;
  tokenTransaction.type = 'GUILD_ADD';
  tokenTransaction.txHash = event.transaction.hash;
  tokenTransaction.timestamp = event.block.timestamp;
  tokenTransaction.save();
}

export function handleGuildEdit(event: EditGuildEvent): void {
  const tokenId = event.params._guildId;

  let guild = fetchGuild(tokenId.toString());

  const contract = SwissDAOMembership.bind(event.address);

  const badgeStruct = contract.getBadgeStructByTokenId(tokenId);

  guild.name = badgeStruct.name;
  guild.description = badgeStruct.description;
  guild.imageUri = badgeStruct.imageUri;
  guild.save();

  let tokenTransaction = fetchTokenTransaction(
    event.transaction.hash.toHexString()
  );

  tokenTransaction.tokenID = tokenId;
  tokenTransaction.type = 'GUILD_EDIT';
  tokenTransaction.txHash = event.transaction.hash;
  tokenTransaction.timestamp = event.block.timestamp;
  tokenTransaction.save();
}
