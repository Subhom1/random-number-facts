import Head from "next/head";
import Router from "next/router";
import Nprogress from "nprogress";
import Navbar from "../components/Navbar";
Router.onRouteChangeStart = (url) => {
  // console.log(url);
  Nprogress.start();
};
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();
export default ({ children, title }) => (
  <React.Fragment>
    <Head>
      <title>Next.js</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <h1 className="mt-5 pt-5 text-center">{title}</h1>
    {children}
    <footer className="py-2 bg-dark fixed-bottom">
      <p className="m-0 text-center text-white">
        Copyright &copy; Next.js app {new Date().getFullYear()}
      </p>
    </footer>
  </React.Fragment>
);
