import RootLayout from "./RootLayout";

export async function generateMetadata({ params, searchParams }, parent) {
  
  return {
    author: 'Sanegar',
    title: "THE Shop Online",
    description: "Sale Products Of Cosmetics.",
    image: '/images/ogimage.jpg',
    keywords: "Shop, Shop system management, Online sales",
    type: 'website',
    siteLanguage: 'fa_IR',
    siteUrl: 'https://sanegar.ir.org/fa',
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    },
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  }
}

export default function({children}){
 return <RootLayout>{children}</RootLayout>
}