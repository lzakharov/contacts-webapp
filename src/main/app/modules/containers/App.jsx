import React from 'react';import Header from '../components/layout/Header';import Footer from '../components/layout/Footer';const App = ({children}) => (    <div>        <Header brand="Contacts"/>        <div className="container">            {children}        </div>        <Footer/>    </div>);export default App;