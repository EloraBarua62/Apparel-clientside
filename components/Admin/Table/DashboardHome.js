import React from 'react';
import dashboardSummary from '../../../utils/dashboardSummary';
import Image from 'next/image';
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import styles from './DashboardHome.module.scss'

const DashboardHome = () => {
    const dashboard_summary = dashboardSummary();
    console.log(dashboard_summary)


    const state = {
        series: [
            {
                name: "Orders",
                data: [34, 65, 34, 65, 34, 34, 34, 56, 23, 67, 23, 45]
            },
            {
                name: "Revenue",
                data: [34, 32, 45, 32, 34, 34, 43, 56, 65, 67, 45, 78]
            },
            {
                name: "Sellers",
                data: [78, 32, 34, 54, 65, 34, 54, 21, 54, 43, 45, 43]
            }
        ],
        options: {
            color: ['#181ee8', '#181ee8'],
            plotOptions: {
                radius: 30
            },
            chart: {
                background: 'transparent',
                foreColor: '#d0d2d6'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: '#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            },
        }
    };

    return (
      <div>
        <div className={styles.summary_cart_display}>
          {dashboard_summary.map((criteria) => (
            <div key={criteria.value} className={styles.summary_cart_design}>
              <div>
                <h1>{criteria.value}</h1>
                <h3>{criteria.title}</h3>
              </div>
              <div className={styles.icon_design}>
                <criteria.icon />
                {/* <span>{criteria.icon}</span> */}
              </div>
            </div>
          ))}
        </div>

        {/* Graph */}
        <div className={styles.chart_display}>
          <ApexChart
            options={state.options}
            series={state.series}
            type="bar"
            width={500}
            height={350}
          />
        </div>
      </div>
    );
};

export default DashboardHome;