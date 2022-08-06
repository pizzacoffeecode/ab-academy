
import React, { createRef, useEffect } from 'react'

//? Data
import { getSortedPostsData } from '../../lib/posts'
import { HomePageData } from '../../public/utils/data';

//? My Components
import { VideoSection, ContactSection } from '../sections/';
import ImageSection from '../sections/ImageSectionR/ImageSection';
import ContentOverlay from '../components/UI/ContentOverlays/ContentOverlay';
import ParallaxSection from '../sections/ParallaxSection/ParallaxSection';

//? 3rd
import { ModalExample } from '../components/UI/Modals/Modal';

//? GSAP
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


//? CSS
import styles from '../styles/Home.module.css'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {

  // const socialData = [ ...allPostsData ];

  const { title, text, image } = HomePageData[ 0 ];
  const { title2, text2, image2 } = HomePageData[ 1 ];
  const { title3, text3, image3 } = HomePageData[ 2 ];
  const { title4, text4, image4 } = HomePageData[ 3 ];

  // const social = socialData.map((imgsrc, idx) =>
  //   <div div >
  //     <Image
  //       key={ idx }
  //       src={ imgsrc }
  //       alt="AB Logo"
  //       layout='responsive'
  //       width={ 300 }
  //       height={ 300 }
  //     />
  //   </div>
  // );

  // const videoRef = createRef();
  // const imgSctAlphaTopAnim = createRef();
  // const imgSctAlphaBtmAnim = createRef();
  // const imgSctAlphaBtmAnimEnd = createRef();
  // const imgSctBravoTopAnim = createRef();
  // const imgSctBravoBtmAnim = createRef();

  useEffect(() => {
    gsap.from('#imgSctAlphaTopAnim',
      {
        scrollTrigger: {
          trigger: '#videoRef',
          start: "center",
          end: "bottom",
          // markers: true,
          // scrub: true
          // toggleActions: "restart"
        },
        x: "-100%",
        skewX: "30deg",
        opacity: "0%",
        opacity: 0,
        // duration: 1
      });
    gsap.from('#imgSctBravoTopAnim',
      {
        scrollTrigger: {
          trigger: '#imgSctAlphaBtmAnim',
          start: "start",
          // end: "bottom",
          // markers: true,
          // scrub: true
          // toggleActions: "restart"
        },
        x: "100%",
        skewX: "30deg"
        // duration: 3
      });
    gsap.from('#imgSctAlphaBtmAnim',
      {
        scrollTrigger: {
          trigger: '#imgSctAlphaTopAnim',
          start: "start",
          // end: "1000px",
          // markers: true,
          // scrub: true
          // toggleActions: "restart"
        },
        x: "100%",
        skewX: "-30deg",
        opacity: 0
      });
    gsap.from('#imgSctBravoBtmAnim',
      {
        scrollTrigger: {
          trigger: '#imgSctBravoTopAnim',
          start: "start",
          // end: imgSctAlphaTopAnim,
          // markers: true,
          // scrub: true
          // toggleActions: "restart"
        },
        x: "-100%",
        skewX: "-30deg",
        opacity: 0
      });

    // tl.from(imgSctAlphaBtmAnim.current, { xPercent: 500 });
    // tl.from(imgSctBravoTopAnim.current, { xPercent: - 500 });
    // tl.from(imgSctBravoBtmAnim.current, { xPercent: 500 });

    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: "imgSctAlphaBtmAnim",
    //   start: "top top"
    // })
  }, []);



  function HandleClick() {
    Calendly.initPopupWidget({ url: 'https://calendly.com/air-interactive?background_color=000000&text_color=ffffff' });
    return false;
  }

  return (
    <div className={ styles.home__container }>

      <div className={ styles.app_modal } id="app-modal" >
        <div className={ styles.home__slogan }><p>Own Your Craft</p></div>
      </div>

      <div className={ styles.banner__button__container } >
        <ModalExample />
      </div>
      <div className={ styles.page } >
        <div className={ styles.home__media_container } id='videoRef'>
          <VideoSection video='assets/video/soccer_cover.mp4' />
          {/* <VideoSection video='assets/video/cover__video.mp4' /> */ }
          {/* <VideoSection video='https://res.cloudinary.com/dy41hsmoc/video/upload/v1647354886/AB_Academy/video/cover/cover__video_ejc3g7.mp4' /> */ }
        </div>
        <div className={ styles.home__content_overlay }>
          <ContentOverlay content={ true } />
        </div>
        <div id='imgSctAlphaTopAnim' >
          <ImageSection
            imageLeft={ true }
            title={ title }
            image={ image }
            text={ text }
          />
        </div>

        <div id='imgSctAlphaBtmAnim'>
          <ImageSection
            imageLeft={ false }
            title={ title2 }
            image={ image2 }
            text={ text2 }
          />
        </div>

        {/* <div className={ styles.video }>
          <video
            playsInline
            id='bgvideo'
            autoPlay
            loop
            muted
            src='assets/video/ABSepia.mp4'
            objectFit='cover'
          >
            <p>Your browser does not support HTML5 video.</p>
            <source src='assets/video/ABSepia.mp4' type='video/mp4' />
          </video >
        </div> */}

        <div id='imgSctBravoTopAnim'>
          <ImageSection
            imageLeft={ true }
            title={ title3 }
            image={ image3 }
            text={ text3 }
          />
        </div>
        {/* <div className={ styles.home__media_container2 }>
          <VideoSection video='assets/video/ABSepia.mp4' />
        </div> */}
        <div id='imgSctBravoBtmAnim'>
          <ImageSection
            imageLeft={ false }
            title={ title4 }
            image={ image4 }
            text={ text4 }
          />
        </div>
        <div className='spacer' style={ { height: "400px" } } />
        <div className={ styles.review__footer } />
      </div >

    </div >
  );
}

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from './../components/Layout/Layout';


// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//            <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }



