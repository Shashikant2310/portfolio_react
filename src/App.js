import React from "react";
import "./index.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";

export default function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div
      className={
        isDarkMode
          ? "font-['Poppins',sans-serif] dark min-h-screen min-w-full overflow-x-hidden"
          : "font-['Poppins',sans-serif]  min-h-screen min-w-full overflow-x-hidden"
      }
    >
      <div className="dark:bg-black dark:text-gray-100">
        <Intro isDarkMode={isDarkMode} onDarkMode={toggleDarkMode} />
        <About />
        <ProductList />
        <Contact />
      </div>
    </div>
  );
}
