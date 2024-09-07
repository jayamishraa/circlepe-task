// import Page1 from "@/Components/Page1";
// import Page2 from "@/Components/Page2";
// import Page3 from "@/Components/Page3";
// import Page4 from "@/Components/Page4";
// import Page5 from "@/Components/Page5";
// import Page6 from "@/Components/Page6";

// export default function Background() {
//   return (
//     <div className="overflow-hidden">
//       <Page1 />    
//       <Page2 />    
//       <Page3 />    
//       <Page4 />    
//       <Page5 />    
//       <Page6 />    
//       <div className="fixed top-1/2 right-40 transform -translate-y-1/2 flex flex-col items-center z-30">
//         <div className="w-[2px] h-40 bg-[#424242]"></div>
//         <div className="w-[7px] h-[7px] bg-[#6BAFFF] rounded-full mt-2"></div>
//       </div>
//     </div>
//   );
// }



"use client"; // Ensure this runs on the client side

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Page1 from "@/Components/Page1";
import Page2 from "@/Components/Page2";
import Page3 from "@/Components/Page3";
import Page4 from "@/Components/Page4";
import Page5 from "@/Components/Page5";
import Page6 from "@/Components/Page6";

const pages = [Page1, Page2, Page3, Page4, Page5, Page6];

export default function Background() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const controls = useAnimation();
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      // Calculate the percentage of scroll
      const scrollPercentage = (scrollTop / (docHeight - winHeight));

      // Calculate the page index based on the scroll percentage
      const newPageIndex = Math.min(
        pages.length - 1,
        Math.floor(scrollPercentage * pages.length)
      );

      // Update page only if it changes
      if (newPageIndex !== currentPageIndex) {
        setCurrentPageIndex(newPageIndex);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPageIndex]);

  return (
    <div className="h-screen bottom-0 w-screen no-scrollbar">
      {/* Render the current page with smooth transition and opacity change */}
      {pages.map((PageComponent, index) => {
        const isCurrentPage = currentPageIndex === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: isCurrentPage ? 1 : 0 }} // Fade in current page, fade out others
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`absolute inset-0 flex items-center justify-center z-20`}
          >
            <PageComponent />
          </motion.div>
        );
      })}
      
      <div className="fixed top-[-50px] left-1/2 rotate-90 md:rotate-0 md:top-1/2 md:right-[-500px] md:transform md:-translate-y-1/2 flex flex-col items-center z-30">
        <div className="w-[2px] h-40 bg-[#424242]"></div>
        <div className="w-[7px] h-[7px] bg-[#6BAFFF] rounded-full mt-2"></div>
      </div>

    </div>
  );
}



