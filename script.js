buzzer = document.getElementById("bzr")
buzzerdisplay = document.getElementById("bzrdisplay")

function buzzerPress() {
  let unixtimestamp = Date.now();
  var date = new Date(unixtimestamp).toLocaleTimeString("en-US")
  buzzerdisplay.innerHTML = `buzzed in at: ${date} ${unixtimestamp}`
}
