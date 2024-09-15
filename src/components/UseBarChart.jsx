import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { mockDataTeam } from "../data/Data";
import Header from './Header';


const colors = ['#E63946', '#F1FAEE', '#F1D302', '#F7D4D6', '#A8DADC', '#9B5B5C', '#1d7966'];

const transformedData = mockDataTeam.reduce((acc, item) => {
  const existing = acc.find(d => d.category === item.category);
  if (existing) {
    existing.amount += item.amount;
  } else {
    acc.push({ category: item.category, amount: item.amount });
  }
  return acc;
}, []);


const getColor = (bar) => {

  const index = transformedData.findIndex(d => d.category === bar.indexValue);
  return colors[index % colors.length]; 
};

const UseBarChart = () => (
  <>
    <div style={{ height: "30vh" }}>
      <ResponsiveBar
        data={transformedData}
        keys={['amount']}
        indexBy="category"
        margin={{ top: 10, right: 90, bottom: 40, left: 90 }}
        border="2px solid red"
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={getColor} 
        borderColor={{
          from: 'color',
          modifiers: [
            ['darker', 1.6]
          ]
        }}
        axisTop={null}
        axisRight={null}
        // axisBottom={null}  
        axisBottom={{
          tickSize: 0,
          tickPadding: 0,
          tickRotation: 0,
          tickValues: [],           
          legend: 'Category',
          legendPosition: 'middle',
          legendOffset: 20
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Amount',
          legendPosition: 'middle',
          legendOffset: -60,
        }}
        labelSkipWidth={999}
        labelSkipHeight={999}
        labelTextColor={{
          from: 'color',
          modifiers: [
            ['darker', 1.6]
          ]
        }}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "white"
              }
            },
            legend: {
              text: {
                fill: "rgb(102, 194, 165)"
              }
            }
          }
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 20,
            translateY: 30,
            itemsSpacing: 2,
            itemWidth: 50,
            itemHeight: 1,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 15,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e => `${e.id}: ${e.formattedValue} in category: ${e.indexValue}`}
      />
    </div>
  </>
);

export default UseBarChart;
