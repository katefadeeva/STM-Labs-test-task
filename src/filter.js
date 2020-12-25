import createTable from "./table";

function debounce(func, ms) {
  let isCooldown = false;
  return function() {
    if (isCooldown) return;
    func.apply(this, arguments);
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

export default function createFilter(data) {
    const copyData = JSON.parse(JSON.stringify(data));
    document.getElementById('search__input').addEventListener('input', debounce((event) => {
      deleteTable();
      if (!filterTable(copyData, event.target.value).length) {
        return alert('Unfortunately, nothing was found. Try again.');
      } else {
        createTable(filterTable(copyData, event.target.value));
      }

    },100));
    // document.querySelector('.reset__btn').addEventListener('click', () => {
    //   deleteTable();
    //   getTable(data);
    // })
}