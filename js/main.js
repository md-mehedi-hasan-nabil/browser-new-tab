
window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search')

    searchInput.focus()

    searchInput.addEventListener("keypress", (e) => {
        const searchValue = searchInput.value
        if (e.key === "Enter") {
            window.open(`https://www.google.com/search?q=${searchValue}`)
            searchInput.value = ""
        }
    });
});