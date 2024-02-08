import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../../generated/SwissDAOMembership/SwissDAOMembership';
import { Token, TokenBalance, TokenTransaction } from '../../generated/schema';
import { fetchHolder, fetchTokenTransaction } from '../utils';

export function fetchToken(id: string): Token {
  let token = Token.load(id);

  if (!token) {
    token = new Token(id);
    token.tokenID = BigInt.fromString(id);
    token.imageUri = '';
    token.name = '';
    token.description = '';
    token.attributes = '';
    token.totalAmount = BigInt.fromI32(0);
    token.transactions = [];
    token.balances = [];
    token.holders = [];
  }

  return token;
}

export function fetchTokenBalance(id: string): TokenBalance {
  let tokenBalance = TokenBalance.load(id);

  if (!tokenBalance) {
    tokenBalance = new TokenBalance(id);
    tokenBalance.balance = BigInt.fromI32(0);
  }

  return tokenBalance;
}

export function handleTokenTransfer(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;
  const from = event.params.from;
  const to = event.params.to;
  const value = event.params.value;

  let token = fetchToken(tokenId.toString());

  const tokenStruct = contract.getBadgeStructByTokenId(tokenId);
  const member = fetchHolder(event.address, event.params.to);

  token.imageUri = tokenStruct.imageUri;
  token.name = tokenStruct.name;
  token.description = tokenStruct.description;
  token.attributes = tokenStruct.attributes;

  const transactions = token.transactions;
  const balances = token.balances;
  const holders = token.holders;

  let tokenTransaction = fetchTokenTransaction(
    event.transaction.hash.toHexString()
  );

  tokenTransaction.tokenID = tokenId;
  tokenTransaction.amount = value;
  tokenTransaction.txHash = event.transaction.hash;
  tokenTransaction.timestamp = event.block.timestamp;

  transactions.push(tokenTransaction.id);

  token.transactions = transactions;

  if (event.params.from == Address.zero()) {
    tokenTransaction.type = 'TOKEN_MINT';
    tokenTransaction.to = fetchHolder(event.address, to).id;

    token.totalAmount = token.totalAmount.plus(value);

    let tokenBalance = fetchTokenBalance(to.toHexString());
    tokenBalance.balance = tokenBalance.balance.plus(value);

    balances.push(tokenBalance.id);
    holders.push(member.id);

    token.balances = balances;
    token.holders = holders;
    tokenBalance.save();

    if (token.id == '1') {
      member.experiencePoints = token.id;
    } else if (token.id == '2') {
      member.activityPoints = token.id;
    } else if (token.id == '3') {
      member.attendedEvents = token.id;
    }
    member.save();
  } else if (event.params.to == Address.zero()) {
    tokenTransaction.type = 'TOKEN_BURN';
    tokenTransaction.from = fetchHolder(event.address, from).id;

    token.totalAmount = token.totalAmount.minus(value);

    let tokenBalance = fetchTokenBalance(from.toHexString());
    tokenBalance.balance = tokenBalance.balance.minus(value);

    const indexOfBalance = balances.indexOf(tokenBalance.id);
    const indexOfHolder = holders.indexOf(member.id);

    token.balances = balances.splice(indexOfBalance, 1);
    token.holders = balances.splice(indexOfHolder, 1);
    tokenBalance.save();

    let burnToken = new Token('0');
    burnToken.tokenID = BigInt.fromI32(0);
    burnToken.imageUri = '';
    burnToken.name = '';
    burnToken.description = '';
    burnToken.attributes = '';
    burnToken.totalAmount = BigInt.fromI32(0);
    burnToken.transactions = [];
    burnToken.balances = [];
    burnToken.holders = [];

    burnToken.save();

    if (token.id == '1') {
      member.experiencePoints = burnToken.id;
    } else if (token.id == '2') {
      member.activityPoints = burnToken.id;
    } else if (token.id == '3') {
      member.attendedEvents = burnToken.id;
    }

    member.save();
  }

  tokenTransaction.save();
  token.save();
}
