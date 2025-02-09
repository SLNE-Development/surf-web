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
    userId: number;
};
