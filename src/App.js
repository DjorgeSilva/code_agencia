import React, { useState, useEffect } from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyles.js"
import { Nav } from "./Componentes/Nav/Index.js"
import { Home } from "./Routes/Home/Index"
import { About } from "./Routes/About/Index"
import { Servico } from "./Routes/Servicos/Index"
import { ContatoRoute } from "./Routes/Contato/Index"
import { Footer } from "./Componentes/Footer/Index"
import ScrollToTop from "./Componentes/ScrollToTop/ScrollToTop"
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact component={About} />
        <Route path="/servicos" exact component={Servico} />
        <Route path="/contato" exact component={ContatoRoute} />
      </Router >
    )
  }


  return (
    <>
      <Router>
        <ScrollToTop>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Nav isOpen={isOpen} toggleCloseIcon={toggleCloseIcon} />

            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route component={AuthenticatedRoutes} />
            </Switch>
            
            <Footer />
          </ThemeProvider>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
