//your JS code here. If required.

const btn = document.getElementById('enterBtn');

btn.addEventListener('click', function(e) {
	let PStatus = document.getElementById('status')
	PStatus.outerHTML='<h1 id="status">Entered Metaverse</h1>'
})


