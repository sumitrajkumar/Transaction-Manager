import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { mockDataTeam } from "../data/Data";
import Header from "./Header";

const transformedData = mockDataTeam.reduce((acc, item) => {
  const existing = acc.find((d) => d.id === item.category);
  if (existing) {
    existing.value += item.amount;
  } else {
    acc.push({ id: item.category, value: item.amount });
  }
  return acc;
}, []);

const PieChart = ({ data = transformedData }) => (
  <>
    <Header title="Pie Chart" subtitle="Graph between amount and categories" />
    <div style={{ height: "70vh" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 40, bottom: 60, left: 40 }}
        innerRadius={0.4} // Adjust inner radius if needed
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 50,
            itemsSpacing: 0,
            itemWidth: 80,
            itemHeight: 10,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 10,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  </>
);

export default PieChart;
