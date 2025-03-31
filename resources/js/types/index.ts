export type BanPunishmentData = {
    id: number;
    punishment_id: string;
    punished_uuid: string;
    server: string | null;
    security_ban: boolean;
    permanent: boolean;
    raw_ban: boolean;
    reason: string;
    expiration_date: string | null;
    issuer_uuid: string;
    punishment_date: string;
    unpunished_date: string | null;
    unpunished_issuer_id: string | null;
    created_at: string | null;
    updated_at: string | null;
};
export type CoreUserData = {
    id: number;
    uuid: string;
    last_seen: string | null;
    last_server: string | null;
    last_name: string | null;
    created_at: string | null;
    updated_at: string | null;
    name_histories: Array<CoreUserNameHistoryData>;
    bans: Array<BanPunishmentData> | null;
};
export type CoreUserNameHistoryData = {
    id: number;
    name: string;
    created_at: string | null;
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
