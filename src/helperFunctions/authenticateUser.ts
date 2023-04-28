import { baseUrl } from "../features/baseUrl";

export const authenticateUser: () => boolean | void = () => {
  fetch(baseUrl+"/authenticate", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token222"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "authorizated") {
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
