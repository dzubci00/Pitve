// import "../styles/globals.css";
import "../styles/index.css";
/* import ReactGA from "react-ga";

ReactGA.initialize('YOUR_TRACKING_ID');

//id G-E5S2YTWC0T
// Track pageview on each route change
Router.events.on('routeChangeComplete', (url) => {
  ReactGA.pageview(url);
}); */

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
