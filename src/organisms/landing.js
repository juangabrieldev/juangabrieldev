import React from "react"

const Landing = () => (
  <section
    className="
      flex
      flex-col
      h-screen
      justify-center
      ml-40
      mr-40
    "
    style={{ minHeight: 500 }}
  >
    <h6
      className="
        font-semibold
        mb-2
        text-2xl
        text-purple-400
      "
      data-sal="slide-up"
      data-sal-delay="0"
      data-sal-duration="400"
      data-sal-easing="ease"
    >
      Hello, I am
    </h6>
    <h1
      className="
        font-bold
        text-7xl
        text-gray-200
      "
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-duration="400"
      data-sal-easing="ease"
    >
      Juan Gabriel Palarpalar,
    </h1>
    <h1
      className="
        font-bold
        text-7xl
        text-gray-700
      "
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-duration="400"
      data-sal-easing="ease"
    >
      a front-end web developer.
    </h1>
    <p
      className="
        mb-12
        mt-12
        text-gray-600
      "
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-duration="400"
      data-sal-easing="ease"
      style={{ lineHeight: 1.8 }}
    >
      Based in Manila, Philippines focused on<br/>
      building, and occasionally, designing beautiful and responsive user interfaces<br/>
      with the help of tools such as&nbsp;
      <span
        className="font-extrabold"
        style={{ color: "#61DBFB" }}
      >
        React
      </span>
      &nbsp;and&nbsp;
      <span
        className="font-extrabold"
        style={{ color: "#ff5bf0" }}
      >
        Adobe XD
      </span>
      .
    </p>
    <div
      data-sal="slide-up"
      data-sal-delay="400"
      data-sal-duration="400"
      data-sal-easing="ease"
    >
      <a
        className="
          border-2
          border-purple-900
          inline-block
          p-3
          rounded
          text-purple-300
          hover:text-white
          hover:bg-purple-900
          duration-100
          transition
        "
        href="mailto:juangabrielpalarpalar@gmail.com"
      >
        Say hello
      </a>
    </div>
  </section>
)

export default Landing