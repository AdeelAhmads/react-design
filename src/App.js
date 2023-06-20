import logo from './logo.svg';
import './App.css';
// import Availability from './components/checkAvailablilty';
// import Subscribe from './components/subscribe';
// import InfoSection from './components/infoSection';
// import RecommendSection from './components/recommendSection';
// import VideoSection from './components/videoSection';
// import CountryInfo from './components/countryInfo';
// import MessageSection from './components/sendMessageSection';
import Layout from './layout/layout';
import MainPage from './layout/MainPage';



function App(props) {

  const children = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const adult = ["Adult", "yes", "no"];
  const formData = [children, adult];

  return (

    <div>

      <Layout>
        <MainPage formData={formData} />
      </Layout>

      {/* <Availability formData={[chidren, adult]} />
      <Subscribe />
      <InfoSection />
      <RecommendSection />
      <VideoSection />
      <CountryInfo />
      <MessageSection /> */}
    </div>
  );
}

export default App;
