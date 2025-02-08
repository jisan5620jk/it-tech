/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: ['Rajdhani', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        PrimaryColor: ['#0c5adb'],
        PrimaryColor2: ['#1a90ff'],
        PrimaryColor3: ['#3326fc'],
        SecondaryColor: ['#021533'],
        HeadingColor: ['#041424'],
        TextColor: ['#b6b9c0'],
        TextColor2: ['#686868'],
        ReviewText: ['#ffb108'],
        BodyBg: ['#f1f3fe'],
        BodyBgDark: ['#152534'],
        BodyBg2: ['#daeae7'],
        BodyBg3: ['#152433'],
        BodyBg4: ['#233342'],
        BorderColor: ['#ffffff21'],
        BorderColor2: ['#dce1e5'],
        BorderColor3: ['#83A8FF'],
        BorderColor4: ['#ffffff1a'],
        BorderColor5: ['#041424'],
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1600px ',
        '4xl': '1700px',
        // 1400-1600, 1300-1399,1200-1299,992-1199(1170),768-991,600-767,480-599,320-479
      },
      keyframes: {
        movebtn: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        dance7: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(320px)' },
        },
        dance3: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-35px)' },
        },
        shrink: {
          '0%': { transform: 'translateY(20px) translateX(-50%)' },
          '50%': { transform: 'translateY(-20px) translateX(-50%)' },
          '100%': { transform: 'translateY(0px) translateX(-50%)' },
        },
        Dance: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(35px)' },
        },
        dance4: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(570px)' },
        },
        dance5: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(300px)' },
        },
        rotateme: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          '0%': {
            transform: 'translateY(10%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        dance2: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '50%': {
            transform: 'translate3d(25px, -25px, 0)',
          },
          '100%': { transform: 'translate3d(0, -25px, 25px)' },
        },
        headerSlideDown: {
          '0%': { margin: '-150px 0 0' },
          '100%': { margin: '0' },
        },
        zoomInOut: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1.2)' },
        },
        swing: {
          '0%': { transform: 'rotate(-25deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateY(-50px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotational: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        wobble_vertical: {
          '16.65%': { transform: 'translateY(8px)' },
          '33.3%': { transform: 'translateY(-6px)' },
          '49.95%': { transform: 'translateY(4px)' },
          '66.6%': { transform: 'translateY(-2px)' },
          '83.25%': { transform: 'translateY(1px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        movebtn: 'movebtn 3s linear infinite',
        wiggle: 'wiggle 5s ease-in-out infinite',
        rotational: 'rotational 10s linear infinite',
        rotate: 'rotate 20s linear infinite',
        zoomInOut: 'zoomInOut 2s alternate infinite',
        dance2: 'dance2 3s alternate infinite',
        dance3: 'dance3 2s alternate infinite',
        dance4: 'dance4 10s alternate infinite',
        dance5: 'dance5 10s alternate infinite',
        dance7: 'dance7 4s alternate infinite',
        swing: 'swing 1s ease-in-out 1s forwards infinite alternate',
        fadeInUp: 'fadeInUp 0.5s linear',
        headerSlideDown:
          '500ms ease-in-out 0s normal none 1 running headerSlideDown',
        wobble_vertical: 'wobble_vertical 1s forwards ease-in-out',
      },
      boxShadow: {
        cases: '0px 10px 15px rgba(187, 187, 187, 0.2)',
        shade: '0px 0px 20px rgba(187, 187, 187, 0.2)',
        shadow: '0px 30px 50px rgba(152,178,240,0.5)',
      },
      lineHeight: {},
    },
  },
  plugins: [],
};
