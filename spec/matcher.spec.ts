import { Matcher } from "../src/matcher";

const { firstMatch } = Matcher;

describe("Matcher", () => {
    test("firstMatch has default return values", () => {
        const { word, regex }: Matcher.WordMatch = firstMatch([], "");

        expect(word).toBeNull();
        expect(regex).toBeNull();
    });

    test("firstMatch returns first matching world in length", () => {
        const { word } = firstMatch(
            [
                "courgette",
                "courgettes",
            ], "Courgettes is beautiful!",
        );

        expect(word).toEqual("courgettes");
    });
});
