const form = document.getElementById('date-of-birth-input');
const errorMessages = document.getElementsByClassName('error-message');
const labels = document.getElementsByClassName('labels');
const inputs = document.getElementsByClassName('input');


const formSubmit = (event) => {
    event.preventDefault();
    resetFormValidation();

    const dateOfBirthDay = document.getElementById('day').value;
    const dateOfBirthMonth = document.getElementById('month').value;
    const dateOfBirthYear = document.getElementById('year').value;

    const dateOfBirth =  new Date(dateOfBirthYear + "-" +dateOfBirthMonth + "-" + dateOfBirthDay)

    // Form validation 
     
    // day validation
    if (dateOfBirthDay === '' || dateOfBirthDay > 31 ){
            (dateOfBirthDay === '')? errorMessages[0].innerHTML = 'This field is required' : errorMessages[0].innerHTML = 'Must be valid day';
            labels[0].classList.add('invalid-data-error');
            inputs[0].classList.add('input-error');
    }

    // Month validation
    if (dateOfBirthMonth === '' || dateOfBirthMonth > 12 ){
        (dateOfBirthMonth === '')? errorMessages[1].innerHTML = 'This field is required' : errorMessages[1].innerHTML = 'Must be valid month';
        labels[1].classList.add('invalid-data-error');
        inputs[1].classList.add('input-error');
    }

     // Year validation
       if (dateOfBirthYear === '' || dateOfBirthYear > 2023 ){
        (dateOfBirthYear === '')? errorMessages[2].innerHTML = 'This field is required' : errorMessages[2].innerHTML = 'Must be valid year';
        labels[2].classList.add('invalid-data-error');
        inputs[2].classList.add('input-error');
    }

    if(!isValidDate(dateOfBirthYear, dateOfBirthMonth, dateOfBirthDay)) {
        errorMessages[0].innerHTML = 'Must be valid day';
        for(let i = 0; i < errorMessages.length; i++){
            labels[i].classList.add('invalid-data-error');
            inputs[i].classList.add('input-error');
        }
    } else {
        calculateAge(dateOfBirthYear,dateOfBirthMonth,dateOfBirthDay)
    }
    }


form.addEventListener('submit', formSubmit)


// Functions 

const isValidDate = (year, month, day) => {
    var d = new Date(year, month -1, day);
    if (d.getFullYear() == parseInt(year) && d.getMonth() +1 == parseInt(month) && d.getDate() == parseInt(day)) {
        return true;
    }
    return false;
}

const resetFormValidation = () => {
    for(let i = 0; i < errorMessages.length; i++){
        errorMessages[i].innerHTML = '';
        labels[i].classList.remove('invalid-data-error');
        inputs[i].classList.remove('input-error');
    }
}

const calculateAge = (year, month, day) =>{
    console.log(day,month,year)
}
