export type TokenType = {
  tokenID: number;
  name: string;
  description: string;
  imageUri: string;
  attributes: string;
  totalAmount: number;
  transactions: TransactionType[];
  balances: TokenBalanceType[];
  holders: MembershipType[];
};

export type TransactionType = {
  tokenID: number;
  from: MembershipType;
  to: MembershipType;
  amount: number;
  txHash: string;
  type: TransactionTypeEnum;
  timestamp: number;
};

export type TokenBalanceType = {
  holder: string;
  balance: number;
};

export type MembershipType = {
  id: number;
  tokenID: number;
  holder: string;
  profileImageUri: string;
  nickname: string;
  joinedAt: number;
  experiencePoints: TokenType;
  activityPoints: TokenType;
  attendedEvents: TokenType;
  isAdmin?: boolean;
  guilds: GuildType[];
  badges: BadgeType[];
  tokens: TokenType[];
};

export type BadgeType = {
  tokenID: number;
  name: string;
  description: string;
  attributes: string;
  imageUri: string;
  holders: MembershipType[];
};

export type GuildType = {
  id: number;
  tokenID: number;
  name: string;
  description: string;
  imageUri: string;
  holders: MembershipType[];
};

export enum TransactionTypeEnum {
  NONE = 'NONE',
  TOKEN_MINT = 'TOKEN_MINT',
  TOKEN_BURN = 'TOKEN_BURN',
  MEMBERSHIP_MINT = 'MEMBERSHIP_MINT',
  MEMBERSHIP_EDIT = 'MEMBERSHIP_EDIT',
  MEMBERSHIP_BURN = 'MEMBERSHIP_BURN',
  BADGE_ADD = 'BADGE_ADD',
  BADGE_MINT = 'BADGE_MINT',
  BADGE_EDIT = 'BADGE_EDIT',
  BADGE_BURN = 'BADGE_BURN',
  GUILD_ADD = 'GUILD_ADD',
  GUILD_JOIN = 'GUILD_JOIN',
  GUILD_LEAVE = 'GUILD_LEAVE',
  GUILD_EDIT = 'GUILD_EDIT'
}
