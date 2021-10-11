var moment = require('moment')

function whatDayIsToday() {
    var day = new Date().getDay()
    var dayWeeks = moment().format('dddd')
    return (`Aujourd'hui nous sommes ${dayWeeks[day]}`)
}

var now = whatDayIsToday()

console.log(now)
    
