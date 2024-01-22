import '../styles/globals.css'
import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react'
import  theme   from '../theme/index.js'
import  * as utils from '../utils/utils'
import { persistor, store } from '../redux/store'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { PersistGate } from 'redux-persist/lib/integration/react'
const manager = createLocalStorageManager('my-key')
import { Document, Page, pdfjs } from "react-pdf";
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'



export const UpgradeContext = React.createContext(null);

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const couponModal = useDisclosure()

  useEffect(() => {
    const excluded_routes = ['/about','/careers','/apply/content-creator','/apply/digital-marketing']
    const path = router.pathname
    const isMobile = utils.detectMobile()
    if(isMobile.mobile){
      const z = Boolean(excluded_routes.find(i=>path === i))
      if(!z){
        router.replace('/redirect')
      }
      
    }

  }, [])
  return (

        <SessionProvider session={pageProps.session}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <ChakraProvider colorModeManager={manager} theme={theme}>

                <Component {...pageProps} />
              </ChakraProvider>
            </PersistGate>
          </Provider>
        </SessionProvider>

  )
}

export default MyApp
