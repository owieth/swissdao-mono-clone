export type MembershipType = {
  tokenId: number;
  nickname: string;
  holder: string;
  profileImageUri: string;
  joinedAt: number;
  mintedAt: number;
};

export type TokenType = {
  tokenId: number;
  name: string;
  description: string;
  imageUri: string;
  attributes: string[];
};

export type GuildType = {
  badge: TokenType;
  holders: string[];
  members: MembershipType[];
};

export type MemberType = {
  membership: MembershipType;
  activityPoints: BigInt;
  experiencePoints: BigInt;
  attendedEvents: BigInt;
  badges: TokenType[];
};
