const express = require('express');

const router = new express.Router();

const mongoose = require('mongoose');



const User = require('mongoose').model('User');

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.get('/users/topscores', (req, res) => {
    User.find(
    	{

    	},
    	{
    		name:1,
    		maxScore:1,
    		_id:1
    	},
    	{
    		sort:{
    			maxScore:-1
    		}
    	}, 
    	(err, users) => {
	    if (err) { 
	    	res.send(err); 
        } else {
            res.json(users);
        }
    });
});

router.get('/users/topscores/:email', (req,res) => {
    // console.log("PUT");
    console.log(req.body);
    
    User.findOne(
        {
            'email': req.params.email
        }, 
        {
            maxScore:1,
            _id:0
        },
        (err,current) => {
            if (err) {
                res.send(err);
            } else {
                console.log(current);
                res.json(current);
            }
    }
    );
});

router.put('/users/topscores/:email', (req,res) => {
    // console.log("PUT");
    console.log(req.body);

    User.findOneAndUpdate({'email': req.params.email}, {maxScore: req.body.score},
        function(err,score) {
            if (err) {
                res.send(err);
            } else {
                return res.send('200');
            }
    }
    );
});




module.exports = router;