import React from 'react';
import dashboardSummary from '../../../utils/dashboardSummary';
import Image from 'next/image';
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import styles from './DashboardHome.module.scss'
import Link from 'next/link';
import profile from '../../../public/profile.jpg'

const DashboardHome = () => {
    const dashboard_summary = dashboardSummary();
    
    const state = {
      series: [
        {
          name: "Orders",
          data: [34, 65, 34, 65, 34, 34, 34, 56, 23, 67, 23, 45],
        },
        {
          name: "Revenue",
          data: [34, 32, 45, 32, 34, 34, 43, 56, 65, 67, 45, 78],
        },
        {
          name: "Sellers",
          data: [78, 32, 34, 54, 65, 34, 54, 21, 54, 43, 45, 43],
        },
      ],
      options: {
        color: ["#181ee8", "#181ee8"],
        plotOptions: {
          radius: 30,
        },
        chart: {
          background: "transparent",
          foreColor: "#d0d2d6",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          curve: ["smooth", "straight", "stepline"],
          lineCap: "butt",
          colors: "#f0f0f0",
          width: 0.5,
          dashArray: 0,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apl",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        legend: {
          position: "top",
        },
        responsive: [
          {
            breakpoint: 565,
            yaxis: {
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apl",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
            options: {
              plotOptions: {
                bar: {
                  horizontal: true
                }
              },
              chart: {
                height: '550px'
              }
            }
          },
        ],
      },
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
        <div className={styles.chart_message_display}>
          {/* Chart */}
          <div className={styles.chart_display}>
            <ApexChart
              options={state.options}
              series={state.series}
              type="bar"
              // width={500}
              height={350}
            />
          </div>

          {/*  Message display */}
          <div className={styles.seller_message_display}>
            {/* Message header */}
            <div className={styles.message_header}>
              <h3>Recent Seller Message</h3>
              <Link href="admin" className={styles.link_design}>
                View All
              </Link>
            </div>

            {/* Message Prompt */}
            <div className={styles.message_prompt}>
              <ol>
                <li className={styles.single_message_field}>
                  {/* seller image */}
                  <div className={styles.profile_image}>
                    <Image
                      className={styles.image_property}
                      src={profile}
                      alt=""
                      fill={false}
                    ></Image>
                  </div>

                  {/* seller message */}
                  <div className={styles.text_box}>
                    <div className={styles.status}>
                      <Link href="admin" className={styles.text_design}>
                        Admin
                      </Link>
                      <time className={styles.text_design}>4 day ago</time>
                    </div>

                    <div className={styles.text}>ioajfls</div>
                  </div>
                </li>
                <li className={styles.single_message_field}>
                  {/* seller image */}
                  <div className={styles.profile_image}>
                    <Image
                      className={styles.image_property}
                      src={profile}
                      alt=""
                      fill={false}
                    ></Image>
                  </div>

                  {/* seller message */}
                  <div className={styles.text_box}>
                    <div className={styles.status}>
                      <Link href="admin" className={styles.text_design}>
                        Admin
                      </Link>
                      <time className={styles.text_design}>4 day ago</time>
                    </div>

                    <div className={styles.text}>ioajfls</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className={styles.recent_order_display}>
          {/* Order Header */}
          <div className={styles.order_header}>
            <h3>Recent Orders</h3>
            <Link href="admin" className={styles.link_design}>
              View All
            </Link>
          </div>

          {/* Table Section */}
          <div className={styles.table_section}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Price</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Order Status</th>
                  <th scope="col">Active</th>
                  <th scope="col">Order</th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4, 5].map((d, i) => (
                  <tr key={i}>
                    <td scope="row">sdfsdfsdf</td>
                    <td scope="row">$345</td>
                    <td scope="row">pending</td>
                    <td scope="row">Order Status</td>
                    <td scope="row">
                      <Link style={{color: 'white'}} href=''>view</Link>
                    </td>
                    <td scope="row">3456565</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default DashboardHome;