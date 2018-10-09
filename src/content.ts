import { Editor } from "./editor";
import { Matcher } from "./matcher";

const { firstMatch } = Matcher;
const { wrapWordWithColorSpan } = Editor;

const textTagNames = [
    "p",
    "a",
    "label",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
];

const words = [
    "courgette",
    "courgettes",
];

const forEachTag = (tagNames, callback) => {
    for (const tagName of tagNames) {
        const tags = document.getElementsByTagName(tagName);
        for (let i = 0; i < tags.length; i++) {
            callback(tags[i]);
        }
    }
};

forEachTag(textTagNames, (tag: HTMLElement) => {
    const match = firstMatch(words, tag.textContent);
    if (match.word) {
        const innerHTML = wrapWordWithColorSpan(match, "#FF0000", tag.innerHTML);
        tag.innerHTML = innerHTML;
    }
});
