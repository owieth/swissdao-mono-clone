import { Address, BigInt } from '@graphprotocol/graph-ts';
import {
  AddGuild as AddGuildEvent,
  EditGuild as EditGuildEvent,
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../../generated/SwissDAOMembership/SwissDAOMembership';
import { Guild } from '../../generated/schema';
import { fetchHolder, fetchTransaction } from '../utils';

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

  let holders = guild.holders;

  let transaction = fetchTransaction(event.transaction.hash.toHexString());

  transaction.tokenID = tokenId;
  transaction.txHash = event.transaction.hash;
  transaction.timestamp = event.block.timestamp;

  if (event.params.from == Address.zero()) {
    transaction.type = 'GUILD_JOIN';
    transaction.to = fetchHolder(event.address, event.params.to).id;

    const holder = fetchHolder(event.address, event.params.to);

    holders.push(holder.id);

    guild.holders = holders;

    guild.save();
  } else if (event.params.to == Address.zero()) {
    transaction.type = 'GUILD_LEAVE';
    transaction.from = fetchHolder(event.address, event.params.from).id;

    const holder = fetchHolder(event.address, event.params.from);

    const indexOfHolder = holders.indexOf(holder.id);
    holders.splice(indexOfHolder, 1);

    guild.holders = holders;

    guild.save();
  }

  transaction.save();
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

  let transaction = fetchTransaction(event.transaction.hash.toHexString());

  transaction.tokenID = tokenId;
  transaction.type = 'GUILD_ADD';
  transaction.txHash = event.transaction.hash;
  transaction.timestamp = event.block.timestamp;
  transaction.save();
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

  let transaction = fetchTransaction(event.transaction.hash.toHexString());

  transaction.tokenID = tokenId;
  transaction.type = 'GUILD_EDIT';
  transaction.txHash = event.transaction.hash;
  transaction.timestamp = event.block.timestamp;
  transaction.save();
}
