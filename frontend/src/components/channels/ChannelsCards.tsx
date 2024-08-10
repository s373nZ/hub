import { InfoIcon } from "lucide-react";
import { ChannelDropdownMenu } from "src/components/channels/ChannelDropdownMenu";
import { ChannelWarning } from "src/components/channels/ChannelWarning";
import { Badge } from "src/components/ui/badge.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Progress } from "src/components/ui/progress.tsx";
import { Separator } from "src/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/components/ui/tooltip.tsx";
import { formatAmount } from "src/lib/utils.ts";
import { Channel, Node } from "src/types";

type ChannelsCardsProps = {
  channels?: Channel[];
  nodes?: Node[];
  editChannel(channel: Channel): void;
};

export function ChannelsCards({
  channels,
  nodes,
  editChannel,
}: ChannelsCardsProps) {
  if (!channels?.length) {
    return null;
  }

  return (
    <>
      <p className="font-semibold text-lg mt-4">Channels</p>
      <div className="flex flex-col gap-4">
        {channels
          .sort((a, b) =>
            a.localBalance + a.remoteBalance > b.localBalance + b.remoteBalance
              ? -1
              : 1
          )
          .map((channel) => {
            const node = nodes?.find(
              (n) => n.public_key === channel.remotePubkey
            );
            const alias = node?.alias || "Unknown";
            const capacity = channel.localBalance + channel.remoteBalance;

            return (
              <Card>
                <CardHeader className="w-full pb-4">
                  <div className="flex flex-col items-start w-full">
                    <CardTitle className="w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 whitespace-nowrap text-ellipsis overflow-hidden">
                          {alias}
                        </div>
                        <ChannelDropdownMenu
                          alias={alias}
                          channel={channel}
                          editChannel={editChannel}
                        />
                      </div>
                    </CardTitle>
                    <Separator className="mt-5" />
                    <CardDescription className="w-full flex flex-col gap-4 mt-4">
                      <div className="flex w-full justify-between items-center">
                        <p className="text-muted-foreground font-medium">
                          Status
                        </p>
                        {channel.status == "online" ? (
                          <Badge variant="positive">Online</Badge>
                        ) : channel.status == "opening" ? (
                          <Badge variant="outline">Opening</Badge>
                        ) : (
                          <Badge variant="warning">Offline</Badge>
                        )}
                      </div>
                      <div className="flex w-full justify-between items-center">
                        <p className="text-muted-foreground font-medium">
                          Type
                        </p>
                        <p className="text-foreground">
                          {channel.public ? "Public" : "Private"}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-muted-foreground font-medium">
                          Capacity
                        </p>
                        <p className="text-foreground">
                          {formatAmount(capacity)} sats
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="flex flex-row gap-2 items-center">
                                <p className="text-muted-foreground font-medium">
                                  Reserve
                                </p>
                                <InfoIcon className="h-4 w-4 shrink-0" />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="w-[400px]">
                              Funds each participant sets aside to discourage
                              cheating by ensuring each party has something at
                              stake. This reserve cannot be spent during the
                              channel's lifetime and typically amounts to 1% of
                              the channel capacity.
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <p className="text-foreground">
                          {channel.localBalance <
                            channel.unspendablePunishmentReserve * 1000 && (
                            <>
                              {formatAmount(
                                Math.min(
                                  channel.localBalance,
                                  channel.unspendablePunishmentReserve * 1000
                                )
                              )}{" "}
                              /{" "}
                            </>
                          )}
                          {formatAmount(
                            channel.unspendablePunishmentReserve * 1000
                          )}{" "}
                          sats
                        </p>
                      </div>
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-between items-center">
                    <p className="text-muted-foreground font-medium text-sm">
                      Spending
                    </p>
                    <p className="text-muted-foreground font-medium text-sm">
                      Receiving
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mt-2">
                    <div className="flex-1 relative">
                      <Progress
                        value={(channel.localSpendableBalance / capacity) * 100}
                        className="h-6 absolute"
                      />
                      <div className="flex flex-row w-full justify-between px-2 text-xs items-center h-6 mix-blend-exclusion text-white">
                        <span
                          title={channel.localSpendableBalance / 1000 + " sats"}
                        >
                          {formatAmount(channel.localSpendableBalance)} sats
                        </span>
                        <span title={channel.remoteBalance / 1000 + " sats"}>
                          {formatAmount(channel.remoteBalance)} sats
                        </span>
                      </div>
                    </div>
                    <ChannelWarning channel={channel} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </>
  );
}