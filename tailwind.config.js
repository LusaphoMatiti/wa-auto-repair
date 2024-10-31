/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/parts/Footer.jsx",
    "./src/components/parts/Navbar.jsx",
    "./src/components/AboutUs.jsx",
    "./src/components/ContactUs.jsx",
    "./src/components/Homepage.jsx",
    "./src/components/Services.jsx",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/components/Land-Page/Hero.jsx",
    "./src/components/parts/ContactInfo.jsx",
    "./src/components/Land-Page/Whychoose.jsx",
    "./src/components/Land-Page/Testimonials.jsx",
    "./src/components/Land-Page/CTA.jsx",
    "./src/components/Land-Page/Services.jsx",
    "./src/components/Land-Page/Footer.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      keyframes: {
        easeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        easeIn: "easeIn 3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
