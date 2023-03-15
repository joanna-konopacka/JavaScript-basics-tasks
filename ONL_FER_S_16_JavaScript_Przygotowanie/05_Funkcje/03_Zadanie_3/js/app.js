function calculateTip(rating, amount) {
	switch (rating) {
		case "Bardzo dobra obsługa": {
			console.log("Bardzo dobra obsługa- " + amount * 0.25 + " napiwku");
			break;
		}
		case "Dobra obsługa": {
			console.log("Dobra obsługa- " + amount * 0.2 + " napiwku");
			break;
		}
		case "Średnia obsługa": {
			console.log("Średnia obsługa- " + amount * 0.15 + " napiwku");
			break;
		}
		case "Zła obsługa": {
			console.log("Zła obsługa- " + 0 + " napiwku");
			break;
		}
		default: {
			console.log("Opis nieczytelny ");
			break;
		}
	}
}
calculateTip("Dobra obsługa-", 150);
