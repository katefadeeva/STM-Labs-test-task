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

function changeDate(timestamp) {
  const date = new Date(timestamp);
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }
  return date.toLocaleDateString('ru', options);
}

export default function createTable(data) {
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