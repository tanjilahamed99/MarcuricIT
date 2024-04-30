import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="">
        <div className="flex  items-center justify-between">
          <Link>
            Shreyu theme by <span className="font-medium">Coderthemes</span>
          </Link>
          <div className="flex gap-3">
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
