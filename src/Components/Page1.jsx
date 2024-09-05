export default function Page1() {
    return (
      <div className="relative h-screen w-screen flex justify-center items-center bg-[#1a1a1a] overflow-hidden">
        
        {/* Circle Radial Gradient on the Top Left */}
        <div className="absolute top-[-300px] left-[-450px] w-[1103px] h-[1071.08px] rounded-full bg-[radial-gradient(35.19%_35.19%_at_50%_50%,_rgba(100,_149,_255,_0.1)_0%,_rgba(28,_106,_197,_0)_100%)]"></div>
  
        {/* Text Content */}
        <div className="absolute left-[227px] z-10 top-[268px] text-white w-[442px] h-[258px]">
          <h1 className="text-5xl font-semibold">How does it Work?</h1>
          <p className="text-lg mt-4">
            We make it possible in a quick and easy few steps process, takes max 5 mins.
          </p>
        </div>
  
        {/* Image */}
        <div className="absolute top-20 right-[300px] p-4 z-10">
          <img src="/Images/screenshot1.png" alt="Screenshot" className="w-[200px] h-auto" />
        </div>
  
        {/* Rectangle on the Right Side */}
        <div className="absolute right-0 top-0 h-full w-[413px] bg-[#0d0d0d]"></div>
      </div>
    );
  }
  