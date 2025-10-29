 // Disable context menu (right-click / long-press)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Optional: prevent long-press selecting images
    document.addEventListener('mousedown', function(e) {
        if(e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    document.addEventListener('touchstart', function(e) {
        if(e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });