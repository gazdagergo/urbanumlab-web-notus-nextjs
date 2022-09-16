import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="http://urbanum.hu/wp-content/uploads/2021/03/cropped-urbanum_2d-32x32.jpg" sizes="32x32" />
          {/* TODO: add lab favicon */}
          <link rel="icon" href="http://urbanum.hu/wp-content/uploads/2021/03/cropped-urbanum_2d-192x192.jpg" sizes="192x192" />
          <link rel="apple-touch-icon" href="http://urbanum.hu/wp-content/uploads/2021/03/cropped-urbanum_2d-180x180.jpg" />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/brand/apple-icon.png"
          />
        </Head>
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
