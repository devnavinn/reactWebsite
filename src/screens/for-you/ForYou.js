import CardHeading from "../../components/CardHeading";
import Header from "../../components/Header";
import HeadingContent from "../../components/HeadingContent";
import Landingpage from "../../components/Landingpage";
import LastSection from "../../components/LastSection";
import LoginSignup from "../../components/LoginSignup";
import Profile from "../../components/Profile";
import ScrollingCard1 from "../../components/ScrollingCard1";
import ScrollingCard2 from "../../components/ScrollingCard2";
import ScrollingCard3 from "../../components/ScrollingCard3";


function ForYou() {
  return (
    <div>
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
      <Profile />
      <CardHeading
        class="cardHeading4"
        leftText="Gifts."
        rightText="Put the finishing touch on their favourite gift."
      />

      <ScrollingCard3 />
      <CardHeading
        class="cardHeading5"
        leftText="Gifts."
        rightText="Put the finishing touch on their favourite gift."
      />
      <LastSection />
    </div>
  );
}

export default ForYou;
