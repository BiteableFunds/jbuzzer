var buzzer = document.getElementById("buzzer");
var buzzerdisplay = document.getElementById("display");

function buzzerPress() {
    let unixtimestamp = Date.now();
    let date = new Date(unixtimestamp).toLocaleTimeString("en-US");
    buzzerdisplay.innerHTML = `buzzed in at: ${date} ${unixtimestamp}`;
}
