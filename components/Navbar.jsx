import Link from "next/link";
import { useRouter } from "next/router";
export default () => {
  const router = useRouter();
  // console.log(router.pathname, 11111);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Random Fact</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li
              className={
                "nav-item " + (`${router.pathname}` == "/" ? "active" : "")
              }
            >
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li
              className={
                "nav-item " + (`${router.pathname}` == "/about" ? "active" : "")
              }
            >
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
