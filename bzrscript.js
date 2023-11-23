buzzer = document.getElementById("bzr");
buzzerdisplay = document.getElementById("bzrdisplay");
displayText = buzzerdisplay.innerHTML;

function buzzerPress() {
	let unixtimestamp = Date.now();
	var date = new Date(unixtimestamp).toLocaleTimeString("en-US");
	displayText = `buzzed in at: ${date} ${unixtimestamp}`;
}
