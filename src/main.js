import createFilter from "./filter";
import createTable from "./table";

async function getPeople () {
  const response = await fetch('https://randomuser.me/api/?results=15');
  if (response.ok) {
    const people = await response.json();
    return people.results;
  } else {
   throw new Error(response.status);
  }
}

async function start () {
  const data = await getPeople();
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.wrapper').style.display = 'block';
  createFilter(data);
  createTable(data);
}

start();