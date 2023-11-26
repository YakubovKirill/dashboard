'use client';

import React from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { CHART_DATA } from '@/app/data';

import styles from './chart.module.css';

const Chart = () => (
    <div className={styles.container}>
        <h2 className={styles.title}>Weekly dashboard</h2>
        <ResponsiveContainer width='100%' height="90%">
            <LineChart width={730} height={250} data={CHART_DATA}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

export default Chart;
