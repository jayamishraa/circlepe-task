export default function Page2() {
    return (
      <div className="relative h-screen w-screen flex justify-center items-center bg-[#1a1a1a] overflow-hidden">
        
        {/* Circle Radial Gradient on the Top Left */}
        <div className="absolute top-[-300px] left-[-450px] w-[1103px] h-[1071.08px] rounded-full bg-[radial-gradient(35.19%_35.19%_at_50%_50%,_rgba(100,_149,_255,_0.1)_0%,_rgba(28,_106,_197,_0)_100%)]"></div>
  
        {/* Text Content */}
        <div className="absolute left-[250px] z-10 top-[200px] text-white w-[283px] h-[118px]">
          <h1 className="text-[50px] font-medium text-left font-league-spartan leading-none">
            <span className="text-[#AAAAAA]">Step</span> 1
          </h1>
          {/* Line Separator */}
          <div className="my-4 border-t border-[#5AA5FD] w-[84.02px] mt-[33px] mb-[33px] "></div>

          <p className="text-[15px] font-medium leading-none text-left font-league-spartan mt-4">
            <ul className="list-disc list-inside space-y-3">
              <li>Tenant selects the property</li>
              <li>Tenant selects flexible rent tenure & corresponding amount</li>
            </ul>
          </p>
        </div>
  
        {/* Image */}
        <div className="absolute top-[90px] left-[680px] p-4 z-10">
          <img src="/Images/step1ss1.png" alt="Screenshot" className="w-auto h-[500px]" />
        </div>
        <div className="absolute top-[135px] left-[530px] p-4 z-20">
          <img src="/Images/arrow.svg" alt="Screenshot" className="w-[252px] h-[249.82px]" />
        </div>
  
        {/* Rectangle on the Right Side */}
        <div className="absolute right-0 top-0 h-full w-[413px] bg-[#0d0d0d]"></div>
      </div>
    );
  }
  