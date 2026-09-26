document.addEventListener('click', (event) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
        return;
    }

    const link = event.target.closest('a');

    if (!link) {
        return;
    }
    const target = link.getAttribute('target');
    if (target && target.toLowerCase() !== '_self') {
        link.setAttribute('target', '_self');
    }
}, true);