export type MembershipType = {
  tokenId: number;
  nickname: string;
  joinedAt: number;
  profileImageUri: string;
};

export type BadgeType = {
  name: string;
  description: string;
};

export type MemberType = {
  membership: MembershipType;
  activityPoints: number;
  experiencePoints: number;
  attendedEvents: number;
  badges: BadgeType[];
};
