const tableBody = document.getElementById('table__body');

function addCell (text) {
  const cell = document.createElement('td');
  cell.innerText = `${text}`;
  return cell;
}

function addImage (picture) {
  const cell = document.createElement('td');
  const image = document.createElement('img');
  const spanImage = document.createElement('span');
  const spanLargeImage = document.createElement('span');
  const largeImage = document.createElement('img');
  image.src = picture.thumbnail;
  image.className = 'table__img';
  spanImage.className = 'tooltip';
  largeImage.src = picture.large;
  spanLargeImage.appendChild(largeImage);
  spanImage.appendChild(image);
  cell.appendChild(spanImage);
  cell.appendChild(spanLargeImage);
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
  console.log(data);
  data.forEach(item => {
    const row = document.createElement('tr');
    const image = addImage(item.picture);
    const name = addCell(`${item.name.first} ${item.name.last}`);
    const location = addCell(`${item.location.city} (${item.location.state})`);
    const email = addCell(item.email);
    const phone = addCell(item.phone);
    const registered = addCell(`${changeDate(item.registered.date)}`);
    row.appendChild(image);
    row.appendChild(name);
    row.appendChild(location);
    row.appendChild(email);
    row.appendChild(phone);
    row.appendChild(registered);
    tableBody.appendChild(row);
  });
}