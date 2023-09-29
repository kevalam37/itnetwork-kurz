class SeznamPojistencu {
	
    constructor(jazyk = "cs-CZ") {
    	this.zaznamy = [];
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
		    this.vypisZaznamy();
	    };
    }

    vypisZaznamy() {
    	this.vypisElement.innerHTML = "";
    	for (let i = 0; i < this.zaznamy.length; i++) {
		    const zaznam = this.zaznamy[i];
		    this.vypisElement.innerHTML += `<h4>${zaznam.jmeno}</h4> <h4>${zaznam.prijmeni}</h4> <h4>${zaznam.telefon}</h4> <h4>${zaznam.vek}</h4> ${zaznam.datum} `;
	    }
    }
    
}

