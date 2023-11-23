import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex px-28 pt-28 pb-12 gap-2 justify-between items-center">
      <div className="flex flex-col items-start justify-start gap-1">
        <p className="text-4xl max-w-xl font-main font-bold">
          We tell the news that makes the most impact.
        </p>
        <div className="max-w-sm">
          Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
          qui dolor cillum fugiat ad.
        </div>
      </div>
      <Link to="/about" className="px-4 rounded-lg h-14 flex justify-center items-center bg-gray-950 text-white">Learn more</Link>
    </div>
  );
};

export default Hero;
