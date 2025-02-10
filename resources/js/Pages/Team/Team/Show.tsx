import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Authenticated from "@/layouts/AuthenticatedLayout";
import { User } from "@/pages/Dashboard";
import { ServerTeamMemberValuationTab } from "@/pages/Team/Team/components/show/valuation-tab";
import { ServerTeamMemberData } from "@/types";
import { Head } from "@inertiajs/react";

export default function ShowServerTeamMemberPage({
    member,
    users,
}: {
    member: ServerTeamMemberData;
    users: User[];
}) {
    return (
        <Authenticated>
            <Head title={`${member.nickname}`} />

            <Tabs defaultValue="valuations">
                <TabsList>
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="valuations">Bewertungen</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">Profile</TabsContent>
                <ServerTeamMemberValuationTab member={member} />
            </Tabs>
        </Authenticated>
    );
}
