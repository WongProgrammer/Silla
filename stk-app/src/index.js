import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './Components/NavBar';
// import HomePage from './Pages/HomePage';
import VideoList from './Components/VideoList';
// import AboutPage from './Pages/AboutPage';
// import PortfolioPage from './Pages/PortfolioPage';
// import ContactPage from './Pages/ContactPage';
import reportWebVitals from './reportWebVitals';
import Footer from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <NavBar></NavBar>
    {/* <HomePage></HomePage> */}
    {/* <AboutPage></AboutPage> */}
    <VideoList></VideoList>
    {/* <ContactPage></ContactPage> */}
    {/* <PortfolioPage></PortfolioPage> */}
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
