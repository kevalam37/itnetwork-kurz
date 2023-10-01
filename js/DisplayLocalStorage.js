

        // Funkce pro vypsání obsahu localStorage do tabulky
        function displayLocalStorage() {
            const localStorageTable = document.getElementById('localStorageTable').querySelector('tbody');
            
            // Projdeme všechny položky v localStorage
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                
                // Vytvoříme nový řádek pro tabulku
                const row = document.createElement('tr');
                
                // Vytvoříme buňku pro klíč
                const keyCell = document.createElement('td');
                keyCell.textContent = key;
                
                // Vytvoříme buňku pro hodnotu
                const valueCell = document.createElement('td');
                valueCell.textContent = value;
                
                // Přidáme buňky do řádku
                row.appendChild(keyCell);
                row.appendChild(valueCell);
                
                // Přidáme řádek do tabulky
                localStorageTable.appendChild(row);
            }
        }

        // Voláme funkci pro zobrazení obsahu localStorage při načtení stránky
        displayLocalStorage();