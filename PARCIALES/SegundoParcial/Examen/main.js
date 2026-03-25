    
    document.addEventListener("DOMContentLoaded",()=>{      //sin esto no funciona el SCRIPT...
    const input = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");
    

    input.addEventListener("input", () => {
        const value = input.value.toLowerCase();
        let visibleCount = 0;

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });
    });
});