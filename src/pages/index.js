import Image from "next/image";
import { ResponsiveChord } from "@nivo/chord";

export default function Home() {
  const data = [
    [234, 155, 154, 139, 238],
    [415, 1906, 1332, 241, 210],
    [59, 3, 1736, 219, 826],
    [465, 922, 183, 230, 28],
    [326, 456, 214, 926, 1689]
  ];

  return (
    <div className="aspect-square">
      <ResponsiveChord
        data={data}
        keys={["John", "Raoul", "Jane", "Marcel", "Ibrahim"]}
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
      />
    </div>
  );
}
