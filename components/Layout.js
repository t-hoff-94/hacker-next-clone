import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

const theme = {
  green: '#208000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'radnika_next';
    scroll-behavior: smooth;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: '#f9f3e5';
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.8;
  }
  main {min-height: 100vh;}
  a {
    text-decoration: none;
    color: ${theme.black}
  }
  ul, li, h1,h2,h3,h4,p {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  .button {
    background: teal;
    border-radius: 55px
    cursor: pointer;
    color: #fff;
    font-size: 22px;
    padding: .25rem 5rem;
    margin: 0 10px;
    text-decoration: none;
    transition: all .5s;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;
  }
  .col-full {
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

const StyledPage = styled.div`
  color: ${props => props.theme.black};
  transition: all 2s;
`;

const Inner = styled.main`
  background: #f7f6ef;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  ${props => props.slide  && 'transform: translateX(-50%);' }
`;

const Layout = ({ children, title, description }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta title={title} description={description ? description : 'Hacker News Clone'}/>
      <Header title={title} />
      <Inner>
        {children}
      </Inner>
    <Footer />
    <GlobalStyle />
  </StyledPage>
  </ThemeProvider>
)

export default Layout
