import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WysiwygEditor } from "@/components/ui/wysiwyg";
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

            <Tabs defaultValue="profile">
                <TabsList>
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="valuations">Bewertungen</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <WysiwygEditor setMarkdown={console.log} markdown="" />
                </TabsContent>
                <ServerTeamMemberValuationTab member={member} />
            </Tabs>
        </Authenticated>
    );
}
