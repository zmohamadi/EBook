import React from "react";

export default function Shop() {
  const reports = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart report-box__icon text-theme-21"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      ),
      indicatorBg: "bg-green-500",
      indicatorText: "33%",
      indicatorDirection: "up",
      indicatorTooltip: "33% بالاتر از ماه گذشته",
      value: "4,710",
      label: "مورد فروش",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card report-box__icon text-theme-22"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
      ),
      indicatorBg: "bg-red-500",
      indicatorText: "2%",
      indicatorDirection: "down",
      indicatorTooltip: "2% پایین‌تر از ماه گذشته",
      value: "3,721",
      label: "سفارش جدید",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor report-box__icon text-theme-23"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      ),
      indicatorBg: "bg-green-500",
      indicatorText: "12%",
      indicatorDirection: "up",
      indicatorTooltip: "12% بالاتر از ماه گذشته",
      value: "2,149",
      label: "محصولات کلی",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user report-box__icon text-theme-10"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      ),
      indicatorBg: "bg-green-500",
      indicatorText: "22%",
      indicatorDirection: "up",
      indicatorTooltip: "22% بالاتر از ماه گذشته",
      value: "152,040",
      label: "بازدیدکنندگان",
    },
  ];

  return (
    
            <div className="col-span-12 mt-8">
              <div className="flex items-center h-10">
                <h2 className="text-lg font-medium truncate ml-5">گزارش کلی</h2>
              </div>
              <div className="grid grid-cols-12 gap-6 mt-5">
                {reports.map((report, index) => (
                  <div
                    key={index}
                    className="col-span-12 sm:col-span-6 xl:col-span-3"
                  >
                    <div className="report-box zoom-in">
                      <div className="box p-5">
                        <div className="flex">
                          <div className="report-box__icon text-blue-500">
                            {report.icon}
                          </div>
                          <div className="mr-auto">
                            <div
                              className={`report-box__indicator ${report.indicatorBg} cursor-pointer flex items-center relative`}
                              onMouseEnter={(e) => {
                                const tooltip = document.createElement("div");
                                tooltip.innerText = report.indicatorTooltip;
                                tooltip.className =
                                  "absolute bg-gray-700 text-white text-xs rounded py-1 px-2 -top-8 left-1/2 transform -translate-x-1/2";
                                e.currentTarget.appendChild(tooltip);
                              }}
                              onMouseLeave={(e) => {
                                const tooltip = e.currentTarget.querySelector("div");
                                if (tooltip) tooltip.remove();
                              }}
                            >
                              {report.indicatorText}
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4 mr-0.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
                            </div>
                          </div>
                        </div>
                        <div className="text-3xl font-bold leading-8 mt-6">
                          {report.value}
                        </div>
                        <div className="text-base text-gray-600 mt-1">
                          {report.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          
  );
}
