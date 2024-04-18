import React from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import NavigationButton from "./components/NavigationButton";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>New HTML</title>
        <meta
          name="description"
          content="Bond - Minimal and Clean Portfolio Template"
        />
        <link rel="stylesheet" href="./css/font-awesome.min.css" />
        <link rel="stylesheet" href="./css/themify-icons.css" />
        <link rel="stylesheet" href="./css/main.css" />
        <link rel="stylesheet" href="./css/responsive.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600%7CPoppins:600"
          rel="stylesheet"
        />
        <link rel="icon" href="assets/img/favicon.png" />
      </Head>
      <header>
        <div className="container">
          <Link href="/" className="logo">
            Gagan
          </Link>
          <nav id="navigation">
            <NavigationButton />
            <ul className="main-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="#">Portfolio</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/2-columns">2 Columns</Link>
                  </li>
                  <li>
                    <Link href="/3-columns">3 columns</Link>
                  </li>
                  <li>
                    <Link href="/4-columns">4 columns</Link>
                  </li>
                  <li>
                    <Link href="/single-project">single project</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div class="container-full">
          <div class="hero-portfolio">
            <h1>our works</h1>
            <p>
              Every single project is a new challenge for us. You probably
              haven't heard of them pabst art party, godard portland sustainable
              vice asymmetrical aesthetic portland prism.
            </p>
          </div>

          <div class="works_3-columns">
            <a href="single-project.html">
              <div class="works-item">
                <Image
                  src="/img/portfolio-items/img1.jpg"
                  alt="Landscape picture"
                  class="img-responsive"
                  width={759}
                  height={443}
                />

                <div class="works-item-overlay">
                  <div class="works-item-info">
                    <h3 class="works-info-title">Project Name</h3>
                    <p class="works-info-category">Title</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="single-project.html">
              <div class="works-item">
                <Image
                  src="/img/portfolio-items/img2.jpg"
                  alt="Landscape picture"
                  class="img-responsive"
                  width={759}
                  height={443}
                />
                <div class="works-item-overlay">
                  <div class="works-item-info">
                    <h3 class="works-info-title">Project Name</h3>
                    <p class="works-info-category">Title</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="single-project.html">
              <div class="works-item">
                <Image
                  src="/img/portfolio-items/img3.jpg"
                  alt="Landscape picture"
                  class="img-responsive"
                  width={759}
                  height={443}
                />
                <div class="works-item-overlay">
                  <div class="works-item-info">
                    <h3 class="works-info-title">Project Name</h3>
                    <p class="works-info-category">Title</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="single-project.html">
              <div class="works-item">
                <Image
                  src="/img/portfolio-items/img4.jpg"
                  alt="Landscape picture"
                  class="img-responsive"
                  width={759}
                  height={443}
                />
                <div class="works-item-overlay">
                  <div class="works-item-info">
                    <h3 class="works-info-title">Project Name</h3>
                    <p class="works-info-category">Title</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="single-project.html">
              <div class="works-item">
                <Image
                  src="/img/portfolio-items/img5.jpg"
                  alt="Landscape picture"
                  class="img-responsive"
                  width={759}
                  height={443}
                />
                <div class="works-item-overlay">
                  <div class="works-item-info">
                    <h3 class="works-info-title">Project Name</h3>
                    <p class="works-info-category">Title</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="single-project.html">
              <div class="works-item">
                <Image
                  src="/img/portfolio-items/img5.jpg"
                  alt="Landscape picture"
                  class="img-responsive"
                  width={759}
                  height={443}
                />
                <div class="works-item-overlay">
                  <div class="works-item-info">
                    <h3 class="works-info-title">Project Name</h3>
                    <p class="works-info-category">Title</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="single-project.html">
              <div class="works-item">
                <Image
                  src="/img/portfolio-items/img6.jpg"
                  alt="Landscape picture"
                  class="img-responsive"
                  width={759}
                  height={443}
                />
                <div class="works-item-overlay">
                  <div class="works-item-info">
                    <h3 class="works-info-title">Project Name</h3>
                    <p class="works-info-category">Title</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="single-project.html">
              <div class="works-item">
                <Image
                  src="/img/portfolio-items/img4.jpg"
                  alt="Landscape picture"
                  class="img-responsive"
                  width={759}
                  height={443}
                />
                <div class="works-item-overlay">
                  <div class="works-item-info">
                    <h3 class="works-info-title">Project Name</h3>
                    <p class="works-info-category">Title</p>
                  </div>
                </div>
              </div>
            </a>

            <div class="clearfix"></div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <div className="container">
            <p className="copyright">
              <span className="fa fa-copyright" /> Company Name
            </p>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <link rel="stylesheet" href="/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/css/themify-icons.css" />
      <link rel="stylesheet" href="/css/main.css" />
      <link rel="stylesheet" href="/css/responsive.css" />

      <Script src="/js/main.js"></Script>
    </>
  );
}
