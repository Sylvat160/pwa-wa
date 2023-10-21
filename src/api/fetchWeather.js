import axios from "axios";

const API_KEY = '2aa634c3f4cb443bad9154656232110';

export const fetchWeather = async (query) => {
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`;
    
     try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        // Handle errors here
        console.error("Error fetching weather data:", error);
        throw error;
    }
}