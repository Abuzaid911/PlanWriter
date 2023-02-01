import { type NextPage } from "next";
import Qform from "../components/Qform";
import Response from "../components/Response";
import Nav from "../components/Nav";
import logo from "../../public/logo.png"
import Image from "next/image";


const Home: NextPage = () => {

  return (
    <>
      <Nav />
      <div className="bg-[#e7f3f0] h-screen flex flex-col gap-10">
        <div className="flex w-full justify-between mt-40">

          <div className="hero-content w-1/2 flex-col">
            <Qform />
          </div>
          <div className="divider lg:divider-horizontal text-[#0f4551]"><Image className="" src={logo} alt="logo"></Image></div>
          <div className="hero-content w-1/2 flex-col">
            <Response />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
