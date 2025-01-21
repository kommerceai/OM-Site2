"use client"

import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

export function BarChart({ data }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
  }

  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Total Views',
        data: data.map(d => d.total),
        backgroundColor: 'rgba(0, 112, 255, 0.5)',
      },
    ],
  }

  return <Bar options={options} data={chartData} />
}

export function LineChart({ data }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
  }

  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'Engagement Rate',
        data: data.map(d => d.rate),
        borderColor: 'rgb(0, 112, 255)',
        backgroundColor: 'rgba(0, 112, 255, 0.5)',
      },
    ],
  }

  return <Line options={options} data={chartData} />
}

