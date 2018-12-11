const express = require('express')
const app = express()
const path = require('path')
const request = require('request')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}


app.get("/teams/:teamName", function (req, res) {
    request('http://data.nba.net/10s/prod/v1/2018/players.json', function (error, response, body) {
        console.log(teamToIDs[req.params.teamName])
        let players = JSON.parse(body).league.standard.filter(p => p.teamId === teamToIDs[req.params.teamName]).filter(p => p.isActive)
        players=players.map(function(p){ 
            return {
                firstName: p.firstName,
                lastName: p.lastName,
                jersey: p.jersey,
                pos: p.pos
            }
        }) 
        res.send(players)

    })
})



const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
