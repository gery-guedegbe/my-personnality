import React, { useState, useContext, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { PersonalityContext } from "../../Context/PersonalityContext";

const Home = () => {
  const {
    personalityType,
    setPersonalityType,
    setPersonalityInfo,
    setPercentages,
  } = useContext(PersonalityContext);

  const [showResultsLink, setShowResultsLink] = useState(false);

  let Links = [
    { name: "Maison", link: "/" },
    { name: "Test", link: "/test" },
    { name: "Types de personnalité", link: "/personalitytypes" },
    { name: "A propos", link: "/about" },
  ];

  useEffect(() => {
    const storedPersonalityType = localStorage.getItem("personalityType");
    const storedPersonalityInfo = localStorage.getItem("personalityInfo");
    const storedPercentages = localStorage.getItem("percentages");

    if (storedPersonalityType && storedPersonalityInfo && storedPercentages) {
      setShowResultsLink(true);
      setPersonalityType(storedPersonalityType);
      setPersonalityInfo(JSON.parse(storedPersonalityInfo));
      setPercentages(JSON.parse(storedPercentages));
    }
  }, [setPersonalityType, setPersonalityInfo, setPercentages]);

  useEffect(() => {
    if (personalityType) {
      setShowResultsLink(true);
    }
  }, [personalityType]);

  if (showResultsLink) {
    Links.splice(3, 0, { name: "Vos résultats", link: "/result" }); // Adding "Vos résultats" before "A propos"
  }

  const location = useLocation();
  let [open, setOpen] = useState(false);

  return (
    <div className="z-50">
      <header className="fixed left-0 top-0 w-full md:flex items-center justify-between bg-white py-4 md:px-10 px-8 border-b-2 border-gray-200 ">
        <a
          href="/"
          onClick={() => window.location.reload()}
          translate="no"
          className="logo select-none"
        >
          MyPersonality
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <nav className="w-full md:block md:w-auto">
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <Link
                  to={link.link}
                  className={
                    location.pathname === link.link
                      ? "text-base text-white font-medium violetGradient p-2 rounded duration-500"
                      : "text-base text-black font-medium duration-500"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </nav>
      </header>
    </div>
  );
};

export default Home;
