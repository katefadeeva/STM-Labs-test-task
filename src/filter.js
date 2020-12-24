import getTable from "./table";

function debounce(foo, ms) {
  let isCooldown = false;
  return function() {
    if (isCooldown) return;
    foo.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}

function filterTable(data, str) {
  return data.filter((item) => {
    str = str.toLowerCase();
    const firstName = item.name.first.toLowerCase();
    const lastName = item.name.last.toLowerCase();
    if(firstName.includes(str) || lastName.includes(str)) {
      return true;
    }
  })
}

function deleteTable() {
  const table = document.getElementById('table__body');
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
}

export default function getFilter(data) {
  console.log(data);
    const copyData = JSON.parse(JSON.stringify(data));
    document.getElementById('search__input').addEventListener('input', debounce((event) => {
      deleteTable();
      getTable(filterTable(copyData, event.target.value));
    },100));
    // document.querySelector('.reset__btn').addEventListener('click', () => {
    //   deleteTable();
    //   getTable(data);
    // })
}