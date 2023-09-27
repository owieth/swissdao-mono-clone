export type MembershipType = {
  id: number;
  nickname: string;
  joinedAt: number;
  profileImageUri: string;
};

export type BadgeType = {};

export type MemberType = {
  membership: MembershipType;
  activityPoints: number;
  experiencePoints: number;
  attendedEvents: number;
  badges: BadgeType[];
};
