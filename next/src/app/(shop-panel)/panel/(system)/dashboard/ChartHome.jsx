import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  PieController,
  DoughnutController,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  PieController,
  DoughnutController,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartHome = () => {
  useEffect(() => {
     // نمودار خطی با حالت منحنی
     const ctxLine = document.getElementById('salesChart');
     if (ctxLine) {
       new ChartJS(ctxLine, {
         type: 'line', // نوع نمودار
         data: {
           labels: [
             'فروردین',
             'اردیبهشت',
             'خرداد',
             'تیر',
             'مرداد',
             'شهریور',
             'مهر',
             'آبان',
             'آذر',
             'دی',
             'بهمن',
             'اسفند',
           ],
           datasets: [
             {
               label: 'فروش',
               data: [65, 59, 80, 81, 56, 55, 60, 75, 90, 100, 85, 70],
               borderColor: '#003F8A',
               borderWidth: 2,
               fill: false,
               tension: 0.4, // برای منحنی شدن خط
                // pointStyle: 'circle',
              // pointRadius: 5,
              // pointHoverRadius: 15
             },
           ],
         },
         
         options: {
           responsive: true,
           plugins: {
            
             legend: {
               labels: {
                 font: {
                   family: 'IRANSans, Arial, sans-serif',
                 },
               },
             },
           },
           scales: {
             x: {
               ticks: {
                 font: {
                   family: 'IRANSans, Arial, sans-serif',
                 },
               },
             },
             y: {
               ticks: {
                 font: {
                   family: 'IRANSans, Arial, sans-serif',
                 },
               },
             },
           },
         },
       });
     }
 
    // نمودار دایره‌ای
    const ctxPie = document.getElementById('report-pie-chart');
    if (ctxPie) {
      new ChartJS(ctxPie, {
        type: 'pie',
        data: {
          labels: ['17 - 30 سن', '31 - 50 سن', '50 <= سن'],
          datasets: [
            {
              data: [62, 33, 10],
              backgroundColor: ['#003F8A', '#D31E3A', '#FDB813'], // آبی، قرمز، زرد
              hoverBackgroundColor: ['#002F6C', '#B31830', '#D99912'],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true, // استفاده از استایل دایره‌ای برای لیبل‌ها
                pointStyle: 'circle', // شکل دایره‌ای
                font: {
                  family: 'IRANSans, Arial, sans-serif',
                  size: 14,
                },
                padding: 10, // فاصله بین لیبل‌ها
              },
            },
          },
        },
      });
      
    }

    // نمودار دونات
    const ctxDonut = document.getElementById('report-donut-chart');
    if (ctxDonut) {
      new ChartJS(ctxDonut, {
        type: 'doughnut',
        data: {
          labels: ['17 - 30 سن', '31 - 50 سن', '50 <= سن'],
          datasets: [
            {
              data: [62, 33, 10],
              backgroundColor: ['#003F8A', '#D31E3A', '#FDB813'], // آبی، قرمز، زرد
              hoverBackgroundColor: ['#002F6C', '#B31830', '#D99912'],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: {
                  family: 'IRANSans, Arial, sans-serif',
                  size: 14,
                },
              },
            },
          },
        },
      });
    }
  }, []);

  return (
    <>
    <div className="col-span-12 lg:col-span-6 mt-6">
        <div className="box p-5">
          <h2 className="text-lg font-medium">نمودار فروش</h2>
          <canvas id="salesChart" className="mt-4"></canvas>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
        <div className="box p-5">
          <h2 className="text-lg font-medium truncate ml-5">فروش بالای هفتگی</h2>
          <canvas id="report-pie-chart" height="300" className="mt-3"></canvas>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
        <div className="box p-5">
          <h2 className="text-lg font-medium truncate ml-5">گزارش فروش</h2>
          <canvas id="report-donut-chart" height="300" className="mt-3"></canvas>
        </div>
      </div>
    </>
  );
};

export default ChartHome;
