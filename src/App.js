
import './App.css';
import Header from './components/Header';
import Landingpage from './components/Landingpage';
import HeadingContent from './components/HeadingContent';
import LoginSignup from './components/LoginSignup';
import CardHeading from './components/CardHeading';
import ScrollingCard1 from './components/ScrollingCard1';
import ScrollingCard2 from './components/ScrollingCard2';
// import ScrollingCard3 from './components/ScrollingCard3';
function App() {
  return (
    <div className="App">
      <Header />
      <Landingpage />
      <HeadingContent />
      <LoginSignup />
      <CardHeading
        class="cardHeading1"
        leftText="Incentives."
        rightText=" And so is the best way to shop."
      />
      <ScrollingCard1 />
      <CardHeading
        class="cardHeading2"
        leftText="Awards."
        rightText="Awards. Take a look at what’s new right now.."
      />
      <ScrollingCard2 />
      <CardHeading
        class="cardHeading3"
        leftText="Testimonials of Clients."
        rightText="Testimonials of Clients. Take a look at what’s new right now."
      />
      {/* <ScrollingCard3 /> */}
    </div>
  );
}

export default App;
