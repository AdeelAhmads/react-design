import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Availability from './components/checkAvailablilty';
import Subscribe from './components/subscribe';

function App() {
  return (
    <div>
      <Header></Header>
      <Availability></Availability>
      <Subscribe />
    </div>
  );
}

export default App;
