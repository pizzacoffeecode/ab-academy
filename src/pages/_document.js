import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
    return (
        <Html>
            <Head>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" /> */}
                {/* <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" /> */ }

                <link rel="preload"
                    href="/assets/fonts/Orbitron-VariableFont_wght.ttf"
                    as="font"
                    crossOrigin=""
                />

                <link rel="preload"
                    href="/assets/fonts/Reey-Regular.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}