import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Banner from './sections/banner';
import Services from './sections/services';
import Business from './sections/business';
import Contact from './sections/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Services/>
      <Business/>
      <Contact/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
