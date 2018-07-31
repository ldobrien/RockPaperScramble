const express = require('express');

const router = new express.Router();

const mongoose = require('mongoose');



const User = require('mongoose').model('User');

//var uri = "mongodb+srv://Lisa:lisalisa@rockpaperscramble-25cod.mongodb.net/test?retryWrites=true";

//const db = mongoose('mongodb://rockpaperscramble-shard-00-02-25cod.mongodb.net:27017/RPSDatabase',['users'])

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

// router.put('/users/topscores/:email', (req,res) => {
//     // console.log("PUT");
//     console.log(req.body);
    
//     User.findOne({'email': req.params.email}, {maxScore: req.body.score},
//         function(err,score) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 return res.send('200');
//             }
//     }
//     );
// });



module.exports = router;