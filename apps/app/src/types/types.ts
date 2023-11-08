export type MembershipType = {
  tokenId: number;
  nickname: string;
  holder: string;
  profileImageUri: string;
  joinedAt: number;
  mintedAt: number;
};

export type BadgeType = {
  name: string;
  description: string;
};

export type MemberType = {
  membership: MembershipType;
  activityPoints: BigInt;
  experiencePoints: BigInt;
  attendedEvents: BigInt;
  badges: BadgeType[];
};
