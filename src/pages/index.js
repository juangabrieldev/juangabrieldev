import React from "react"

import "./index.css";

const IndexPage = () => (
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
)

export default IndexPage
