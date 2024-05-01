import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="">
        <div className="flex flex-col md:flex-row  md:items-center justify-between pl-5 md:pl-0 gap-3 md:gap-0">
          <Link>
            Shreyu theme by <span className="font-medium">Coderthemes</span>
          </Link>
          <div className="flex flex-col md:flex-row gap-3 text-sm ">
            <Link to="#">About Us</Link>
            <Link to="#">Help</Link>
            <Link to="#">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
