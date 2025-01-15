import { error } from '@pnotify/core';

const listEl = document.querySelector(".list");

export const makeMarkup = (data) => {
  const lengthOfAllFindingCountry = data.length;

  if (lengthOfAllFindingCountry > 10) {
		error({
			title: '',
			text: 'Too many matches found. Please enter a more specific query!'
		});
	};

  if (lengthOfAllFindingCountry === 1) {
		const list = document.querySelector('.list')
	
    const name = document.createElement("h2");
    const div = document.createElement("div");
    const secondDiv = document.createElement("div");
    const countryCapital = document.createElement("p");
    const populations = document.createElement("p");
    const languagesDiv = document.createElement("div");
    const languagesTitle = document.createElement("p");
    const languagesList = document.createElement("ul");
    const flag = document.createElement("img");

    name.classList.add("name");
    div.classList.add("div");
    secondDiv.classList.add("secondDiv");
    countryCapital.classList.add("capital");
    populations.classList.add("populations");
    languagesDiv.classList.add("languagesDiv");
    languagesTitle.classList.add("languagesTitle");
    languagesList.classList.add("languagesList");
    flag.classList.add("flag");

    name.textContent = data[0].name.common;
    countryCapital.textContent = `Capital: ${data[0].capital}`;
    populations.textContent = `Populations: ${data[0].population}`;
		languagesTitle.textContent = 'Languages:'
    for (let key in data[0].languages) {
      const item = document.createElement("li");
      const name = document.createElement("p");

      name.textContent = data[0].languages[key];

      item.append(name);
      languagesList.append(item);
    }
    flag.src = data[0].flags.png;

		list.append(name, div)
		div.append(secondDiv, flag)
		secondDiv.append(countryCapital, populations, languagesDiv)
		languagesDiv.append(languagesTitle, languagesList)

    // name.common, capital, population, languages, flags.png
    console.log(data);
  }

  if (lengthOfAllFindingCountry < 10 && lengthOfAllFindingCountry > 2) {
    data.map((item) => {
      const li = document.createElement("li");
      const name = document.createElement("p");

      name.textContent = item.name.common;

      listEl.append(li);
      li.append(name);
      console.log(item.name.common);
    });
  }
};
