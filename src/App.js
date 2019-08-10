import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

/* Components */
import Container from './components/common/container';
import Navbar from './components/common/navbar';
import Footer from './components/common/footer';
import Home from './components/home/home';
import Practice from './components/practice/practice';
import Bio from './components/bio/bio';
import Contact from './components/contactus/contactus';
import PageNotFound from './components/pagenotfound/pagenotfound';

/* Content Provider */
import LanguageContext from './context/languagecontext';
import LanguageProvider from './provider/languageprovider';

const images = require.context('./src/img', true);

function App() {
  return (
    <div className="App">
        <LanguageProvider>
          <LanguageContext.Consumer>
            {content=>(
              <Router>
                <Navbar content={content.pack.navbar} />
                <div>
                  <Switch>
                    <Route path="/home" render={()=>(<Container><Home bgImg={images('./mallet_high.jpg')} bgImgMin={images('./mallet_low.jpg')} content={content.pack.home} /></Container>)} />
                    <Route path="/practice" render={()=>(<Container><Practice bgImg={images('./justice_high.jpg')} bgImgMin={images('./justice_low.jpg')} content={content.pack.practice} /></Container>)} />
                    <Route path="/bio" render={()=>(<Container><Bio content={content.pack.bio} /></Container>)} />
                    <Route path="/contact" render={()=>(<Container><Contact bgImg={images('./handshake_high.jpg')} bgImgMin={images('./handshake_low.jpg')} content={content.pack.contactus} /></Container>)} />
                    <Route path="/" exact render={()=><Redirect to="/home"></Redirect>} />
                    <Route render={()=>(<Container><PageNotFound content={content.pack.pageNotFound} bgImg={images(content.pack.pageNotFound.heroimage.high)} bgImgMin={images(content.pack.pageNotFound.heroimage.low)} /></Container>)} />
                  </Switch>
                </div>
                <Footer content={content.pack.footer} />
              </Router>
            )}
          </LanguageContext.Consumer>
        </LanguageProvider>
    </div>
  );
}

export default App;
