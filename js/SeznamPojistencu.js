class SeznamPojistencu {
	
    constructor(jazyk = "cs-CZ") {
		const zaznamyZeStorage = localStorage.getItem("zaznamy");
		this.zaznamy = zaznamyZeStorage ? JSON.parse(zaznamyZeStorage) : [];
		this.jazyk = jazyk;
	
    	this.jmenoInput = document.getElementById("jmeno");
    	this.prijmeniInput = document.getElementById("prijmeni");
    	this.telefonInput = document.getElementById("telefon");
    	this.vekInput = document.getElementById("vek");
    	this.datumInput = document.getElementById("datum");
    	this.potvrditButton = document.getElementById("potvrdit");
    	this.vypisElement = document.getElementById("seznam-ukolu");
    	
    	this.nastavUdalosti();
    }

    nastavUdalosti() {
    	this.potvrditButton.onclick = () => { 
		    const zaznam = new Zaznam( this.jmenoInput.value, this.prijmeniInput.value, this.telefonInput.value, this.vekInput.value, this.datumInput.value);
		    this.zaznamy.push(zaznam);
			localStorage.setItem("zaznamy", JSON.stringify(this.zaznamy)); // přidaný řádek

		    this.vypisZaznamy();
	    };
    }

	vypisZaznamy() {
		const table = document.getElementById("data-table");
		const row = table.insertRow();
		const cell1 = row.insertCell(0);
		const cell2 = row.insertCell(1);
		const cell3 = row.insertCell(2);
		const cell4 = row.insertCell(3);
		const cell5 = row.insertCell(4);

    	for (let i = 0; i < this.zaznamy.length; i++) {
		    const zaznam = this.zaznamy[i];
		    
		cell1.innerHTML = zaznam.jmeno;
		cell2.innerHTML = zaznam.prijmeni;
		cell3.innerHTML = zaznam.telefon;
		cell4.innerHTML = zaznam.vek;
		cell5.innerHTML = zaznam.datum;
	    }
    }

	    
}