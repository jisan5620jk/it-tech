import { FaRegCalendarCheck } from 'react-icons/fa6';
import blogThumb from '/images/blog_img.png';
import blogThumb2 from '/images/blog_img2.png';
import blogThumb3 from '/images/blog_img3.png';
import titleShape from '/images/sub-title-shape.png';
import BlogCard from './BlogCard';
import blogPostIcon from '/images/user1.png';
import blogPostIcon2 from '/images/user2.png';
import blogPostIcon3 from '/images/user3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '24 Mar, 2024',
    blogPostIcon: blogPostIcon,
    blogPost: 'By - Jhon D. Alexon',
    blogUrl: '/blog_details',
    blogTitle: 'Expert Advice for Growing Your Digital Presence',
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '24 Mar, 2024',
    blogPostIcon: blogPostIcon2,
    blogPost: 'By - Samira Khan',
    blogUrl: '/blog_details',
    blogTitle: 'Data-Driven Strategies and Case Studies Success',
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: '24 Mar, 2024',
    blogPostIcon: blogPostIcon3,
    blogPost: 'By - Anjelina Watson',
    blogTitle: 'The Complete SEO Blog for Digital Success',
    blogUrl: '/blog_details',
  },
];

const Blog = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    modules: [Autoplay],
    speed: 2000,
    autoplay: {
      delay: 3000, // Set delay time in milliseconds
      disableOnInteraction: false, // Keep autoplay on user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <section className='py-16 md:py-20 lg:py-28 bg-BodyBgDark3-0'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='flex items-center justify-center gap-2 font-Rajdhani text-lg sm:text-xl font-semibold text-white uppercase'>
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='brightness-0 invert-[1]'
            />{' '}
            Latest Blog{' '}
            <img
              src={titleShape}
              draggable={false}
              alt='Shape'
              className='rotate-180 brightness-0 invert-[1]'
            />
          </h5>
          <h1 className='font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[38px] md:leading-[48px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[14px] mb-4'>
            Ready Our Latest Insights from
            <br /> Our Blog Posts
          </h1>
        </div>
        <div className='mt-[46px]'>
          <Swiper {...settings}>
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
              }) => {
                return (
                  <SwiperSlide key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      blogDateIcon={blogDateIcon}
                      blogDate={blogDate}
                      blogPostIcon={blogPostIcon}
                      blogPost={blogPost}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                    />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
