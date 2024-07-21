import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { mockDataTeam } from "../data/Data"
import Header from './Header';

const transformedData = mockDataTeam.reduce((acc, item) => {
  const existing = acc.find(d => d.category === item.category);
  if (existing) {
    existing.amount += item.amount;
  } else {
    acc.push({ category: item.category, amount: item.amount });
  }
  return acc;
}, []);

const BarChart = () => (
    <>
    <Header title="Bar Chart" subtitle="Graph between amount and categories" />
    <ResponsiveBar
        data={transformedData}
        keys={['amount']}
        indexBy="category"
        margin={{ top: 60, right:90, bottom: 40, left: 90 }}  
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'set2' }} 
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Category',
            legendPosition: 'middle',
            legendOffset: 30  
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Amount',
            legendPosition: 'middle',
            legendOffset: -60
        }}
        labelSkipWidth={20}  
        labelSkipHeight={10} 
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 10,  
                translateY: 0,
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
    </>
)

export default BarChart
