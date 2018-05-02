import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { renderStaticOptimized } from "glamor/server";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = renderStaticOptimized(() => page.html);
    return { ...page, ...styles };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link href="/static/styles/reset.css" rel="stylesheet" />
          <link href="/static/styles/icons.css" rel="stylesheet" />
          <link href="/static/styles/fonts.css" rel="stylesheet" />
          <link href="/static/styles/animation.css" rel="stylesheet" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
