import Script from 'next/script';

export default function renderGoogleAnaltics() {
  return (
    <>
      <Script id="google-analytics-script" strategy="lazyOnload" src='https://www.googletagmanager.com/gtag/js?id=G-3KYP2NRC5M' />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3KYP2NRC5M');
          `}
      </Script>
    </>
  );
}