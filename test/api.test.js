// api.test.js
const request = require("supertest");
const express = require("express");

const app = require("./server"); // Import Express app dari server.js

describe("API Test for Theme Preference", () => {
    it("should get default theme as light", async () => {
        const res = await request(app).get("/api/theme");
        expect(res.statusCode).toBe(200);
        expect(res.body.theme).toBe("light");
    });

    it("should update theme to dark", async () => {
        const res = await request(app)
            .post("/api/theme")
            .send({ theme: "dark" });

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Theme updated to dark");

        const getRes = await request(app).get("/api/theme");
        expect(getRes.body.theme).toBe("dark");
    });

    it("should reject invalid theme", async () => {
        const res = await request(app)
            .post("/api/theme")
            .send({ theme: "blue" });

        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe("Invalid theme");
    });
});
