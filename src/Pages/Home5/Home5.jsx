import About from "../../Component5/About/About";
import Banner from "../../Component5/Banner/Banner";
import Blog from "../../Component5/Blog/Blog";
import CallDoAction from "../../Component5/CallDoAction/CallDoAction";
import Feature from "../../Component5/Feature/Feature";
import Marquee from "../../Component5/Marquee/Marquee";
import Portfolio from "../../Component5/Portfolio/Portfolio";
import Service from "../../Component5/Service/Service";
import Skill from "../../Component5/Skill/Skill";
import TeamMember from "../../Component5/TeamMember/TeamMember";
import Testimonial from "../../Component5/Testimonial/Testimonial";
import WhyChoose from "../../Component5/WhyChoose/WhyChoose";

const Home5 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Portfolio />
      <WhyChoose />
      <Service />
      <TeamMember />
      <Skill />
      <Marquee />
      <Testimonial />
      <Blog />
      <CallDoAction />
    </>
  );
};

export default Home5;
