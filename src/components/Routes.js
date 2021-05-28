import React, { useEffect } from "react"
import { Route, useLocation } from "react-router-dom"
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Footer from './Footer'

function AppContainer() {
    return (
        <>
            <Home />
            <About />
            <Projects />
            <Resume />
            <Footer />
        </>
    )
}

function Routes() {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
            document.getElementsByClassName("Home")[0].scrollIntoView()
        } else if (location.pathname === "/about") {
            document.getElementsByClassName("About")[0].scrollIntoView()
        } else if (location.pathname === "/projects") {
            document.getElementsByClassName("Projects")[0].scrollIntoView()
        } else if (location.pathname === "/resume") {
            document.getElementsByClassName("Resume")[0].scrollIntoView()
        }

    }, [location])

    return (
        <>
            <Route exact path='/' component={AppContainer} />
            <Route path='/about' component={AppContainer} />
            <Route exact path='/projects' component={AppContainer} />
            <Route path='/resume' component={AppContainer} />
        </>
    );
}

export default Routes