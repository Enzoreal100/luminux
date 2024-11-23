import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx' 
import Portfolio from './pages/portfolio.jsx' 
import Footer from './components/Footer.jsx' 

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth !important;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    font-weight: 700;
  }

`

const AppContainer = styled.div`
  background: ${props => props.theme.colors.background};
  overflow-x: hidden;
`

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`

import Header from './components/Header.jsx'

function App() {
  return (
    <AppContainer>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </AppContainer>
  )
}

export default App

