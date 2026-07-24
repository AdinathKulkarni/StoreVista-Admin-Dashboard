import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

export const dataset = [
  { month: '2021', expenses: 3200, losses: 1200, profit: 1800 },
  { month: '2022', expenses: 2800, losses: 900, profit: 1600 },
  { month: '2023', expenses: 3500, losses: 1400, profit: 2100 },
  { month: '2024', expenses: 3300, losses: 1100, profit: 1900 },
  { month: '2025', expenses: 2700, losses: 1500, profit: 2200 },
  { month: '2026', expenses: 3200, losses: 1700, profit: 2400 },
];

export function valueFormatter(value) {
  return `$${value}`;
}

const chartSetting = {
  yAxis: [
    {
      label: 'USD',
      width: 70,
    },
  ],
  height: 340,
};

export default function Histogram() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ dataKey: 'month' }]}
      series={[
        { dataKey: 'expenses', label: 'Expenses', valueFormatter },
        { dataKey: 'losses', label: 'Losses', valueFormatter },
        { dataKey: 'profit', label: 'Profit', valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
