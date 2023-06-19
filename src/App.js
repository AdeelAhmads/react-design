import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Availability from './components/checkAvailablilty';
import Subscribe from './components/subscribe';
import InfoSection from './components/infoSection';
import RecommmendSection from './components/recommendSection';
import VideoSection from './components/videoSection';
import CountryInfo from './components/countryInfo';
import MessageSection from './components/sendMessageSection';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Availability></Availability>
      <Subscribe />
      <InfoSection />
      <RecommmendSection />
      <VideoSection />
      <CountryInfo />
      <MessageSection />
      <Footer />
    </div>
  );
}

export default App;
