
document.addEventListener("DOMContentLoaded", () => {
    let headerMainLinks = document.querySelectorAll('.header__upper .header__item');
    const headerBottomSide = document.querySelector(".header__bottom");
    const bottomNavs = document.querySelectorAll(".header__bottom nav");

    headerMainLinks.forEach(function (item){
        item.addEventListener('click', function() {
            // headerBottomSide.style.opacity = '1'
            headerMainLinks.forEach(function (item){
                item.classList.remove('active');
            })
            item.classList.add('active');
        })
    })  

    headerMainLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Предотвращаем переход по ссылке
           
            // Удаляем класс active у всех ссылок
            headerMainLinks.forEach(link => link.parentElement.classList.remove("active"));

            // Скрываем все нижние nav
            bottomNavs.forEach(function (nav) {
                nav.style.display = "none",
                nav.style.opacity = "0"
            });

            // Показываем нужный nav (по индексу)
            if (bottomNavs[index]) {
                bottomNavs[index].style.display = "block";
                setTimeout(() => {
                    bottomNavs[index].style.opacity = "1"
                }, 100);
            }
        });
    });
    

    // Запускаем клик на первую ссылку при загрузке страницы
    if (headerMainLinks.length > 0 && window.innerWidth > 1024) {
        headerMainLinks[0].click();
        headerMainLinks[0].classList.add('active');
    }

    let headerMenu = document.querySelector('.header__menu');
    let header = document.querySelector('header');
    let headerHiddenMenu = document.querySelector('.header__hidden-menu');

        if (window.innerWidth < 769) {
            headerBottomSide.style.top = `${headerHiddenMenu.clientHeight + header.clientHeight}px`;
            console.log(headerHiddenMenu.clientHeight)
            console.log(header.clientHeight)
            console.log(headerBottomSide.clientHeight)
        }
        else if (window.innerWidth < 925) {
            headerBottomSide.style.top = `${headerMenu.clientHeight + header.clientHeight - headerBottomSide.clientHeight}px`;
        }

});



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})