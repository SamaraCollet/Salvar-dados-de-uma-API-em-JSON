const fetch = require('node-fetch');

function apiToNode() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(responseObject => responseObject.json())
        .then(hydratedBody => {
            console.log(hydratedBody)
            const fs = require('fs')

            fs.appendFileSync('dados.json', JSON.stringify(hydratedBody))
        })
}

apiToNode()