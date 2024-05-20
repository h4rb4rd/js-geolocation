const displayArea = document.querySelector('#locationDisplay')
const locationBtn = document.querySelector('#locationBtn')

locationBtn.addEventListener('click', () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayGeoData, displayError)
	} else {
		displayArea.textContent = 'Geolocation is not supported by this browser'
	}
})

const displayGeoData = position => {
	const { latitude, longitude } = position.coords
	displayArea.textContent = `Latitude ${latitude}, Longitude ${longitude}, click to open map`
	displayArea.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
}

const displayError = err => {
	displayArea.textContent = `Error: ${err.message}`
}
