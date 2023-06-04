import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../components/Common/Footer";
import NavBar from "../components/Common/Navbar";
import { useAppDispatch } from "../hooks";
import { changeMainNav } from "../../features/navigation/navigationSlice";
import { baseUrl } from "../../features/baseUrl";
import Loading from "./loading/loading";

function MainBars() {
  const dispatch = useAppDispatch();
  const [changeFooter, setChangeFooter] = React.useState(false);
  const [isServerRunning, setIsServerRunning] = React.useState(false);
  const [loadingCounter, setLoadingCounter] = React.useState(0);

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
    fetch(baseUrl + "/isServerRunning")
      .then((res) => res.json())
      .then((r) => {
        if (r.message === "running") {
          setIsServerRunning(true);
        }
      });
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

  useEffect(() => {
    const counterInterval = setInterval(
      () => {
       if(loadingCounter<100){setLoadingCounter(loadingCounter + 1)}
        clearInterval(counterInterval);
      },
      isServerRunning ? 70 : 1000
    );
  }, [loadingCounter]);
  
  console.error = console.warn = () => {};

  return (
    <>
      {loadingCounter < 100 ? null : <NavBar />}
      {loadingCounter < 100 ? <Loading counter={loadingCounter} /> : <Outlet />}
      <Footer changeFooter={changeFooter} />
    </>
  );
}
export default MainBars;
