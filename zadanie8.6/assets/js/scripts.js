
		var a = 6;
		var b = 4;
		var value = (a * a) - (2 * a * b) + (b * b); 
		console.log('wynik działania na a i b to ' + value);
		
		
		if (value === 0) {
			console.log('wynik równy zero');
			} else if (value >= 0) {
			console.log('wynik ten jest dodatni i różny od zera');
			} else if (value <= 0){
			console.log('wynik ten jest ujemny i różny od zera');
			}
			
		
		var resultEl = document.getElementById('result');
		resultEl.innerHTML = '<p>' + value + '</p>';
		
		var selectedTab = 'result';
		
		


	