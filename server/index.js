const { response } = require('express');
const cors = require('cors')
const express = require('express');
const { save, findOne,findTwentyFive} = require('../database/index.js')
let app = express();
app.use(cors());
const { getReposByUsername } = require('../helpers/github.js')
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  findOne(req.body.userName).then(response => {
    if (response.length) {
      res.json(response)
    }
    else {
      getReposByUsername(req.body.userName, (data, err) => {
        if (data) {
          data.map(repo => save({
            id: repo.id,
            name: repo.name,
            user: repo.owner.login,
            html_url: repo.html_url,
            forks_count: repo.forks_count,
            created_at: repo.created_at
          }))
          res.json(data)
        }
        else { res.send(err) }
      });
    }
  })

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

})
app.get('/repos', function (req, res) {
  findTwentyFive().then(response=>res.json(response))
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

