"use client";

import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import React from "react";

Chart.register(CategoryScale);

export const BarChart = (props: any) => {
  return (
    <Bar
      {...props}
      options={{
        maintainAspectRatio: false,
        scales: {
          // @ts-ignore
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 15,
          },
        },
      }}
    />
  );
};
