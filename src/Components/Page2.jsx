"use client";
import { motion } from "framer-motion";

const Page2 = () => {
    return (
      <div className="sticky h-screen w-screen flex flex-col md:flex-row justify-center items-center bg-[#1a1a1a] ">
        
        <div className="absolute top-[-200px] left-[-450px] w-[1103px] h-[1071.08px] rounded-full bg-[radial-gradient(35.19%_35.19%_at_50%_50%,_rgba(59,_149,_255,_0.17)_0%,_rgba(28,_106,_197,_0)_100%)]"></div>
  
        <div className="absolute p-10 md:p-0 top-10 md:left-[360px] z-10 md:top-[200px] text-white h-[80px] w-full md:w-[283px] md:h-[118px]">
          <h1 className="text-[30px] md:text-[40px] md:font-medium text-left font-league-spartan leading-none">
            <span className="text-[#AAAAAA]">Step</span> 1
          </h1>
          <div className="m-2 border-t border-[#5AA5FD] w-[84.02px] md:mt-[36px] md:mb-[36px] "></div>

          <span className="text-[13px] font-medium leading-none text-left font-league-spartan mt-4">
            <ul className="list-disc list-inside space-y-3 larger-bullets">
              <motion.li
                initial={{ color: "#FAFAFA"}} 
                animate={{ color: "#FCF1B6"}} 
                transition={{ duration: 0.3}}
              >Tenant selects the property
              </motion.li>
              <li>Tenant selects flexible rent tenure & corresponding amount</li>
            </ul>
          </span>
        </div>
  
        <div className="absolute bottom-0 md:bottom-[-17px] md:top-15 md:right-[330px] md:p-4 md:z-10">
          <img src="/Images/step1ss1.png" alt="Screenshot" className="w-[250px] h-auto bottom-0 md:w-auto md:h-[450px]" />
        </div>
        <div className="opacity-0 md:opacity-100 absolute top-[150px] left-[480px] p-4 z-20">
          <img src="/Images/arrow.svg" alt="Screenshot" className="w-[252px] h-[249.82px]" />
        </div>
  
        <div className="opacity-0 md:opacity-100 absolute right-0 top-0 h-full w-[413px] bg-[#0d0d0d]"></div>
      </div>
    );
  }

  export default Page2