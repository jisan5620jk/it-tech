import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb2 from "../../../Shared/BreadCrumb/BreadCrumb2";
import About from "./About";
import HelmetChanger from "../../../Shared/Helmet/Helmet";
import Marquee from "./Marquee/Marquee";
import TeamMember from "./TeamMember/TeamMember";
import CallDoAction from "./CallDoAction";
import Counter from "./Counter/Counter";
import Service from "./Service/Service";

const AboutInner3 = () => {
  return (
    <>
      <HelmetChanger title={'About Inner Page Three'} />
      <BreadCrumb2
        breadCrumbTitle={'About IT-Tech'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'About IT-Tech'}
      />
      <About />
      <Marquee />
      <Service />
      <Counter />
      <TeamMember />
      <CallDoAction />
    </>
  );
};

export default AboutInner3;
