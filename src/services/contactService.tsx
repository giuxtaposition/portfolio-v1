import axios from "axios";
const baseUrl = "https://yg-portfolio-server.herokuapp.com/portfolio/contact";

const sendMail = (newObject: any) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

export default sendMail;
