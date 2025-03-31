// Получить все сетки
let gridsAll = Array.from(document.querySelectorAll('[id^="parksGrid"]'));

// Определить массив сеток и индекс в зависимости от ширины экрана
if(gridsAll) {
  let grids;
  let currentGridIndex;

  if (innerWidth < 769) {
    grids = gridsAll.slice(10, 22); // parksGrid11 - parksGrid22
    currentGridIndex = 0;
  } else if (innerWidth < 1024) {
    grids = gridsAll.slice(4, 10); // parksGrid5 - parksGrid10
    currentGridIndex = 0;
  } else {
    grids = gridsAll.slice(0, 4); // parksGrid1 - parksGrid4
    currentGridIndex = 0;
  }

  function hideCurrentGrid() {
    // Скрыть текущую сетку
    grids[currentGridIndex].classList.add('fade-out');
    setTimeout(() => {
      grids[currentGridIndex].classList.remove('fade-out');
      grids[currentGridIndex].style.display = 'none'; // Скрыть сетку


      let currentZIndex = parseInt(window.getComputedStyle(grids[currentGridIndex]).zIndex);
      grids[currentGridIndex].style.zIndex = currentZIndex - 15;

      // Применить display: grid к предыдущему элементу
      let previousIndex = (currentGridIndex - 1 + grids.length) % grids.length;
      setTimeout(() => {
        grids[previousIndex].style.display = 'grid'; // Показать предыдущую сетку
      }, 5000); // Время ожидания

      showNextGrid();
    }, 500); // Время анимации
  }

  function showNextGrid() {
    currentGridIndex = (currentGridIndex + 1) % grids.length;
  }

  setInterval(hideCurrentGrid, 7000); 

}

  
