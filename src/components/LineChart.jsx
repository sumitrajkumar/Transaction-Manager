import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { mockDataTeam } from "../data/Data";
import Header from './Header';

const categories = Array.from(new Set(mockDataTeam.map(item => item.category)));
const transformedData = categories.map(category => {
    const dataPoints = mockDataTeam
        .filter(item => item.category === category)
        .map(item => ({
            x: item.dateTime, 
            y: item.amount
        }));
    return {
        id: category,
        data: dataPoints
    };
});

const LineChart = ({ data = transformedData }) => (
    <>
        <Header title="Bar Chart" subtitle="Graph between amount and categories" />
    <div style={{ height: 400 }}> 
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }} 
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Category',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Amount',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={8} 
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            enablePointLabel={true}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 300,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    </div>
    </>
);

export default LineChart;
