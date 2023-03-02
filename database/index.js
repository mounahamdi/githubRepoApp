const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');

let repoSchema = mongoose.Schema({
    id: Number,
    name: String,
    user: String,
    html_url:String,
    forks_count:Number, 
    created_at:Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = async (repo) => {
await new Repo(repo).save()
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}
let findOne = async (username)=>{
 let check = await Repo.find({user:username})
 return check
}
let findTwentyFive = async ()=>{
  let check = await Repo.find({})
  let result = []
  result = check.filter((repo)=>repo.forks_count>1 && result.length<=25)
  return result
 }

module.exports = {save,findOne,findTwentyFive};