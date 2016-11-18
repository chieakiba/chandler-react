import React from 'react'
import NavigationBar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'
import ModalContainer from './components/modal/modalContainer'

const App = () => (
    <div>
      <NavigationBar />
      <Header/>
      <ModalContainer />
      <Footer/>
    </div>
);

export default App
