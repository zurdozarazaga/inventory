
import './App.css';
import Header from './pages/Header';
import Navigation from './pages/Navigation';
import Main from './pages/Main';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="container mx-auto overflow-y-hidden ">
      <div className='grid grid-flow-row-dense grid-cols-auto grid-rows-auto h-screen '>
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
