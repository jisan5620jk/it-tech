import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Feature from "./Feature/Feature";
import Career from "./Career";
import HelmetChanger from "../../../Shared/Helmet/Helmet";

const CareerInner = () => {
  return (
    <>
      <HelmetChanger title={'Career Inner Page'} />
      <BreadCrumb
        breadCrumbTitle={'Careers'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Careers'}
      />
      <Career />
      <Feature />
    </>
  );
};

export default CareerInner;