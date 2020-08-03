import React from "react"

import MainContainer from '../molecules/mainContainer'

import Header from '../organisms/header'
import Landing from '../organisms/landing'

import Seo from "../seo/seo";

import "./index.css";

const IndexPage = () => (
  <Seo>
    <Header/>
    <MainContainer>
      <Landing/>
    </MainContainer>
  </Seo>
)

export default IndexPage
