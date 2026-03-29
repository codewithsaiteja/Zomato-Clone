// script.js - Basic JS Functionalities for Zomato Clone

document.addEventListener("DOMContentLoaded", () => {
    
    // Elements
    const dishInput = document.getElementById("dishInput");
    const searchDropdown = document.getElementById("searchDropdown");

    // Mock Data for Autocomplete
    const suggestions = [
        { title: "Domino's Pizza", type: "Restaurant" },
        { title: "Burger King", type: "Restaurant" },
        { title: "Pizza Hut", type: "Restaurant" },
        { title: "KFC", type: "Restaurant" },
        { title: "McDonald's", type: "Restaurant" },
        { title: "Subway", type: "Restaurant" },
        { title: "Starbucks", type: "Restaurant" },
        { title: "Haldiram's", type: "Restaurant" },
        { title: "Taco Bell", type: "Restaurant" },
        { title: "Barbeque Nation", type: "Restaurant" },
        { title: "Bikanervala", type: "Restaurant" },
        { title: "Pizza", type: "Dish" },
        { title: "Burger", type: "Dish" },
        { title: "Biryani", type: "Dish" },
        { title: "Butter Chicken", type: "Dish" },
        { title: "Pasta", type: "Dish" },
        { title: "Cold Coffee", type: "Beverage" },
        { title: "Momos", type: "Dish" },
        { title: "Dosa", type: "Dish" },
        { title: "Paneer Tikka", type: "Dish" },
        { title: "Ice Cream", type: "Dessert" },
        { title: "Waffles", type: "Dessert" }
    ];

    // Listen for typing in the search bar
    dishInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchDropdown.innerHTML = ""; // Clear existing suggestions

        if (query.length > 0) {
            // Filter the mock data based on user input
            const filtered = suggestions.filter(item => 
                item.title.toLowerCase().includes(query)
            );

            if (filtered.length > 0) {
                // Populate dropdown with matched items
                filtered.forEach(item => {
                    const div = document.createElement("div");
                    div.classList.add("search-item");
                    
                    // Different icon based on what type of suggestion it is
                    const iconClass = item.type === "Restaurant" ? "fa-store" : "fa-utensils";
                    
                    div.innerHTML = `
                        <i class="fa-solid ${iconClass}"></i>
                        <div>
                            <span style="font-weight: 500">${item.title}</span>
                            <div style="font-size: 0.8rem; color: gray;">${item.type}</div>
                        </div>
                    `;

                    // Handle clicking a suggestion (Redirect)
                    div.addEventListener("click", () => {
                        dishInput.value = item.title;
                        searchDropdown.classList.remove("active");
                        // Redirect to actual search page
                        window.location.href = "https://www.zomato.com/ncr/restaurants?search=" + encodeURIComponent(item.title);
                    });

                    searchDropdown.appendChild(div);
                });

                searchDropdown.classList.add("active");
            } else {
                searchDropdown.classList.remove("active");
            }
        } else {
            searchDropdown.classList.remove("active");
        }
    });

    // Handle Enter keypress in search input
    dishInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter" && dishInput.value.trim() !== "") {
            searchDropdown.classList.remove("active");
            window.location.href = "https://www.zomato.com/ncr/restaurants?search=" + encodeURIComponent(dishInput.value.trim());
        }
    });

    // Close dropdown if user clicks outside of the search area
    document.addEventListener("click", (e) => {
        if (!e.target.closest('.search')) {
            searchDropdown.classList.remove("active");
        }
    });

});
