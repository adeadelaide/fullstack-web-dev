import axios from "axios";
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api";

const getall = () => {
  return axios.get(`${baseURL}/all`);
};

const get = (name) => {
  return axios.get(`${baseURL}/name/${name}`);
};

const getWeather = (lat, lng) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,rain&daily=temperature_2m_max,temperature_2m_min`;
  return axios.get(url).then((res) => res.data);
};
export default {
  getall,
  get,
  getWeather,
};
