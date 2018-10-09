export namespace Matcher {
    export type WordMatch = { word: string, regex: RegExp };

    export function firstMatch(words: string[], content: string): WordMatch {
        return words
            .sort((b, a) => a.length - b.length)
            .map(w => ({ word: w, regex: buildRegexForWord(w) }))
            .find(({ regex }) => regex.test(content)) || { word: null, regex: null };
    }

    const buildRegexForWord = (word: string): RegExp =>
        new RegExp(`${word}`, "ig");
}