import axios from "axios";
const baseUrl = process.env.REACT_APP_BACKEND_URL + "/portfolio/contact";

const sendMail = (newObject: any) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

export default sendMail;
