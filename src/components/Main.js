import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import StarWars from './StarWars';
import { navItems } from '../utils/constants';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const Main = ({ changeHero }) => {

    return (
        <Routes>
            {['/', `/:heroId`, navItems[0].route, `${navItems[0].route}/:heroId`].map(path => <Route
                path={path}
                key={path}
                element={<Home changeHero={changeHero} />} />)}
            {[navItems[1].route, `${navItems[1].route}/:heroId`].map(path => <Route
                path={path}
                key={path}
                element={<AboutMe />} />)}
            <Route
                path={`${navItems[2].route}/*`}
                element={<StarWars />} />
            <Route
                path={`${navItems[3].route}/*`}
                element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )


    // switch (currentPage) {
    //     case navItems[1]:
    //         return <AboutMe />
    //     case navItems[2]:
    //         return <StarWars />
    //     case navItems[3]:
    //         return <Contact />
    //     default:
    //         return <Home />
    // }

}

export default Main