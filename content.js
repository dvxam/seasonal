(function () {
    console.log('Chrome Extension ready to go.');

    var textTagNames = [
        'p',
        'label',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6'
    ];

    for (tagName of textTagNames) {
        for (p of document.getElementsByTagName(tagName)) {
            if (/courgette/ig.test(p.textContent)) {
                p.innerHTML = p.textContent.replace(
                    /courgette/ig,
                    '<span style="color: #ff0000">courgette</span>'
                );
            }
        }
    }
})();