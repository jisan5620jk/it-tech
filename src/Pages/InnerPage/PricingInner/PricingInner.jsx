import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import ContactBox from "../ContactInner/ContactBox/ContactBox";
import Pricing from "./Pricing/Pricing";
import HelmetChanger from "../../../Shared/Helmet/Helmet";

const PricingInner = () => {
  return (
    <>
      <HelmetChanger title={'Pricing Inner Page Style One'} />
      <BreadCrumb
        breadCrumbTitle={'Affordable Price'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Pricing Plan'}
      />
      <Pricing />
      <ContactBox />
    </>
  );
};

export default PricingInner;
