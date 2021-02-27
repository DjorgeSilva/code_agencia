import React, { useState, useEffect } from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyles.js"
import { Nav } from "./Componentes/Nav/Index.js"
import { Home } from "./Routes/Home/Index"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const theme = {
  primary_color: "#000",
  secundary_color: "#fff",
  ternary_color: "#67FFF0",
  font_color: "#333",
  font_padrao: "Roboto, sans-serif",
  font_awesome: 'Faster One, cursive'
};


function App() {

  const [isOpenAtendOnline, setisOpenAtendOnline] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleCloseIcon = () => {
    setIsOpen(!isOpen)
  }

  const AuthenticatedRoutes = () => {
    return (
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router >
    )
  }

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Nav isOpen={isOpen} toggleCloseIcon={toggleCloseIcon} />
          <Switch>
            <Route component={AuthenticatedRoutes} />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
