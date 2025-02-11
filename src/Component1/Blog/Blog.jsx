import { FaRegCalendarCheck } from "react-icons/fa6";
import blogThumb from '/images/blog_img.png';
import blogThumb2 from '/images/blog_img2.png';
import blogThumb3 from '/images/blog_img3.png';
import titleShape from '/images/sub-title-shape.png';
import BlogCard from "./BlogCard";
import { GoArrowRight } from "react-icons/go";
import { PiUserCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "24 Mar, 2024",
    blogPostIcon: <PiUserCircleFill />,
    blogPost: "Admin",
    blogUrl: "/blog_details",
    blogTitle: "Most Popular Chrome Extensionfor Business Promot",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "24 Mar, 2024",
    blogPostIcon: <PiUserCircleFill />,
    blogPost: "Admin",
    blogUrl: "/blog_details",
    blogTitle: "How to Secure your facebook Business Account",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "24 Mar, 2024",
    blogPostIcon: <PiUserCircleFill />,
    blogPost: "Admin",
    blogUrl: "/blog_details",
    blogTitle: "Better Context Menus With Safe Triangles",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
];

const Blog = () => {
  return (
    <section className='py-28 bg-BodyBg-0'>
      <div className='Container'>
        <div className='grid grid-cols-2 items-center'>
          <div>
            <h5 className='flex items-center gap-2 font-Rajdhani text-xl font-semibold text-PrimaryColor-0 uppercase'>
              <img
                src={titleShape}
                draggable={false}
                alt='Shape'
              />{' '}
              Latest Blog
            </h5>
            <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[14px] mb-4'>
              Ready Our Latest Insights<br /> from Our Blog Posts
            </h1>
          </div>
          <div className='flex items-center justify-end'>
            <Link
              to={'/blog_grid'}
              className='inline-block'
            >
              <button className='primary-btn'>
                {`All Projects`}
                <span className='icon-style'>
                  <svg
                    className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-[10px] w-auto transition-all duration-500'
                    xmlns='http://www.w3.org/2000/svg'
                    stroke='CurrentColor'
                    width='14.2'
                    height='14.2'
                    viewBox='0 0 14.2 14.2'
                  >
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                    <g>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                      <path d='M13.2 9V1h-8M13.4.8.7 13.5'></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='mt-[46px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {blogData.map(
              ({
                id,
                blogThumb,
                blogDateIcon,
                blogDate,
                blogPostIcon,
                blogPost,
                blogUrl,
                blogTitle,
                blogBtn,
                blogBtnIcon,
              }) => {
                return (
                  <div key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      blogDateIcon={blogDateIcon}
                      blogDate={blogDate}
                      blogPostIcon={blogPostIcon}
                      blogPost={blogPost}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                      blogBtn={blogBtn}
                      blogBtnIcon={blogBtnIcon}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
