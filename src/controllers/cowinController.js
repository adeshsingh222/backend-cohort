let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// ====================================Assignment problem 1 ===================================================

let getByDistrictId = async function (req, res) {
    try {
        let id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


// ============================ problem 2 ==================================================


let getWeatherByCities = async function (req, res) {
    let sortedCity = []
    try {
        let city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for (let i = 0; i < city.length; i++) {
            q = city[i]
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=1362dae990936264cdd25b4ceb4d9f18`
            }
            let result = await axios(options)

            sortedCity.push({ city: city[i], temp: result.data.main.temp, })
        }
        res.status(200).send({ data: sortedCity.sort((a, b) => a.temp - b.temp) })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




// ===================================================problem 3 ==============================================================

let memeQuestion = async function (req, res){
    try {
        let options = {
            method: "post",
            url: "https://api.imgflip.com/caption_image?template_id=4087833&text0=after solve an error&username=chewie12345&password=meme@123"
        }
        let result = await axios(options)
        res.send({data: result.data})
    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: err.message })
    }
}










module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrictId = getByDistrictId
module.exports.memeQuestion = memeQuestion
module.exports.getWeatherByCities = getWeatherByCities