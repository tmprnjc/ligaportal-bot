const request = require('request-promise')
require('colors')

class Bot {
    constructor () {
        this.jar = request.jar()
        this.start()
    }

    async start() {
        let voteItem = "22388"
        let votingId = "68"
        let captcha_response = ""

        let response = await request({
            url: "https://ticker.ligaportal.at/playerVoting/playerOneUp",
            method: 'POST',
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://ticker.ligaportal.at/playerVoting/showVoting/68",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "mode": "cors",
            "credentials": "omit",
            "body": `voteItem=${voteItem}&votingId=${votingId}&g-recaptcha-response=${captcha_response}&playerOneUp=Abstimmen`,
            jar: this.jar,
            timeout: 15000,
            simple: false,
            resolveWithFullResponse: true,
        })

        console.log(response.statusCode)
    }
}

new Bot()