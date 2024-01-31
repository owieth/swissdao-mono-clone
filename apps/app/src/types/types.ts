export type TokenType = {
  tokenId: number;
  name: string;
  description: string;
  imageUri: string;
  attributes: string[];
};

export type MembershipType = {
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
  guilds: GuildType[];
  isAdmin?: boolean;
};

export type GuildType = {
  id: number;
  tokenID: number;
  name: string;
  description: string;
  imageUri: string;
  holders: MembershipType[];
};
