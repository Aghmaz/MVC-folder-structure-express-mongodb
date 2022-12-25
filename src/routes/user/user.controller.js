const express = require('express');
const errorhandler = require('../../middlewear/error');
// const errorhandler = require('../../middlewear/error');
const User = require('../../models/model')
const router = express.Router();

// schema is created now create post route in other words i am writing my 
// first function of crud operation here 
// method-1: 
router.post('/signup',errorhandler(async (req, res) => {
    const payload = req.body;
    const { error } = User(payload);
    if (error) {
        return res.status(400).send({ message: error.details[0].message })
    }
    let user = new User(payload);
    user = await user.save();    
    res.status(200).send({ user });
})
)


// create a get route 
router.get("/",errorhandler(async (req,res)=>{
    const users = await User.find();
    res.status(200).send(users)
}))

// Now Create a Update Route 
router.patch('/:userId', errorhandler(async (req,res) => {
     await User.findByIdAndUpdate(req.params.userId,req.body)
     res.status(200).send("updated")
}))

// now create a delete route 

router.delete('/:userId', errorhandler(async (req,res) => {
    const id = req.params.userId
    await User.findByIdAndRemove(id).exec()
    res.send('Deleted')
}))

module.exports = router;