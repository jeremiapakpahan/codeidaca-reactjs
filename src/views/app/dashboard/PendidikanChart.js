import { Pie } from 'react-chartjs-2';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetPendidikanRequest } from "../../../redux-saga/actions/DashboardAction";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels"
ChartJS.register(ArcElement, Tooltip, Legend);


const chartColors = [
    "#FF4500",
    "#d45087",
    "#f95d6a",
    "#FF9900",
    "#993300",
    "#99CCFF",
    "#CCCCCC",
    "#CC6600",
    "#99CC33",
    "#545775",
    "#9999FF",
    "#ff7c43",
    "#CCCC99",
    "#336699",
    "#999933",
    "#666699",
    "#CC9933",
    "#006666",
    "#3399FF",
    "#666666",
    "#FFCC66",
    "#6699CC",
    "#663366",
    "#9999CC",
    "#669999",
    "#CCCC66",
    "#0066CC",
    "#99CCCC",
    "#999999",
    "#FFCC00",
    "#009999",
    "#999966",
    "#66CCCC",
    "#339966",
    "#CCCC33",
    "#003f5c",
    "#665191",
    "#a05195",
    "#2f4b7c",
    "#ffa600",
    "#EF6F6C",
    "#465775",
    "#56E39F",
    "#59C9A5",
    "#5B6C5D",
    "#0A2342",
    "#2CA58D",
    "#84BC9C",
    "#CBA328",
    "#F46197",
    "#DBCFB0",

];




export default function PendidikanChart() {
    const dispatch = useDispatch();

    const { pendidikan } = useSelector((state) => state.dashboardState);
    //const { interest } = Bebas;
    //console.log(interest);

    useEffect(() => {
        dispatch(doGetPendidikanRequest());
    }, []);
    const data = {
         labels: pendidikan.map((value) => value.name),
        //labels: ['SMK', 'D3', 'S1'],
        datasets: [
            {
                label: '# of Votes',
                data: pendidikan.map((value) => value.count),
                // data: [pendidikan[0].count, pendidikan[1].count, pendidikan[2].count],
                backgroundColor: chartColors,
                borderColor: chartColors,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    boxWidth: 10,
                    usePointStyle: true
                }
            },
            // title: {
            //     display: true,
            //     text: 'Chart.js Line Chart',
            // },
        },
    };

    const set = {
        responsive:false,
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let datasets = ctx.chart.data.datasets;
      
              if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                let percentage = Math.round((value / sum) * 100) + "%";
                return percentage;
              } else {
               // return percentage;
              }
            },
            color: "black"
          },
          legend: {
              position: 'right',
              labels:{
                  boxWidth: 6,
                  usePointStyle:true,
                  render: 'percentage',
                    fontColor: ['green', 'white', 'red'],
                    precision: 2
              }
          }
        }
      };


    //   return <Pie data={data} />

    return (
        <div className='position:relative h-60 w-60 m-auto'>
            <Pie options={set} data={data} plugins={[ChartDataLabels]} />
        </div>



    )
}