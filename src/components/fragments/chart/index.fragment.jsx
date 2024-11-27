"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartFragments = ({ type, options, series, height }) => {
  return (
    <Chart options={options} series={series} type={type} height={height} />
  );
};

export default ChartFragments;
