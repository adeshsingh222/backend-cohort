const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/movies',function (req,res) {
       let movies = ['KGF', 'VIKRAM','BAHUBALLI','JAB WE MET']
       res.send(movies)
       console.log(movies)
})

router.get ('/movies/:indexNumber', (req,res) => {
    const myMovies = ['KGF', 'VIKRAM','BAHUBALLI','JAB WE MET'];
    let indexOfMovie = + (req.params.indexNumber)
    console.log( indexOfMovie)

    if (indexOfMovie < 0 || indexOfMovie > myMovies.length){
        res.send("please insert valid index")
    }
    else{
        res.send(myMovies[indexOfMovie])
    }
 })
// router.get('GET /films/:indexNumber',function(req,res))

router.get('/films', function(req, res){
    let films = [{
        "id": 1,
        "name": "KGF"
       }, {
        "id": 2,
        "name": "VIKRAM"
       }, {
        "id": 3,
        "name": "BAHUBALLI"
       }, {
        "id": 4,
        "name": "JUJUTSU KAISAN"
       }]
        
       console.log(films)
        res.send(films);
    })
     
    
    router.get('/Films/:id', function(req, res){
        let films = [{
            "id": 1,
            "name": "NARUTO"
           }, {
            "id": 2,
            "name": "ONE PIECE"
           }, {
            "id": 3,
            "name": "DEMON SLAYER"
           }, {
            "id": 4,
            "name": "HUNTER X HUNTER"
           }]
    
         let result = req.params.id
         result1 = result -1
        // let i = req.params.indexNumber;
       if(result <= films.length){
            res.send(films[result1])
    }else {
        res.send("WHAT THE HELL MAN! , THERE IS NO MOVIE WITH THIS ID")
    }
           
    })



// })

    // for(let i=0; i<movies.length;i++){
    //     console.log(movies[i])
    // }
    //    res.send(movies)


router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;