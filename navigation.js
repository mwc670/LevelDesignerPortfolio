function toggleProjectsMenu(event) {
    event.stopPropagation();
    
    const dropdown = event.currentTarget.closest('.projects-dropdown');
    const menu = dropdown.querySelector('.projects-menu');
    const arrow = dropdown.querySelector('.projects-arrow');
    
    const isOpen = !menu.classList.contains('hidden');
    
    if (isOpen) {
        closeMenu(menu, arrow);
    } else {
        openMenu(menu, arrow);
    }
}

function openMenu(menu, arrow) {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    arrow.classList.add('rotate-180');
}

function closeMenu(menu, arrow) {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    arrow.classList.remove('rotate-180');
}

// Close any open menus when clicking anywhere else on the page
document.addEventListener('click', (event) => {
    const dropdowns = document.querySelectorAll('.projects-dropdown');
    
    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.projects-menu');
        const arrow = dropdown.querySelector('.projects-arrow');
        
        if (!menu.classList.contains('hidden') && !dropdown.contains(event.target)) {
            closeMenu(menu, arrow);
        }
    });
});