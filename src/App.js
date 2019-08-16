import React from 'react';
/* Routers */
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/* Styles */
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

/* Image Context */
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
                    <Route path="/home" component={()=>(
                      <Container>
                        <Home 
                          content={content.pack.home} 
                          bgImg={images(content.pack.home.hero.high)} 
                          bgImgMin={images(content.pack.home.hero.low)} 
                        />
                      </Container>)} 
                    />
                    <Route path="/practice" component={()=>(
                      <Container>
                        <Practice 
                          content={{...content.pack.practice, pagenotfound: content.pack.pageNotFound}} 
                          bgImg={images(content.pack.practice.hero.high)} 
                          bgImgMin={images(content.pack.practice.hero.low)} 
                        />
                      </Container>)} 
                    />
                    <Route path="/bio" component={()=>(
                      <Container>
                        <Bio 
                          content={content.pack.bio} 
                          bgImg={images(content.pack.bio.hero.high)} 
                          bgImgMin={images(content.pack.bio.hero.low)} 
                        />
                      </Container>)} 
                    />
                    <Route path="/contact" component={()=>(
                      <Container>
                        <Contact 
                          content={content.pack.contactus} 
                          bgImg={images(content.pack.contactus.hero.high)} 
                          bgImgMin={images(content.pack.contactus.hero.low)} 
                        />
                      </Container>)} 
                    />
                    <Route path="/" exact component={()=>(<Redirect to="/home"></Redirect>)} />
                    <Route component={()=>(
                      <Container>
                        <PageNotFound 
                          content={content.pack.pageNotFound} 
                          bgImg={images(content.pack.pageNotFound.hero.high)} 
                          bgImgMin={images(content.pack.pageNotFound.hero.low)} 
                        />
                      </Container>)} 
                    />
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
