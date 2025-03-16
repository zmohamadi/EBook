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

// ثبت پلاگین‌ها و کنترلرها
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

const ChartHomeTest = () => {
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
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: false,
              tension: 0.4, // برای منحنی شدن خط
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

    // نمودار دایره‌ای توپر
    const ctxPie = document.getElementById('report-pie-chart');
    if (ctxPie) {
      new ChartJS(ctxPie, {
        type: 'pie', // نوع نمودار
       
        data: {
          labels: ['محصول 1', 'محصول 2', 'محصول 3'],
          datasets: [
            {
              data: [30, 50, 20],
              backgroundColor: ['#003F8A', '#D31E3A', '#00C1CF'], // رنگ‌های آبی، قرمز، فیروزه‌ای
              hoverBackgroundColor: ['#002F6C', '#B31830', '#00A1AB'], // رنگ‌های تیره‌تر

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
                  size: 14,
                },
              },
            },
          },
          },
      });
    }

    // نمودار دایره‌ای توخالی (دونات)
    const ctxDonut = document.getElementById('report-donut-chart');
    if (ctxDonut) {
      new ChartJS(ctxDonut, {
        type: 'doughnut', // نوع نمودار
        data: {
          labels: ['محصول A', 'محصول B', 'محصول C'],
          datasets: [
            {
              data: [40, 35, 25],
              backgroundColor: ['#003F8A', '#D31E3A', '#FDB813'], // آبی، قرمز، زرد
              hoverBackgroundColor: ['#002F6C', '#B31830', '#D99912'],

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
