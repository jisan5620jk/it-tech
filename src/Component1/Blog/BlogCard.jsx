/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogCard = ({
  blogThumb,
  blogDateIcon,
  blogDate,
  blogPostIcon,
  blogPost,
  blogUrl,
  blogTitle,
}) => {
  return (
    <div className='group transition-all duration-500 rounded-md'>
      <div className='relative rounded-[10px] overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0'>
        <img
          src={blogThumb}
          className='transition-all duration-500 scale-100 group-hover:scale-110 w-full'
        />
      </div>
      <div className='w-[calc(100%-40px)] -mt-[50px] mx-auto  relative z-20 flex justify-center bg-white rounded-lg transition-all duration-500 sm:px-3 lg:px-3 2xl:px-3 pt-7'>
        <div className='mx-auto'>
          <p className='font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]'>
            <img
              src={blogPostIcon}
              draggable={false}
              alt='UserIcon'
            />
            {blogPost}
          </p>
          <Link to={blogUrl}>
            <button className='font-Rajdhani text-left font-semibold text-lg sm:text-[22px] md:text-xl lg:text-base xl:text-xl 2xl:text-[23px] text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0 mt-2 mb-5'>
              {blogTitle}
            </button>
          </Link>
          <div className='flex items-center justify-between'>
            <p className='font-Nunito text-TextColor2-0 text-sm sm:text-base flex gap-2 items-center leading-[15px]'>
              <span className='text-PrimaryColor-0'>{blogDateIcon}</span>
              {blogDate}
            </p>
            <Link
              to={blogUrl}
              className='inline-block'
            >
              <button className='blog-button flex items-center justify-center size-[38px] rounded-full bg-BodyBg-0 text-PrimaryColor-0 relative z-10 before:absolute before:-z-10 before:top-0 before:left-0 before:bg-gradient-to-t before:to-PrimaryColor2-0 before:from-PrimaryColor3-0 before:w-full before:h-full before:scale-0 before:transition-all before:duration-500 group-hover:before:scale-100 before:rounded-full group-hover:text-white transition-all duration-500'>
                <span className='icon-style relative -top-[3px]'>
                  <svg
                    className='qodef-svg--custom-arrow qodef-m-arrow inline-block h-3 w-auto transition-all duration-500 text-PrimaryColor-0 group-hover:text-white'
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
      </div>
    </div>
  );
};

export default BlogCard;
