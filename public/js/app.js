console.log('Client side javascript file loaded!')

fetch('http://localhost:3000/weather?address=').then((response) => {
	response.json().then((data) => {
		if (data.error) {
			return console.log(data.error)
		}

		console.log(data.location)
		console.log(data.forecast)
	})
})


document.addEventListener('DOMContentLoaded', () => {
	const weatherForm = document.querySelector('form')
	const search = document.querySelector('input')
	const messageOne = document.querySelector('#message-1')
	const messageTwo = document.querySelector('#message-2')


	weatherForm.addEventListener('submit', (e) => {
		e.preventDefault()
		const address = search.value

		messageOne.textContent = 'Loading...'
		messageTwo.textContent = ''
		fetch('http://localhost:3000/weather?address=' + address).then((response) => {
			response.json().then((data) => {
				if (data.error) {
					return messageOne.textContent = data.error
				}

				messageOne.textContent = data.location
				messageTwo.textContent = data.forecast
			})
		})
		
	})
})
