import getTable from "./table";
import getFilter from "./filter";

async function getPeople () {
  const responce = await fetch('https://randomuser.me/api/?results=15');
  const people = await responce.json();
  return people.results;
}

async function start () {
  const data = await getPeople();
  document.querySelector('.loader').style.display = 'none';
  document.querySelector('.wrapper').style.display = 'block';
  getFilter(data);
  getTable(data);
}

start();