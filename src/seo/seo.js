import React from "react";
import Helmet from "react-helmet"

const Seo = ({ children }) => (
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
            <meta name="google-site-verification" content="9uL_paXtKdOMI0XgEEVnQmnBB_WNQ08TEQ6z6d-qVN0"/>
        </Helmet>
        { children }
    </>
)

export default Seo
