// unit.test.js
const { JSDOM } = require("jsdom");
const { toggleTheme } = require("./theme-toggle.js"); // Import function from themeToggle.js

beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
    global.document = dom.window.document;
    global.localStorage = {
        storage: {},
        setItem(key, value) { this.storage[key] = value; },
        getItem(key) { return this.storage[key]; },
        clear() { this.storage = {}; },
    };
});

describe("Unit Test for toggleTheme Function", () => {
    it("should enable dark mode and set localStorage to 'dark'", () => {
        toggleTheme(); // Call toggleTheme
        expect(document.body.classList.contains("dark-mode")).toBe(true);
        expect(localStorage.getItem("theme")).toBe("dark");
    });

    it("should disable dark mode and set localStorage to 'light'", () => {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");

        toggleTheme();
        expect(document.body.classList.contains("dark-mode")).toBe(false);
        expect(localStorage.getItem("theme")).toBe("light");
    });
});
