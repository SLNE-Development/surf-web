import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { TabsContent } from "@/components/ui/tabs";
import { formatDateTime } from "@/lib/date-utils";
import { ServerTeamMemberData } from "@/types";
import {
    FaCircleArrowDown,
    FaCircleArrowRight,
    FaCircleArrowUp,
} from "react-icons/fa6";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ServerTeamMemberValuationTab({
    member,
}: {
    member: ServerTeamMemberData;
}) {
    const positiveValuations = member.valuations.filter(
        (valuation) => valuation.valuation === "POSITIVE"
    );
    const negativeValuations = member.valuations.filter(
        (valuation) => valuation.valuation === "NEGATIVE"
    );

    const absoluteValuation =
        positiveValuations.length - negativeValuations.length;

    const sliderColor =
        absoluteValuation > 0
            ? "success"
            : absoluteValuation < 0
            ? "danger"
            : "default";

    return (
        <TabsContent value="valuations">
            <Card>
                <CardHeader>
                    <CardTitle>Bewertungen</CardTitle>
                    <CardDescription>
                        Hier werden die Bewertungen des Mitglieds angezeigt.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex flex-col">
                        <Slider
                            variant={sliderColor}
                            disabled
                            value={[absoluteValuation]}
                            min={-member.valuations.length}
                            max={member.valuations.length}
                        />
                        <div className="flex flex-row justify-between">
                            <span className="text-muted-foreground">
                                Negativ
                            </span>
                            <span className="text-muted-foreground">
                                Neutral
                            </span>
                            <span className="text-muted-foreground">
                                Positiv
                            </span>
                        </div>
                    </div>

                    <div className="">
                        <Accordion type="multiple">
                            {member.valuations.map((valuation) => {
                                const iconColor =
                                    valuation.valuation === "POSITIVE"
                                        ? "text-success"
                                        : valuation.valuation === "NEGATIVE"
                                        ? "text-danger"
                                        : "text-muted-foreground";
                                const accordionIcon =
                                    valuation.valuation === "POSITIVE" ? (
                                        <FaCircleArrowUp />
                                    ) : valuation.valuation === "NEGATIVE" ? (
                                        <FaCircleArrowDown />
                                    ) : (
                                        <FaCircleArrowRight />
                                    );

                                return (
                                    <AccordionItem
                                        value={valuation.id.toString()}
                                        key={valuation.id}
                                    >
                                        <AccordionTrigger>
                                            <div className="flex flex-row justify-between w-full pe-2 items-center">
                                                <div className="flex flex-row items-center gap-2">
                                                    <span className={iconColor}>
                                                        <accordionIcon.type />
                                                    </span>
                                                    <span>
                                                        {
                                                            valuation.valuatedBy
                                                                .name
                                                        }
                                                    </span>
                                                </div>
                                                <div className="text-muted-foreground text-xs">
                                                    {formatDateTime(
                                                        new Date(
                                                            valuation.createdAt ??
                                                                0
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="bg-background p-2">
                                            <div className="prose">
                                                <Markdown
                                                    remarkPlugins={[remarkGfm]}
                                                    children={valuation.comment}
                                                />
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    );
}
