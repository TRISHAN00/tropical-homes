import * as React from "react";
import Document, {Head, Main, NextScript, Html} from 'next/document';
import {ServerStyleSheet as StyledComponentSheets} from "styled-components";
import Script from "next/script";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const styledComponentSheet = new StyledComponentSheets();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        styledComponentSheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [
                    <React.Fragment key="styles">
                        {initialProps.styles}
                        {styledComponentSheet.getStyleElement()}
                    </React.Fragment>,
                ],
            };
        } finally {
            styledComponentSheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/images/static/fav.png"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>

                <div id="fb-root"></div>

                <div class="fb-customerchat" id="fb-customer-chat">
                </div>
                </body>
            </Html>
        );
    }
}

