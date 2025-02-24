document.addEventListener('DOMContentLoaded', () => {
    const mainTrigger = document.getElementById('itabsTrigger');
    const headerInfoIcon = document.getElementById('headerInfoIcon');
    const infoTooltip = document.getElementById('infoTooltip');
    const mainPopup = document.getElementById('itabsPopup');
    const tabButtons = document.querySelectorAll('.popup-tab');
    const tabContents = document.querySelectorAll('.popup-content');
    
    let isTooltipVisible = false;

    document.addEventListener('click', () => {
        mainPopup.style.display = 'none';
        mainPopup.setAttribute('aria-hidden', 'true');
        infoTooltip.style.display = 'none';
        isTooltipVisible = false;
    });

    mainTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = mainPopup.style.display === 'block';
        mainPopup.style.display = isVisible ? 'none' : 'block';
        mainPopup.setAttribute('aria-hidden', isVisible ? 'true' : 'false');
        infoTooltip.style.display = 'none';
        isTooltipVisible = false;
    });

    headerInfoIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        isTooltipVisible = !isTooltipVisible;
        infoTooltip.style.display = isTooltipVisible ? 'block' : 'none';
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const tabId = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            infoTooltip.style.display = 'none';
            isTooltipVisible = false;
        });
    });

    mainPopup.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.target !== headerInfoIcon && !headerInfoIcon.contains(e.target) && 
            e.target !== infoTooltip && !infoTooltip.contains(e.target)) {
            infoTooltip.style.display = 'none';
            isTooltipVisible = false;
        }
    });

    infoTooltip.addEventListener('click', (e) => e.stopPropagation());

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            mainPopup.style.display = 'none';
            mainPopup.setAttribute('aria-hidden', 'true');
            infoTooltip.style.display = 'none';
            isTooltipVisible = false;
        }
    });
});
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
