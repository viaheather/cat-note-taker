const router = require('express').router();
const db = require('db/db.json');

router.post('notes'), (req,res) => {
}

router.get('/notes'), (req,res) => {
    res.json(db);
}

router.get('/notes'), (req,res) => {
    res.sendFile(path.join(__dirname,'public/notes.html'))
}

module.exports=router;