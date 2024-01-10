//tabs

function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
  
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].style.color = "black";
      tabLinks[i].style.fontWeight = "400";
      tabLinks[i].style.fontFamily = "Inter";
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.style.fontWeight = "700";
    evt.currentTarget.style.fontFamily = "Inter-Bold";
  }
  
  document.getElementById("tab1").style.display = "block";

  //modal

  function openModal1() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal1() {
    document.getElementById("myModal").style.display = "none";
  }
  
  window.onclick = function (event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function openModal2() {
    document.getElementById("myModal2").style.display = "block";
  }
  
  function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
  }
  
  window.onclick = function (event) {
    let modal = document.getElementById("myModal2");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function openModal3() {
    document.getElementById("myModal3").style.display = "block";
  }
  
  function closeModal3() {
    document.getElementById("myModal3").style.display = "none";
  }
  
  window.onclick = function (event) {
    let modal = document.getElementById("myModal3");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  //server
// Создаем функцию для получения данных с сервера
let requestURL = 'http://109.68.213.235:81';
function getDataFromServer() {

  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwOi8vMTA5LjY4LjIxMy4yMzU6ODA4MS9tYWluIiwiaXNzIjoiaHR0cDovLzEwOS42OC4yMTMuMjM1OjgwODEvIiwidXNlcm5hbWUiOiJBZG1pbiJ9.RKhoZD4NqvKv6RY6VieLWbDXP_QMQ89rWE4YRAMnn-M");
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  // Отправляем запрос на сервер
  fetch(requestURL + "/buyer", requestOptions)
    .then(response => response.json())
    .then(data => {
      // Получаем данные с сервера и создаем таблицу
      createTable(data);
    })
    .catch(error => console.log('error', error));
}

// Создаем функцию для создания таблицы
function createTable(data) {
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');

  // Создаем заголовок таблицы
  let headerRow = document.createElement('tr');
  let headers = ['Id', 'Tag', 'Name', 'E-mail', 'Tg', '', ''];
  headers.forEach(function(header) {
    let th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  tbody.appendChild(headerRow);

  // Создаем строки таблицы с данными
  data.forEach(function(rowData) {
    let row = document.createElement('tr');

    // Создаем ячейки и вставляем значения
    let idCell = document.createElement('td');
    idCell.textContent = rowData.id;
    row.appendChild(idCell);

    let tagCell = document.createElement('td');
    tagCell.textContent = rowData.tag;
    row.appendChild(tagCell);

    let nameCell = document.createElement('td');
    nameCell.textContent = rowData.name;
    row.appendChild(nameCell);

    let emailCell = document.createElement('td');
    emailCell.textContent = rowData.email;
    row.appendChild(emailCell);

    let tgCell = document.createElement('td');
    tgCell.textContent = rowData.tg;
    row.appendChild(tgCell);

    let penCell = document.createElement('td');
    penCell.classList.add('pen');
    row.appendChild(penCell);

    let deleteCell = document.createElement('td');
    deleteCell.classList.add('delete');
    row.appendChild(deleteCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Находим элемент в DOM, куда нужно вставить таблицу
  let tableContainer = document.getElementById('table-container');
  tableContainer.appendChild(table);
}

// Вызываем функцию для получения данных с сервера и создания таблицы
getDataFromServer();

function getCreatorDataFromServer() {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwOi8vMTA5LjY4LjIxMy4yMzU6ODA4MS9tYWluIiwiaXNzIjoiaHR0cDovLzEwOS42OC4yMTMuMjM1OjgwODEvIiwidXNlcm5hbWUiOiJBZG1pbiJ9.RKhoZD4NqvKv6RY6VieLWbDXP_QMQ89rWE4YRAMnn-M");
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

// Отправляем запрос на сервер
fetch(requestURL + "/creator", requestOptions)
.then(response => response.json())
.then(data => {
  // Получаем данные с сервера и создаем таблицу
  createCreatorTable(data);
})
.catch(error => console.log('error', error));
}

// Создаем функцию для создания таблицы для /creator
function createCreatorTable(data) {
let table = document.createElement('table');
let tbody = document.createElement('tbody');
// Создаем заголовок таблицы
let headerRow = document.createElement('tr');
let headers = ['Id', 'Name', '', ''];
headers.forEach(function(header) {
let th = document.createElement('th');
th.textContent = header;
headerRow.appendChild(th);
});
tbody.appendChild(headerRow);
// Создаем строки таблицы с данными
data.forEach(function(rowData) {
let row = document.createElement('tr');
// Создаем ячейки и вставляем значения
let idCell = document.createElement('td');
idCell.textContent = rowData.id;
row.appendChild(idCell);
let nameCell = document.createElement('td');
nameCell.textContent = rowData.name;
row.appendChild(nameCell);
let penCell = document.createElement('td');
penCell.classList.add('pen');
row.appendChild(penCell);
let deleteCell = document.createElement('td');
deleteCell.classList.add('delete');
row.appendChild(deleteCell);
tbody.appendChild(row);
});
table.appendChild(tbody);
// Находим элемент в DOM, куда нужно вставить таблицу
let tableContainer = document.getElementById('table-container2');
tableContainer.appendChild(table);
}

// Вызываем функции для получения данных с сервера и создания таблиц

getCreatorDataFromServer();

function getFbAppsDataFromServer() {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwOi8vMTA5LjY4LjIxMy4yMzU6ODA4MS9tYWluIiwiaXNzIjoiaHR0cDovLzEwOS42OC4yMTMuMjM1OjgwODEvIiwidXNlcm5hbWUiOiJBZG1pbiJ9.RKhoZD4NqvKv6RY6VieLWbDXP_QMQ89rWE4YRAMnn-M");
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

// Отправляем запрос на сервер
fetch(requestURL + "/fbapps", requestOptions)
.then(response => response.json())
.then(data => {
  // Получаем данные с сервера и создаем таблицу
  createCreatorTable(data);
})
.catch(error => console.log('error', error));
}

// Создаем функцию для создания таблицы для /creator
function createCreatorTable(data) {
  let table = document.createElement('table');
  let tbody = document.createElement('tbody');
  // Создаем заголовок таблицы
  let headerRow = document.createElement('tr');
  let headers = ['Id', 'Name', 'Business Manager ID', 'Token', 'Secret', '', ''];
  headers.forEach(function(header) {
  let th = document.createElement('th');
  th.textContent = header;
  headerRow.appendChild(th);
  });
  tbody.appendChild(headerRow);
  // Создаем строки таблицы с данными
  data.forEach(function(rowData) {
  let row = document.createElement('tr');
  // Создаем ячейки и вставляем значения
  let idCell = document.createElement('td');
  idCell.textContent = rowData.id;
  row.appendChild(idCell);
  let nameCell = document.createElement('td');
  nameCell.textContent = rowData.name;
  row.appendChild(nameCell);
  let BusinessManagerIDCell = document.createElement('td');
  BusinessManagerIDCell.textContent = rowData.BusinessManagerID;
  row.appendChild(BusinessManagerIDCell);
  let tokenCell = document.createElement('td');
  tokenCell.textContent = rowData.token;
  row.appendChild(tokenCell);
  let secretCell = document.createElement('td');
  secretCell.textContent = rowData.secret;
  row.appendChild(secretCell);
  let penCell = document.createElement('td');
  penCell.classList.add('pen');
  row.appendChild(penCell);
  let deleteCell = document.createElement('td');
  deleteCell.classList.add('delete');
  row.appendChild(deleteCell);
  tbody.appendChild(row);
  });
  table.appendChild(tbody);
  // Находим элемент в DOM, куда нужно вставить таблицу
  let tableContainer = document.getElementById('table-container3');
  tableContainer.appendChild(table);
  }