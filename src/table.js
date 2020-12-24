const tableBody = document.getElementById('table__body');

function addCell (text) {
  const cell = document.createElement('td');
  cell.innerText = `${text}`;
  return cell;
}

function changeDate(ms) {
  const date = new Date(ms);
  let day = date.getDate();
  if (day < 10) day = `0${day}`;
  let month = date.getMonth() + 1;
  if (month < 10) month = `0${month}`;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export default function getTable(data) {
  data.forEach(item => {
    const row = document.createElement('tr')
    const name = addCell(`${item.name.first} ${item.name.last}`);
    const location = addCell(`${item.location.city} (${item.location.state})`);
    const email = addCell(item.email);
    const phone = addCell(item.phone);
    const registered = addCell(`${changeDate(item.registered.date)}`);
    row.appendChild(name);
    row.appendChild(location);
    row.appendChild(email);
    row.appendChild(phone);
    row.appendChild(registered);
    tableBody.appendChild(row);
  })
}