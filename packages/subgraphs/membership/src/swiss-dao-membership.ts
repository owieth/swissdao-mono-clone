import {
  AddBadge as AddBadgeEvent,
  AddGuild as AddGuildEvent,
  EditBadge as EditBadgeEvent,
  EditGuild as EditGuildEvent,
  EditMembership as EditMembershipEvent,
  TransferSingle as TransferSingleEvent
} from '../generated/SwissDAOMembership/SwissDAOMembership';
import {
  handleBadgeAdd,
  handleBadgeEdit,
  handleBadgeTransfer
} from './badge/badge';
import {
  handleGuildAdd,
  handleGuildEdit,
  handleGuildTransfer
} from './guild/guild';
import {
  handleMembershipEdit,
  handleMembershipTransfer
} from './membership/membership';

export function handleTransferSingle(event: TransferSingleEvent): void {
  switch (event.params.id.toString().length) {
    case 1:
    case 3:
      handleBadgeTransfer(event);
      break;

    case 2:
      handleGuildTransfer(event);
      break;

    case 5:
      handleMembershipTransfer(event);
      break;

    default:
      break;
  }
}

export function handleAddBadge(event: AddBadgeEvent): void {
  handleBadgeAdd(event);
}

export function handleEditBadge(event: EditBadgeEvent): void {
  handleBadgeEdit(event);
}

export function handleAddGuild(event: AddGuildEvent): void {
  handleGuildAdd(event);
}

export function handleEditGuild(event: EditGuildEvent): void {
  handleGuildEdit(event);
}

export function handleEditMembership(event: EditMembershipEvent): void {
  handleMembershipEdit(event);
}
