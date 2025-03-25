import RootLayout from "./RootLayout";

export async function generateMetadata({ params, searchParams }, parent) {
  
  return {
    author: 'Sayan',
    title: "EBook",
    description: "EBook",
    image: '/images/ogimage.jpg',
    keywords: "EBook",
    type: 'website',
    siteLanguage: 'fa_IR',
    siteUrl: 'https://Sayan.ir.org/fa',
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    },
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  }
}

export default function({children}){
 return <RootLayout>{children}</RootLayout>
}