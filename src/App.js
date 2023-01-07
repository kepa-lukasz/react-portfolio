import 'bootstrap/dist/css/bootstrap.css';

import { HashRouter, Routes, Route } from "react-router-dom";
import { Row, Container } from 'react-bootstrap';
import { useState, lazy, Suspense } from 'react';
import {useCookies} from "react-cookie";

import Navbar from './components/main/navbar';
import Footer from "./components/main/footer"
import SwitchElement from "./components/main/switch";
import Loading from './components/main/loading';

//components loads only when its needed
const Jokes = lazy(() => import('./components/jokes'))
const Cookies = lazy(() => import("./components/main/cookies"))
const TicTac = lazy(() => import('./components/tictac'))
const Er404 = lazy(() => import('./components/main/er404'))
const Day = lazy(() => import('./components/unusual_days'))
const Home = lazy(() => import('./components/home/home'))


function App() {
  const [cookies] = useCookies();

  //set default value for theme
  const [theme, setTheme] = useState("bg-light text-black p-0")
  let themeHandler = ""
  //change classes for dark or light theme
  const handleClick = (isDark) => {
    themeHandler = (isDark) ? "bg-dark text-white p-0" : "bg-light text-black p-0"
    setTheme(themeHandler)
  }
  return (
    <HashRouter>
      <Container fluid className={theme} style={{ minHeight: "100vh" }}>


        <Container fluid className="fixed-top text-light bg-success" style={{ boxShadow: "0 0 5px #198754" }}>
          <SwitchElement handleClick={handleClick} />
        </Container>

        <Container className='p-0 pt-3' fluid style={{ marginTop: "3vh" }}>
          <Navbar />
          <Suspense fallback={<Loading />}>
            {(cookies.showJoke !== "0")? <Jokes /> : null}
            {(cookies.allowCookies !== "1")? <Cookies /> : null}
            <Row className='m-0'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tictac' element={<TicTac />} />
                <Route path='/unusual_day' element={<Day />} />
                <Route path='/*' element={<Er404 />} />
              </Routes>
            </Row>
          </Suspense>

          <Footer style={{ alignSelf: "flex-end" }} />
        </Container>
      </Container>
    </HashRouter>
  );
}

export default App;
