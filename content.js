(function () {
    console.log('Chrome Extension ready to go.');

    const textTagNames = [
        'p',
        'label',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6'
    ];

    const words = [
        'courgette',
        'courgettes'
    ];

    const firstMatch = (words, content) =>
        words
            .sort((b, a) => a.length - b.length)
            .map(w => ({ word: w, regex: new RegExp(w, "ig") }))
            .find(({ regex }) => regex.test(content)) || {};

    const wrapWithSpan = (word, color) => {
        var span = document.createElement("SPAN");
        span.textContent = word;
        span.style['color'] = color;
        return span;
    };

    const insertSpanToReplaceWord = (content, regex, span) =>
        content.innerHTML = content.textContent.replace(regex, span.outerHTML);

    const forEachTag = (tagNames, callback) => {
        for (tagName of tagNames) {
            for (tag of document.getElementsByTagName(tagName)) {
                callback(tag);
            }
        }
    }

    forEachTag(textTagNames, (tag) => {
        var { word, regex } = firstMatch(words, tag.textContent);
        if (word)
            insertSpanToReplaceWord(tag, regex, wrapWithSpan(word, '#ff0000'));
    });
})();