import { ColorModeScript } from "@chakra-ui/react";
import { Html,Head,Main,NextScript } from "next/document";

import theme from '../theme/index'
import Script from 'next/script'


function _fontDeclaration() {
  return (
    <Html id="html">
        <Head>
          <title>Brainheaters</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
          <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'/>
          <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css'/>
          <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css'></link>
        </Head>
        
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main/>
          <script  onError={(e) => {
        console.error('Script failed to load', e)
      }} type="text/javascript" strategy="afterInteractive" src="/extra/globalscripts.js" />
          <NextScript/>
        </body>
    </Html>
  )
}

export default _fontDeclaration
