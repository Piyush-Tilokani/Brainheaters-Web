import Script from 'next/script'
import React from 'react'

const Layout = () => {
  return (
    <div>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YKB11T1SYG"
      />
      <Script id="google-analytics" >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YKB11T1SYG');
        `}
      </Script>
    </div>
  )
}

export default Layout
