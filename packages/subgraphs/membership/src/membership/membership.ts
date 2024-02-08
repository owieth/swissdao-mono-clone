import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import {
  EditMembership as EditMembershipEvent,
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../../generated/SwissDAOMembership/SwissDAOMembership';
import { Membership } from '../../generated/schema';
import { fetchHolder, fetchTransaction } from '../utils';

export function fetchMembership(id: string): Membership {
  let membership = Membership.load(id);

  if (!membership) {
    membership = new Membership(id);
    membership.tokenID = BigInt.fromString(id);
    membership.profileImageUri = '';
    membership.nickname = '';
    membership.holder = Bytes.fromHexString(
      '0x0000000000000000000000000000000000000000'
    );
    membership.joinedAt = BigInt.fromI32(0);
    membership.experiencePoints = '0';
    membership.activityPoints = '0';
    membership.attendedEvents = '0';
  }

  return membership;
}

export function handleMembershipTransfer(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);
  const tokenId = event.params.id;

  let membership = fetchMembership(tokenId.toString());
  const membershipStruct = contract.getMemberStructByTokenId(tokenId);

  let transaction = fetchTransaction(event.transaction.hash.toHexString());

  transaction.tokenID = tokenId;
  transaction.amount = event.params.value;
  transaction.txHash = event.transaction.hash;
  transaction.timestamp = event.block.timestamp;

  if (event.params.from == Address.zero()) {
    transaction.type = 'MEMBERSHIP_MINT';
    transaction.to = fetchHolder(event.address, event.params.to).id;

    membership.profileImageUri = membershipStruct.profileImageUri;
    membership.nickname = membershipStruct.nickname;
    membership.holder = membershipStruct.holder;
    membership.joinedAt = event.block.timestamp;

    membership.isAdmin = contract.hasRole(
      Bytes.fromHexString(
        '0x0000000000000000000000000000000000000000000000000000000000000000'
      ),
      membershipStruct.holder
    );
    membership.save();
  } else if (event.params.to == Address.zero()) {
    transaction.type = 'MEMBERSHIP_BURN';
    transaction.from = fetchHolder(event.address, event.params.from).id;

    membership.tokenID = BigInt.fromI32(0);
    membership.nickname = '';
    membership.profileImageUri = '';
    membership.holder = event.params.to;
    membership.joinedAt = BigInt.fromI32(0);
    membership.experiencePoints = '0';
    membership.activityPoints = '0';
    membership.attendedEvents = '0';
    membership.isAdmin = false;
    membership.save();
  }

  transaction.save();
}

export function handleMembershipEdit(event: EditMembershipEvent): void {
  const tokenId = event.params._membershipId;

  let membership = Membership.load(tokenId.toString());

  if (membership) {
    const contract = SwissDAOMembership.bind(event.address);

    const membershipStruct = contract.getMemberStructByTokenId(tokenId);

    membership.nickname = membershipStruct.nickname;
    membership.profileImageUri = membershipStruct.profileImageUri;
    membership.save();

    let transaction = fetchTransaction(event.transaction.hash.toHexString());

    transaction.tokenID = tokenId;
    transaction.type = 'MEMBERSHIP_EDIT';
    transaction.txHash = event.transaction.hash;
    transaction.timestamp = event.block.timestamp;
    transaction.save();
  }
}
