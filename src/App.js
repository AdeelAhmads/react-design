import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Availability from './components/checkAvailablilty';
import Subscribe from './components/subscribe';
import InfoSection from './components/infoSection';

function App() {
  return (
    <div>
      <Header></Header>
      <Availability></Availability>
      <Subscribe />
      <InfoSection />
    </div>
  );
}

export default App;
