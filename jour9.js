// Exercice 1 :

function whatDayIsToday() {
    var day = new Date().getDay()
    var dayWeeks = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    return (`Aujourd'hui nous sommes ${dayWeeks[day]}`)
}

var now = whatDayIsToday()

console.log(now)

// Exercice 2 :

function whatMonthIsIt() {
    var month = new Date().getMonth() + 1
    var months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]
    return (`Nous sommes au mois de ${months[month]}`)
}

var october = whatMonthIsIt()

console.log(october)

// Exercice 3 : 

function formatDate(str) {
    var test = new Date(str)
    // console.log(test)
    var day = test.getDate()
    if (day < 10) {
        day = '0' + day;
    }
    var month = test.getMonth() + 1
    if (month < 10) {
        month = '0' + month;
    }
    var year = test.getFullYear()
    console.log(`${day}/${month}/${year}`)
}
formatDate("1985-5-5")

// Exercice 4 : 

function calculateAge(birthDays) {
    var birthDay = new Date(birthDays)
    var todayYear = new Date().getFullYear()
    var todayMonth = new Date().getMonth()
    var todayDay = new Date().getDate()
    var birthDayYear = birthDay.getFullYear()
    var birthDayMonth = birthDay.getMonth() + 1
    var birthDayDay = birthDay.getDate()
    var age

    age = todayYear - birthDayYear, todayMonth - birthDayMonth,
            todayDay - birthDayDay


    if (birthDayMonth > todayMonth) {
        birthDays = age - 1
        console.log(birthDays)
    } else {
        console.log(age)
    }
    return age
}

var yearOld = calculateAge("1992-05-11")

console.log(yearOld)

// Bonus : 





