'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function ScriptLoader() {
  useEffect(() => {
    // Any client-side only scripts can be loaded here
  }, [])

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GA_ID');
        `}
      </Script>

      {/* HubSpot */}
      <Script
        id="hs-script-loader"
        src="//js.hs-scripts.com/YOUR_HUBSPOT_ID.js"
        strategy="lazyOnload"
      />

      {/* Intercom */}
      <Script id="intercom" strategy="lazyOnload">
        {`
          (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/YOUR_INTERCOM_APP_ID';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
        `}
      </Script>
    </>
  )
}

