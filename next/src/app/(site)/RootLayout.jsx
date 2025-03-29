"use client"

import dynamic from 'next/dynamic';
import Script from 'next/script'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import { useConfig } from "@/lib/config";
// import { useLang } from "@/lib/lang";
import { config } from "@/lib";
import { usePathname } from 'next/navigation';
import Loading from './Loading';
import Header from '@/Theme/Site/Components/Public/Header';
import Footer from '@/Theme/Site/Components/Public/Footer';


// // کامپوننت‌های Header و Footer را به صورت داینامیک import می‌کنیم
// const Header = dynamic(() => import('@/Theme/Site/Components/Public/Header'), { 
//   loading: () => <Loading />,
//   ssr: false
// });

// const Footer = dynamic(() => import('@/Theme/Site/Components/Public/Footer'), {
//   loading: () => <Loading />,
//   ssr: false
// });

const StoreProvider = dynamic(() => import("@/redux/StoreProvider"))
const store = dynamic(() => import("@/redux/store"))
const App = dynamic(() => import("@/app/(shop-panel)/App").then((module) => module.App));

export default function RootLayout({ children }) {
  // const { Lang } = useLang();
  const pathname = usePathname();
  const pathParams = pathname.split("/")
  const local = (pathParams.length > 1) ? pathParams[1] : "fa";
  const { assetsPath, mediaPath } = useConfig();
  const [data, setData] = useState(null);

  return (
    <>
      <html lang="en" dir={local == "fa" ? "rtl" : "ltr"}>
        <head>
          <title>Bookle - Book Store WooCommerce Html Template</title>
          
          {/* Meta Tags */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="author" content="gramentheme" />
          <meta name="robots" content="index, follow" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="keywords" content="book store, ecommerce, books, online shop" />
          <meta name="description" content="Bookle - Book Store WooCommerce Html Template" />
          
          {/* Favicon */}
          <link rel="shortcut icon" href={`${assetsPath}/img/favicon.png`} />
          
          {/* Mobile Specific */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          {/* CSS Files */}
          <link rel="stylesheet" href={`${assetsPath}/css/bootstrap.min.css`} />
          <link rel="stylesheet" href={`${assetsPath}/css/all.min.css`} />
          <link rel="stylesheet" href={`${assetsPath}/css/animate.css`} />
          <link rel="stylesheet" href={`${assetsPath}/css/magnific-popup.css`} />
          <link rel="stylesheet" href={`${assetsPath}/css/meanmenu.css`} />
          <link rel="stylesheet" href={`${assetsPath}/css/swiper-bundle.min.css`} />
          <link rel="stylesheet" href={`${assetsPath}/css/nice-select.css`} />
          <link rel="stylesheet" href={`${assetsPath}/css/icomoon.css`} />
          {/* <link rel="stylesheet" href={`${assetsPath}/css/main.css`} /> */}
          
          {/* RTL CSS if needed */}
          {local == "fa" && <link rel="stylesheet" href={`${assetsPath}/css/main.rtl.css`} />}
        </head>
        
        <body suppressHydrationWarning={true}>
          {/* Cursor follower */}
          <div className="cursor-follower"></div>

          <StoreProvider store={store}>
            <App load={() => <Loading assetsPath={assetsPath} />} key={Math.random()}>
              <Header assetsPath={assetsPath} mediaPath={mediaPath} local={local} />
              
              <div className="page-content">
                {children}
              </div>
              
              <Footer assetsPath={assetsPath} mediaPath={mediaPath} local={local} />
            </App>
          </StoreProvider>

          {/* JS Plugins */}
          <Script src={`${assetsPath}/js/jquery-3.7.1.min.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/viewport.jquery.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/bootstrap.bundle.min.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/jquery.nice-select.min.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/jquery.waypoints.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/jquery.counterup.min.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/swiper-bundle.min.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/jquery.meanmenu.min.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/jquery.magnific-popup.min.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/wow.min.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/gsap.min.js`} strategy="beforeInteractive" />
          <Script src={`${assetsPath}/js/main.js`} strategy="beforeInteractive" />
          
          <ToastContainer />
        </body>
      </html>
    </>
  )
}