import '../styles/globals.css'
import { React, useEffect, useState } from "react";
import { Layout } from '../components';
import Router from 'next/router';
import NextNProgress from 'nextjs-progressbar';
// import CustomLoading from '../components/UI/Loading/CustomLoading';
import Script from 'next/script'
function MyApp({ Component, Resize, pageProps }) {

  // const DONE_DURATION = 250

  const [ loading, setLoading ] = useState(true)
  // const [ timeoutId, setTimeoutId ] = useState(null)

  // useEffect(() => {
  //   window.onload = setLoading(false);
  // }, [])




  // const onLoad = () => setLoading(true)
  // const onDone = () => {
  //   setLoading(false)
  //   setTimeoutId(
  //     setTimeout(() => {
  //       setTimeoutId(null)
  //       setLoading(null)
  //     }, DONE_DURATION)
  //   )
  // }
  // useEffect(() => {
  //   document.addEventListener("DOMContentLoaded", onLoad);
  //   Router.events.on('routeChangeStart', onLoad)
  //   Router.events.on('routeChangeComplete', onDone)
  //   Router.events.on('routeChangeError', onDone)



  //   return () => {
  //     document.removeEventListener("DOMContentLoaded", onDone);
  //     Router.events.off('routeChangeStart', onLoad)
  //     Router.events.off('routeChangeComplete', onDone)
  //     Router.events.off('routeChangeError', onDone)
  //   }
  //   return () => {
  //     document.removeEventListener("DOMContentLoaded", setLoading(false));
  //   }


  //   setLoading(true);
  // }, [])

  // useEffect(
  //   () => () => {
  //     if (timeoutId) clearTimeout(timeoutId)
  //   },
  //   [ timeoutId ]
  // )


  return (
    <>
      <Script
        id="setmore_script"
        strategy='lazyOnload'
        type="text/javascript"
        src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"
      // onLoad={ () => {
      //   setLoading(false)
      // } }
      />
      {
        // loading &&
        // < CustomLoading />
      }
      <Layout>
        <NextNProgress color={ "#FFF" } />
        <Component { ...pageProps } />
      </Layout>
    </>
  )
}

export default MyApp

