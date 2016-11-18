import React from 'react'
import NavigationBar from './navbar'
import Title from './title'
import Footer from './footer'
import ModalContainer from './components/modal/modalContainer'

const App = () => (
    <div>
      <NavigationBar />
      <Title/>
      <ModalContainer />
      <Footer/>
    </div>
);

export default App
