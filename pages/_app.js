import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import React from 'react';
import { useRouter } from "next/router";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import LoadingBar from 'react-top-loading-bar'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query'
import { ContextProvider } from '../context/Context';
import { useState } from 'react';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [Progress,setProgress] = useState(0)
  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
  },[])
  const queryClient = React.useRef(new QueryClient())
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        
          <ContextProvider>
            <div className='bg-gradient-to-b from-gray-300 to-white'>

              <Navbar />
              <LoadingBar
              color='#E11D48'
              progress={Progress}
              height={5}
              shadowStyle={{'height':'5px','width':'20px'}}
              waitingTime={200}
              onLoaderFinished={() => setProgress(0)}
            />
              <ToastContainer />
              <Component {...pageProps} />
              <Footer />
            </div>
            <ReactQueryDevtools initialIsOpen={false}
              position="bottom-right" />
          </ContextProvider>
        
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
