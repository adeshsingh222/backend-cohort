const express = require('express');
const _= require('lodash')
const abc = require('../introduction/intro');
const lord = require('../logger/logger.js');
const hellfire = require('../validator/formatter.js')
const third = require('../util/helper.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
    lord.welcome()
    hellfire.knight()
    third.printDate()
    let months =['jan','feb','march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec']
    console.log(_.chunk(months,3));

    const oddnum = [1,3,5,7,9,11,13,15,17,19];
    console.log(_.tail(oddnum));
     
    const mykey=[ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
] 
console.log(_.fromPairs( mykey ));

const arr1=[1,2,3,4,5]
const arr2=[3,2,4,1,2]
const arr3=[1,3,4,5,6]
const arr4=[1,2,3,5,4]
const arr5=[6,3,2,4,5]
console.log(_.union(arr1,arr2,arr3,arr4,arr5));

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')

})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason

