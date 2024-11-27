import ChartFragments from "@/components/fragments/chart/index.fragment";
import TableFragment from "@/components/fragments/table/index.fragments";
import { areaChartOptions } from "@/utils/chartOptions";
import { EXAMPLE_CHART_DATA } from "@/utils/constant/exampleChartData";
import React from "react";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 p-2">
        {Array(2)
          .fill(null)
          .map((_, index) => (
            <div className="border p-3 rounded-lg basis-1/2" key={index}>
              <ChartFragments
                type="area"
                options={areaChartOptions}
                series={EXAMPLE_CHART_DATA}
                height={350}
              />
            </div>
          ))}
      </div>
      <div className="m-2 rounded-lg border">
        <TableFragment />
      </div>
    </div>
  );
}
