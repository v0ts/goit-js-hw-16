import { _ } from "lodash";
import { getCountry } from "./getCountryApi";
const inputEl = document.querySelector('.input')
const list = document.querySelector('.list')

export const makeQuery = () => { 
	let keyword; 
	inputEl.addEventListener('input', _.debounce((e) => { 
		e.preventDefault(); 
		list.innerHTML = ""
		keyword = e.target.value; 
		getCountry(keyword)
	}, 500))
}

makeQuery()