"use client";

import { BarChart } from "../components/charts/bar-chart";

export default function Home() {
  return (
    <div className="h-[500px] w-[100%]">
      <BarChart
        data={{
          labels: ["Version 1.0", "Version 2.0", "Version 3.0", "Version 4.0"],
          datasets: [
            {
              label: "total count/value",
              data: [1552, 1319, 613, 1400],
              backgroundColor: ["aqua", "green", "red", "yellow"],
              borderColor: ["aqua", "green", "red", "yellow"],
              borderWidth: 0.5,
            },
          ],
        }}
        height={400}
      />
    </div>
  );
}
