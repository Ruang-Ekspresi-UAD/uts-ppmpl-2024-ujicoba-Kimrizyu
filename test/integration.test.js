// integration.test.js
const { JSDOM } = require("jsdom");
const { toggleTheme } = require("./theme-toggle.js"); // Import toggleTheme function

beforeEach(() => {
    const dom = new JSDOM(`<!DOCTYPE html><html><body><button id="theme-toggle">Toggle</button></body></html>`);
    global.document = dom.window.document;
    global.localStorage = {
        storage: {},
        setItem(key, value) { this.storage[key] = value; },
        getItem(key) { return this.storage[key]; },
        clear() { this.storage = {}; },
    };
});

describe("Integration Test for toggleTheme with HTML", () => {
    it("should toggle theme and update localStorage when button is clicked", () => {
        const button = document.getElementById("theme-toggle");
        button.addEventListener("click", toggleTheme);

        // Simulate button click to enable dark mode
        button.click();
        expect(document.body.classList.contains("dark-mode")).toBe(true);
        expect(localStorage.getItem("theme")).toBe("dark");

        // Simulate button click to disable dark mode
        button.click();
        expect(document.body.classList.contains("dark-mode")).toBe(false);
        expect(localStorage.getItem("theme")).toBe("light");
    });
});
