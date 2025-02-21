export type BlogMetaData = {
    title: string;
    description: string;
    image: string;
};
export type BlogPostData = {
    id: number;
    permalink: string;
    slug: string;
    title: string;
    content: string;
    blog_type: string;
    created_at: string;
    updated_at: string;
    meta: BlogMetaData;
};
export type CoreUserData = {
    id: number;
    uuid: string;
    last_seen: string | null;
    last_server: string | null;
    last_name: string | null;
    created_at: string | null;
    updated_at: string | null;
};
export type ServerTeamMemberData = {
    id: number;
    nickname: string;
    discordId: string;
    minecraftUuid: string;
    dateOfBirth: string;
    firstName: string;
    gender: string;
    personalEmail: string;
    phoneNumber: string;
    recruitmentDate: string;
    teamEmail: string;
    terminationDate: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    user: UserData;
    valuations: Array<ServerTeamMemberValuationData>;
};
export type ServerTeamMemberValuationData = {
    id: number;
    valuation: string;
    comment: string;
    serverTeamMemberId: number;
    valuatedById: number;
    createdAt: string | null;
    updatedAt: string | null;
    valuatedBy: UserData;
};
export type UserData = {
    id: number;
    name: string;
    email: string;
    avatar: string | null;
    emailVerifiedAt: string | null;
    createdAt: string | null;
    updatedAt: string | null;
};
