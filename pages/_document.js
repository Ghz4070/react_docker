import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, ...rest }) {
    const page = renderPage();
    return { ...page };
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
