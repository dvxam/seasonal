import { Editor } from "../src/editor";

const { wrapWordWithColorSpan } = Editor;

describe("Editor", () => {
    test("wrapWithSpan returns the valid html", () => {
        const html = wrapWordWithColorSpan({
            regex: /Courgette/ig,
            word: "Courgette",
        }, "#FFFFFF", "<p>My Courgette Party</p>");

        expect(html).toEqual(
            `<p>My <span style="color: rgb(255, 255, 255);">Courgette</span> Party</p>`,
        );
    });
});
