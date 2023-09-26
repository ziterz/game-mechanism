import Image from "next/image";
import { ResponsiveChord } from "@nivo/chord";

import ArcTooltipMemoized from './arc';
import RibbonTooltipMemoized from './ribbon';

export default function Home() {

  const data = {
    keys: ["Action Points", "Auction/Bidding", "Events", "Open Drafting", "Take That", "End Game Bonuses", "Scenario / Mission / Campaign Game", "Market", "Multi-Use Cards", "Set Collection", "Hand Management", "Tags", "Trick-taking", "Communication Limits", "Variable Player Powers", "Cooperative Game", "Victory Points as a Resource"],
    mechanism: [
      [1, 2, 4, 3, 1, 5, 7, 13, 1, 6, 7, 1, 8, 1, 12, 1, 20],
      [5, 2, 4, 20, 1, 20, 6, 7, 1, 6, 7, 1, 8, 1, 7, 1, 8],
      [3, 20, 4, 3, 7, 1, 8, 0, 1, 20, 7, 20, 8, 1, 1, 1, 1],
      [0, 2, 4, 3, 1, 5, 7, 13, 1, 6, 7, 1, 8, 7, 1, 8, 0],
      [22, 2, 4, 3, 20, 5, 7, 13, 1, 6, 7, 1, 8, 1, 12, 1, 20],
      [3, 2, 4, 3, 1, 5, 7, 13, 1, 6, 7, 1, 8, 1, 1, 6, 7],
      [4, 2, 4, 3, 1, 5, 7, 1, 1, 6, 1, 6, 7, 1, 12, 1, 20],
      [7, 2, 7, 1, 8, 20, 6, 7, 1, 6, 7, 1, 0, 1, 12, 1, 0],
      [8, 2, 4, 3, 1, 1, 6, 7, 1, 6, 7, 1, 8, 1, 1, 6, 7],
      [0, 2, 4, 3, 7, 1, 6, 7, 1, 6, 7, 1, 8, 1, 12, 1, 1],
      [9, 2, 4, 20, 1, 20, 7, 13, 1, 6, 7, 1, 8, 1, 7, 1, 8],
      [7, 2, 4, 3, 1, 5, 7, 13, 1, 6, 7, 1, 8, 1, 1, 1, 20],
    ]
  };

  return (
    <div className="container mx-auto h-screen text-black">
      <ResponsiveChord
        data={data.mechanism}
        keys={data.keys}
        margin={{ top: 36, right: 36, bottom: 36, left: 36 }}
        padAngle={0.02}
        innerRadiusRatio={0.96}
        innerRadiusOffset={0.02}
        inactiveArcOpacity={0.25}
        arcBorderColor={{
          from: "color",
          modifiers: [["darker", 0.6]]
        }}
        activeRibbonOpacity={0.75}
        inactiveRibbonOpacity={0.25}
        ribbonBorderColor={{
          from: "color",
          modifiers: [["darker", 0.6]]
        }}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1]]
        }}
        colors={{ scheme: "nivo" }}
        theme={{ fontSize: 12 }}
        motionConfig="stiff"
        arcTooltip={ArcTooltipMemoized}
        ribbonTooltip={RibbonTooltipMemoized}
      />
    </div>

  );
}
