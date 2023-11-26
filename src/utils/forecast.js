const request = require('request')

const forecast = (lat, lon, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=7b0cae81e9a1b6e77e00649d1e7ac58f&query=' + lat + ',' + lon + '&units=m'

	request({ url, json: true }, (error, { body } = {}) => {
		if (error) {
			callback('Unable to connect to weather service!', undefined)
		} else if (body.error) {
			callback('Unable to find location!', undefined)
		} else {
			callback(undefined, body.current.weather_descriptions[0] +'. It is currently ' + body.current.temperature + ' degree Celsius out. '
			+ 'There is a ' + body.current.precip + '% chance of rain.')
		}
	})
}

module.exports = forecast