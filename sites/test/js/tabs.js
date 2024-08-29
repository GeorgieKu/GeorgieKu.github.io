document.querySelectorAll('.tabs').forEach(tabsContainer => {
    const buttons = tabsContainer.querySelectorAll('.tab-btn');
    const panels = tabsContainer.querySelectorAll('.tab-panel');
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');
            
        
            buttons.forEach(btn => btn.classList.remove('active'));
            panels.forEach(panel => panel.classList.remove('active'));

            
            this.classList.add('active');
            tabsContainer.querySelector(`#${targetTab}`).classList.add('active');
        });
    });
});