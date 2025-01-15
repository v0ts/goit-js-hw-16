import { makeMarkup } from "./markup";

export const getCountry = (keyword) => { 
	const API = `https://restcountries.com/v3.1/name/${keyword}`; 
	return fetch(API).then(data => data.json()).then(data => makeMarkup(data)).catch((error) => console.error(error))
}