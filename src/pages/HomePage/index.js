import HeroCard from "../../components/HeroCard";
import DriverOptions from "../../components/DriverOptions";

function HomePage() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center bg-black">
        <img
          className=" object-cover w-full h-full opacity-50"
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <div className="absolute w-full flex flex-col justify-center max-w-full lg:flex-row-reverse">
          {/* Left Section */}
          <div className="lg:w-1/2 lg:pr-10 justify-center items-center flex">
            <HeroCard />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex  flex-col lg:pl-10  justify-center ">
            <h1 className=" text-5xl lg:text-left text-center lg:text-7xl font-bold text-white pb-4">
              Anywhere you <br />
              want to go
            </h1>
            <h3 className="text-base lg:text-4xl font-medium text-white pb-7 text-center lg:text-left">
              Only Seconds Away
            </h3>
            <div className="flex justify-center lg:justify-start">
              <img
                src="./Badge.png"
                alt=""
                className="w-20 h-6 lg:w-48 lg:h-14"
              />
              <img
                src="./Badge2.png"
                alt=""
                className="w-20 h-6 lg:w-48 lg:h-14"
              />
            </div>
          </div>
        </div>
      </div>
      {/* FOR DRIVERS SECTION */}
      <div className="h-screen px-6 flex flex-col justify-center lg:flex-row-reverse items-center pt-14">
        <div className=" lg:flex-1 ">
          <div className="pb-6">
            <h1 className="font-black text-5xl lg:text-8xl"> For Drivers</h1>
            <h3 className="text-xl">
              Set up your Seconds profile and hit the road
            </h3>
          </div>
          <div>
            <DriverOptions />
          </div>
          <div>

          </div>
        </div>
        <div className="relative h-96 lg:h-[550px]  lg:flex-1">
          <img
            className=" w-full h-full object-cover "
            src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
