let test = 'test'

let today = new Date();
let dayToday = today.getDate();
let monthToday = today.getMonth() + 1;
let yearToday =  today.getFullYear();

let dayInput = document.getElementById('day');
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');

let messageDayInvalid = document.querySelector('.label-hidden__day');
let messageMonthInvalid = document.querySelector('.label-hidden__month');
let messageYearInvalid = document.querySelector('.label-hidden__year');

let labelDay = document.querySelector('.label-day');
let labelMonth = document.querySelector('.label-month');
let labelYear = document.querySelector('.label-year');

let ageDayShow = document.querySelector('.day-number')
let ageMonthShow = document.querySelector('.month-number')
let ageYearShow = document.querySelector('.year-number')

let form  = document.querySelector('.form');

let ageYear = 0;
let ageMonth = 0;
let ageDay = 0;

form.addEventListener('submit', function (e){
    e.preventDefault()

    let dayContent = dayInput.value;
    let monthContent = monthInput.value;
    let yearContent = yearInput.value;

    let AllSuccess = true;

    resetError ();

    if (!(dayContent >= 1 && dayContent<=31)){
        AllSuccess = false;
        messageErrorInvalid(dayInput, messageDayInvalid, labelDay);
        dayInput.value=''

    }

    if(!(monthContent >=1 && monthContent<=12)){
        AllSuccess = false;
        messageErrorInvalid(monthInput, messageMonthInvalid, labelMonth);
        monthInput.value=''
    }

    if(yearToday < yearContent){
        AllSuccess = false;
        messageYearInvalid.innerHTML = 'Must be in the past'
        messageErrorInvalid(yearInput, messageYearInvalid, labelYear);
        yearInput.value=''
    }

    if (dayContent.length === 0){
        AllSuccess = false;
        changeMessage(messageDayInvalid);
        messageErrorInvalid(dayInput, messageDayInvalid, labelDay);
        dayInput.value=''

    }

    if (monthContent.length === 0){
        AllSuccess = false;
        changeMessage(messageMonthInvalid);
        messageErrorInvalid(monthInput, messageMonthInvalid, labelMonth);
        monthInput.value =''
    }

    if (yearContent.length === 0){
        AllSuccess = false;
        changeMessage(messageYearInvalid);
        messageErrorInvalid(yearInput, messageYearInvalid, labelYear)
    }

    if ((dayContent == 30 || dayContent ==31)&& (monthContent == 2)){
        AllSuccess = false;
        messageInvalidDate();
            dayInput.value=''

    }

    if (dayContent == 31){

        let month31 = [1,3,5,7,8,10,12];
        let month31Checked = false;

        for (let i =0; i < 6; i++){
            if(monthContent == month31[i]){
                month31Checked = true;
                break
            }
        }

        if (!month31Checked){
            AllSuccess = false;
            messageInvalidDate();
            dayInput.value =''
            monthInput.value =''
        }
        
    }

    if (!leapYear(yearContent)){
        AllSuccess = false;
        messageInvalidDate();
    }

    if (AllSuccess){
        ageYear = yearToday - yearContent;
        ageMonth = monthToday - monthContent;
        ageDay = dayToday - dayContent;

        if(monthContent > monthToday){
            ageMonth = monthContent - monthToday;
        }

        if(dayContent > dayToday){
            ageDay = dayContent - dayToday;
        }

        ageYearShow.innerHTML = `${ageYear}`
        ageMonthShow.innerHTML = `${ageMonth}`
        ageDayShow.innerHTML = `${ageDay}`


    }

})

function messageErrorInvalid(dayInput, messageDayInvalid, labelDay){
    dayInput.style.border = '2px solid hsl(0, 100%, 67%)';
    messageDayInvalid.style.visibility = 'visible';
    labelDay.style.color = 'hsl(0, 100%, 67%)'
}

function changeMessage(messageDayInvalid){
    messageDayInvalid.innerHTML ='This fiels is required';
}

function leapYear(yearContent){
    
    if(yearContent % 4 === 0){
        return true;
    } else {
        return false;
    }
}

function messageInvalidDate(){


    dayInput.style.border = '2px solid hsl(0, 100%, 67%)';
    monthInput.style.border = '2px solid hsl(0, 100%, 67%)';
    yearInput.style.border = '2px solid hsl(0, 100%, 67%)';

    labelDay.style.color = 'hsl(0, 100%, 67%)';
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    labelYear.style.color = 'hsl(0, 100%, 67%)';

    messageDayInvalid.innerHTML = 'Must be a valid date';
    messageDayInvalid.style.visibility = 'visible'

}

function resetError(){
    labelDay.style.color = 'hsl(0, 1%, 44%)';
    labelMonth.style.color = 'hsl(0, 1%, 44%)';
    labelYear.style.color = 'hsl(0, 1%, 44%)';

    dayInput.style.border = '2px solid hsl(0, 0%, 86%)';
    monthInput.style.border = '2px solid hsl(0, 0%, 86%)';
    yearInput.style.border = '2px solid hsl(0, 0%, 86%)';

    messageDayInvalid.style.visibility = 'hidden'
    messageMonthInvalid.style.visibility = 'hidden'
    messageYearInvalid.style.visibility = 'hidden'


    ageDayShow.innerHTML = '--'
    ageMonthShow.innerHTML = '--'
    ageYearShow.innerHTML = '--'
}





