import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Testimonial from "../../../Component2/Testimonial/Testimonial";
import HelmetChanger from "../../../Shared/Helmet/Helmet";

const ProjectInner = () => {
  return (
    <>
      <HelmetChanger title={'Project Inner Page'} />
      <BreadCrumb
        breadCrumbTitle={'Our Projects'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Our Proejcts'}
      />
      <Testimonial />
    </>
  );
};

export default ProjectInner;
