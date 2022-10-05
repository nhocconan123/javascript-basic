import requests

url = "https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode"

querystring = {"zip":"25000"}

headers = {
	"X-RapidAPI-Key": "ea5dec95cemshd73d0954ed750f8p15f329jsnb45e8e61765f",
	"X-RapidAPI-Host": "us-weather-by-zip-code.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)