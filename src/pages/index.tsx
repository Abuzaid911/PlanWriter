import { type NextPage } from "next";
import Qform from "../components/Qform";
import Response from "../components/Response";


const Home: NextPage = () => {

  return (
    <>
      <div className="bg-[#e7f3f0] h-screen flex flex-col gap-10">
        <div className="navbar">
          <a className="btn btn-ghost normal-case text-xl text-[#0f4551] font-mono">Treatment Plan Writer AI</a>
        </div>
        <div className="flex w-full justify-between mt-40">
          <div className="hero-content w-1/2 flex-col">
            <Qform />
          </div>
          <div className="divider lg:divider-horizontal text-[#0f4551]">|</div>
          <div className="hero-content w-1/2 flex-col">
            <Response />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
