import React, { useEffect, useState, useCallback } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { fetchData } from '../services/chartService';

interface ChartData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const ChartExample = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    setData(fetchData());
  }, []);

  const handleClick = useCallback((data: ChartData, index: number) => {
    console.log(`Clicked on data point at index ${index}:`, data);
  }, []);

  const handleLineClick = (e: any) => {
    if (e && e.activePayload && e.activeTooltipIndex !== undefined) {
      handleClick(e.activePayload[0].payload, e.activeTooltipIndex);
    }
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} onClick={handleLineClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>

      <h2>Bar Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} onClick={handleLineClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" barSize={30} />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <h2>Pie Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart onClick={(e: any) => {
          if (e && e.payload && e.index !== undefined) {
            handleClick(e.payload, e.index);
          }
        }}>
          <Pie data={data} dataKey="pv" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label />
          <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <h2>Area Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} onClick={handleLineClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="pv" stroke="#8884d8" fillOpacity={0.5} fill="#8884d8" />
          <Area type="monotone" dataKey="uv" stroke="#82ca9d" fillOpacity={0.3} fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartExample;
