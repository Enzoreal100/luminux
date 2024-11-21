import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx' 
import Portfolio from './pages/portfolio.jsx' 
import Footer from './components/Footer.jsx' 

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.body};
    font-weight: 700;
  }
`

const AppContainer = styled.div`
  background: ${props => props.theme.colors.background};
  width: 100vw;
  overflow-x: hidden;
  margin-left: -0.5rem;
  margin-bottom: -0.5rem;
`

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`

import Header from './components/Header.jsx'

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App

