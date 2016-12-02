import React from 'react'
import NavigationBar from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Registration from './components/registration'
import ModalContainer from './components/modal/modalContainer'
import Contact from './components/contact'
import Footer from './components/footer'

const App = () => (
    <div>
      <NavigationBar />
      <Header/>
      <About />
      <Registration />
      <ModalContainer />
      <Contact />
      <Footer/>
    </div>
);

export default App
