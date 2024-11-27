export const areaChartOptions = {
  chart: {
    type: "area",
    id: "area-chart",
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May"],
  },
  colors: ["#00C9A7"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Example Data",
    align: "left",
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
};
