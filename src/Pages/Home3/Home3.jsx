import About from "../../Component3/About/About";
import Banner from "../../Component3/Banner/Banner";
import Blog from "../../Component3/Blog/Blog";
import Brand from "../../Component3/Brand/Brand";
import CallDoAction from "../../Component3/CallDoAction/CallDoAction";
import Feature from "../../Component3/Feature/Feature";
import Pricing from "../../Component3/Pricing/Pricing";
import Service from "../../Component3/Service/Service";
import TeamMember from "../../Component3/TeamMember/TeamMember";
import Testimonial from "../../Component3/Testimonial/Testimonial";
import WhyChoose from "../../Component3/WhyChoose/WhyChoose";
import Work from "../../Component3/Work/Work";

const Home3 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <WhyChoose />
      <Service />
      <Work />
      <CallDoAction/>
      <Testimonial />
      <TeamMember />
      <Pricing />
      <Brand />
      <Blog />
    </>
  );
};

export default Home3;
