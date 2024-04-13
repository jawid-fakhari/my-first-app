import React, { Component } from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from 'recharts';

const data = [
    {
        subject: 'JavaScript',
        A: 85,
        fullMark: 150,
    },
    {
        subject: 'HTML',
        A: 90,
        fullMark: 150,
    },
    {
        subject: 'CSS',
        A: 90,
        fullMark: 150,
    },
    {
        subject: 'Package managers',
        A: 75,
        fullMark: 150,
    },
    {
        subject: 'React',
        A: 60,
        fullMark: 150,
    },
    {
        subject: 'Git',
        A: 75,
        fullMark: 150,
    },
];

function GraficChart() {

    return (

        <RadarChart
            cx={250}
            cy={250}
            outer25dius={150}
            width={500}
            height={500}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
                name="Jawid"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
            />
        </RadarChart>

    );
}

export default GraficChart;