import { convertDate } from './convertDate';

export const settingChartData = (setChartData, prices) => {
    setChartData({
        labels: prices.map((price) => convertDate(price[0])),
        datasets: [
            {
                data: prices.map((price) => price[1]),
                borderColor: "#F0B90B",
                borderWidth: 2,
                fill: true,
                tension: 0.25,
                backgroundColor: "rgba(238, 192, 93, 0.1)",
                pointRadius: 0
            },
        ],
    });
};