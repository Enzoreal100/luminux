import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
  }
`

const AppContainer = styled.div`
  background: ${props => props.theme.colors.background};
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  margin-left: -0.5rem;
  margin-bottom: -0.5rem;
`

import Header from './components/Header.jsx'

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </AppContainer>
    </Router>
  )
}
export default App

