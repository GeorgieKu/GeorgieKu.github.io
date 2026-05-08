document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const header = document.querySelector("header");
    const menuLinks = document.querySelectorAll(".menu__link");

    function setMenuState(isOpen) {
        if (!header) return;
        header.classList.toggle("open", isOpen);
        document.body.classList.toggle("overflow", isOpen);
    }

    if (burger) {
        burger.addEventListener("click", function () {
            setMenuState(!header.classList.contains("open"));
        });
    }
    menuLinks.forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });

    const requestFileInputs = document.querySelectorAll(".request__file-input");
    requestFileInputs.forEach((input) => {
        const label = input.closest("label");
        const fileWrap = label ? label.querySelector(".request__file-wrap") : null;
        const fileText = label ? label.querySelector(".request__file") : null;
        if (!fileWrap || !fileText) return;

        fileWrap.addEventListener("click", () => input.click());
        input.addEventListener("change", function () {
            const fileName = this.files && this.files[0] ? this.files[0].name : "Файл не загружен";
            fileText.textContent = fileName;
        });
    });

    const requestModal = document.getElementById("requestModal");
    const requestModalClose = document.getElementById("requestModalClose");
    if (requestModal && requestModalClose) {
        requestModalClose.addEventListener("click", () => requestModal.close());
        requestModal.addEventListener("click", (event) => {
            if (event.target === requestModal) {
                requestModal.close();
            }
        });
        requestModal.addEventListener("close", () => {
            document.body.classList.remove("overflow");
        });
    }
});

function openModal() {
    const requestModal = document.getElementById("requestModal");
    const header = document.querySelector("header");
    if (header) {
        header.classList.remove("open");
    }
    document.body.classList.remove("overflow");
    if (requestModal && typeof requestModal.showModal === "function" && !requestModal.open) {
        requestModal.showModal();
    }
}

window.openModal = openModal;