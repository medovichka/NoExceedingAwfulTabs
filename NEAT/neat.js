const nativeOpen = window.open;
window.open = function (url, target, features) {
    if (!target || target === '_blank') {
        if (url) {
            window.location.href = url;
        }
        return window;
    }
    return nativeOpen.call(window, url, target, features);
};

function forceSelfTarget(event) {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
        return;
    }

    const link = event.target.closest('a');
    if (!link) return;

    if (link.target && link.target.toLowerCase() !== '_self') {
        link.target = '_self';
    }
}

window.addEventListener('mousedown', forceSelfTarget, true);
window.addEventListener('click', forceSelfTarget, true);