import axios from "axios";

const instance = axios.create({
  //i vjetri baseURL: "https://react-hamburger-app-73aa2.firebaseio.com/"
  baseURL: "https://hamburgerapp-4c74c.firebaseio.com/"
});

export default instance;
