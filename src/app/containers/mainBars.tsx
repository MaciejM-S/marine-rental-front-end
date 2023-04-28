import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Common/Footer";
import NavBar from "../components/Common/Navbar";
import { useAppDispatch } from "../hooks";
import { changeMainNav } from "../../features/navigation/navigationSlice";

function MainBars() {
  const dispatch = useAppDispatch();
  const [changeFooter, setChangeFooter] = React.useState(false);
  useEffect(() => {
    if (window.location.pathname === "/home") {
      dispatch(changeMainNav(0));
    }
    if (window.location.pathname === "/vessels") {
      dispatch(changeMainNav(1));
    }
    if (window.location.pathname === "/your-account") {
      dispatch(changeMainNav(2));
    }
  }, []);
  useEffect(() => {
    const handleScroll = (event: any) => {
      if (
        document.documentElement.offsetHeight -
          document.documentElement.clientHeight -
          151 <
        window.scrollY
      ) {
        setChangeFooter(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer changeFooter={changeFooter} />
    </>
  );
}
export default MainBars;
