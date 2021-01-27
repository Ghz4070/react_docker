import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
export default class MyDocument extends Document {
  static getInitialProps({ renderPage, ...rest }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
            rel="stylesheet"
          ></link>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script
            src="https://unpkg.com/react/umd/react.production.min.js"
            crossOrigin="true"
          ></script>
          <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossOrigin="true"
          ></script>
          <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossOrigin="true"
          ></script>

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
