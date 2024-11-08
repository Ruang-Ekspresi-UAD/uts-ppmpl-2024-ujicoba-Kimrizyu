// themeToggle.js
async function toggleTheme() {
    const body = document.body;
    const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";

    // Toggling the theme locally
    body.classList.toggle("dark-mode");

    // Menyimpan preferensi ke server melalui endpoint API
    try {
        await fetch("http://localhost:3000/api/theme", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ theme: newTheme })
        });
    } catch (error) {
        console.error("Error updating theme:", error);
    }
}

// Memuat preferensi tema saat halaman dimuat
async function loadTheme() {
    try {
        const response = await fetch("http://localhost:3000/api/theme");
        const data = await response.json();
        if (data.theme === "dark") {
            document.body.classList.add("dark-mode");
        }
    } catch (error) {
        console.error("Error loading theme:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadTheme);
