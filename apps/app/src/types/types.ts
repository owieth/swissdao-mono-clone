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
  isAdmin?: boolean;
};

export type NewMembershipType = {
  id: number;
  tokenID: number;
  holder: string;
  profileImageUri: string;
  nickname: string;
  joined_At: number;
  minted_At: number;
  experiencePoints: number;
  activityPoints: number;
  attendedEvents: number;
  guilds: NewGuildType[];
};

export type NewGuildType = {
  id: number;
  tokenID: number;
  name: string;
  description: string;
  imageUri: string;
  holders: NewMembershipType[];
};

// type Token @entity {
//   id: ID!
//   tokenID: BigInt!
//   imageUri: String!
//   name: String!
//   description: String!
//   attributes: String!
// }

// type Guild @entity {
//   id: ID!
//   tokenID: BigInt!
//   imageUri: String!
//   name: String!
//   description: String!
//   holders: [Membership!]!
// }
