import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import TopButton from "../app/components/HomePage/MainFeed/button";
import MainDescription from "../app/components/HomePage/MainFeed/searchBoats/MainDescription";
import AboutUs from "../app/components/HomePage/AboutUs";
import TopVessels from "../app/components/HomePage/TopVessels";
import MainContainer from "../app/components/HomePage/TopVessels/mainContainer";
import { Vessel as VesselType } from "../typings/vessel";
import SortComponent from "./../app/components/Vessels/availableVessels/sortComponent";
import store from "../app/store";
import { Provider } from "react-redux";
import SearchVessels from "../app/components/Vessels/searchVessels";
import ActionNav from "../app/components/YourAccount/actionNav";
import { configureStore } from "@reduxjs/toolkit";
import Contact from "../app/components/YourAccount/contact";


const dummyVessels: VesselType[] = [
  {
    _id: "vessel1",
    id: 1,
    user: "user1",
    name: "Vessel 1",
    description: "This is Vessel 1.",
    year: 2020,
    type: "Type A",
    size: "Small",
    location: "Location A",
    pricePerDay: 50,
    pricePerWeek: 300,
    pictures: ["picture1_1.jpg", "picture1_2.jpg"],
    pickupDay: "2023-06-01",
    returnDay: "2023-06-08",
  },
  {
    _id: "vessel2",
    id: 2,
    user: "user2",
    name: "Vessel 2",
    description: "This is Vessel 2.",
    year: 2018,
    type: "Type B",
    size: "Medium",
    location: "Location B",
    pricePerDay: 80,
    pricePerWeek: 500,
    pictures: ["picture2_1.jpg", "picture2_2.jpg"],
    pickupDay: "2023-06-02",
    returnDay: "2023-06-09",
  },
];

describe("home", () => {
  test("top deals button handled", async () => {
    user.setup();
    const btnHandler = jest.fn();
    render(<TopButton handleScroll={btnHandler} />);
    const button = screen.getByRole("button", { name: "Top Deals" });
    await user.click(button);
    expect(btnHandler).toBeCalledTimes(1);
  });
  test("main description rendered", () => {
    render(<MainDescription />);
    const description = screen.getByText(/A great selection/i);
    expect(description).toBeInTheDocument();
  });
  test("date picker rendered", () => {
    render(<AboutUs />);
    const image = screen.getByAltText("jacht");
    expect(image).toBeInTheDocument();
  });
  test("top vessels rendered", async () => {
    const { getByText } = render(<TopVessels />);
    await waitFor(() => {
      const titleElement = getByText("Explore Our Top Deals:");
      expect(titleElement).toBeInTheDocument();
    });
  });
  test("top vessels are rendered - type is correct", async () => {
    const topVessels = render(
      <Router>
        <Routes>
          <Route element={<MainContainer vessels={dummyVessels} />} />
        </Routes>
      </Router>
    );
    expect(topVessels).toBeDefined();
  });
});


describe("vessels", () => {
  test("sort component handled", () => {
    user.setup();
    const handleSort = jest.fn();
    render(
      <Provider store={store}>
        <SortComponent setLoading={handleSort} />
      </Provider>
    );
    const input = screen.getByRole("combobox", {
      name: /sort/i,
    });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("The date: oldest first");
  });

  test("search vessels rendered - button action handled", () => {
    render(
      <Provider store={store}>
        <SearchVessels />
      </Provider>
    );
    expect(screen.getByText("Find your vessel:")).toBeInTheDocument();
    const button = screen.getByText("Show available vessels");
    fireEvent.click(button);
    expect(screen.getByText("Show available vessels")).toBeDisabled();
  });
});


describe("your account", () => {
  test("changes the selected tab when a tab is clicked", () => {
    render(
      <Provider store={store}>
        <ActionNav />
      </Provider>
    );
    const tab = screen.getByRole("tab", { name: "Favorite" });
    fireEvent.click(tab);
    const state = store.getState();
    expect(state.navigation.userAccount).toBe(0);
  });
  test("displays the correct panel for the selected tab", () => {
    render(
      <Provider store={store}>
        <ActionNav />
      </Provider>
    );
    const yourVesselsTab = screen.getByRole("tab", { name: "Your vessels" });
    fireEvent.click(yourVesselsTab);
    const panel = screen.getByRole("tabpanel", { name: "Your vessels" });
    expect(panel).toBeInTheDocument();
  });

});




