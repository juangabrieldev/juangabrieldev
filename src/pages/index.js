import React from "react"
import Helmet from "react-helmet"

import "./index.css";

const IndexPage = () => (
  <>
    <Helmet>
      <title>Juan Gabriel Palarpalar | Software Engineer</title>
      <meta name="description" content="Juan Gabriel Palarpalar is a software engineer based in Manila, Philippines. He's currently doing front-end web development and UI/UX design."/>
      <meta itemprop="name" content="Juan Gabriel Palarpalar | Software Engineer"/>
      <meta itemprop="description" content="Juan Gabriel Palarpalar is a software engineer based in Manila, Philippines. He's currently doing front-end web development and UI/UX design."/>
      <meta itemprop="image" content=""/>
      <meta property="og:url" content="https://juangabrieldev.netlify.app"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Juan Gabriel Palarpalar | Software Engineer"/>
      <meta property="og:description" content="Juan Gabriel Palarpalar is a software engineer based in Manila, Philippines. He's currently doing front-end web development and UI/UX design."/>
      <meta property="og:image" content=""/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Juan Gabriel Palarpalar | Software Engineer"/>
      <meta name="twitter:description" content="Juan Gabriel Palarpalar is a software engineer based in Manila, Philippines. He's currently doing front-end web development and UI/UX design."/>
      <meta name="twitter:image" content=""/>
    </Helmet>
    <div>
      <main
        className="
          bg-white
          flex
          flex-col
          h-screen
          items-center
          justify-center
        "
      >
        <h1
          className="
            font-semibold
            sm:text-7xl
            text-5xl
            text-gray-900
          "
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="600"
          data-sal-easing="ease"
        >
          Hi, I am { " " }
          <span className="text-purple-500">Gab</span>
        </h1>
        <h3
          className="
            font-medium
            sm:text-2xl
            text-black
            text-gray-900
          "
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-duration="600"
          data-sal-easing="ease"
        >
          A front-end developer
        </h3>
      </main>
    </div>
  </>
)

export default IndexPage
