import { Fragment, useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Fragment>
      <div className="p-10 flex flex-col gap-6 items-center justify-center ">
        {/* <div className="w-full border border-gray-200"></div> */}
        <div className="flex gap-2">
          <p className="text-lg">{`© ${year}. `}</p>
          <p className="mypersonnality">MyPersonality.</p>
        </div>
        <ul className="flex gap-4 items-center justify-center">
          <li className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 text-xl cursor-pointer hover:text-white hover:border-principal hover:bg-principal hover:shadow">
            <a
              href="https://x.com/gery_guedegbe0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="mdi mdi-twitter"></i>
            </a>
          </li>
          <li className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 text-xl cursor-pointer hover:text-white hover:border-principal hover:bg-principal hover:shadow">
            <a
              href="https://github.com/gery-guedegbe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="mdi mdi-github"></i>
            </a>
          </li>
          <li className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 text-xl cursor-pointer hover:text-white hover:border-principal hover:bg-principal hover:shadow">
            <a
              href="https://www.linkedin.com/in/g%C3%A9ry-guedegbe-0ab692261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="mdi mdi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Footer;
