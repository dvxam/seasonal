import { Matcher } from './matcher';

export namespace Editor {
    export function wrapWordWithColorSpan(match: Matcher.WordMatch, color: string, content: string): string {
        return content.replace(match.regex, wrapWithSpan(match.word, color));
    }

    const wrapWithSpan = (word: string, color: string): string => {
        var span = document.createElement("SPAN");
        span.textContent = word;
        span.style['color'] = color;
        return span.outerHTML;
    };
}