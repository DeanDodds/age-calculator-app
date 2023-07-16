const form = document.getElementById('date-of-birth-input');
const errorMessages = document.getElementsByClassName('error-message');
const labels = document.getElementsByClassName('labels');
const inputs = document.getElementsByClassName('input');
const currentDate = new Date();


const formSubmit = (event) => {
    event.preventDefault();
    resetFormValidation();

    const dateOfBirthDay = document.getElementById('day').value;
    const dateOfBirthMonth = document.getElementById('month').value;
    const dateOfBirthYear = document.getElementById('year').value;
    const dateOfBirth =  new Date(dateOfBirthYear + "-" + dateOfBirthMonth  + "-" + dateOfBirthDay)

    // Form validation 
    if(!isValidDate(dateOfBirthYear, dateOfBirthMonth, dateOfBirthDay)) {
        errorMessages[0].innerHTML = 'Must be valid day';
        for(let i = 0; i < errorMessages.length; i++){
            labels[i].classList.add('invalid-data-error');
            inputs[i].classList.add('input-error');
        }
    } else {
        calculateAge(dateOfBirth)
    }
     
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
    }
    
    const isValidDate = (year, month, day) => {
        const dateOfBirthDate = new Date(year, (month -1 ),day);
        const currentDate = new Date();
        if (dateOfBirthDate.getFullYear() == parseInt(year) && (dateOfBirthDate.getMonth() + 1 )== parseInt(month) && dateOfBirthDate.getDate() == parseInt(day) && dateOfBirthDate < currentDate) {
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
    
    const calculateAge = (dateOfBirth) =>{
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - dateOfBirth;

        // Convert milliseconds to years
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

        // Calculate the remaining months and days
        const years = Math.floor(ageInYears);
        const months = Math.floor((ageInYears - years) * 12);
        const days = Math.floor((ageInYears * 365.25) % 30.4375);

        displayAge(years, months, days)
    }
    
    const displayAge = (year, month, day) => {
        const resultsDisplays = document.querySelectorAll('.result')
        
        document.getElementById('year-result').setAttribute('data-age', year)
        document.getElementById('month-result').setAttribute('data-age', month)
        document.getElementById('day-result').setAttribute('data-age', day)
        
        let interval = 1000;
 
        resultsDisplays.forEach((resultDisplay) => {
            let startValue = -1
            let endValue = parseInt(resultDisplay.getAttribute('data-age'))
            let duration = Math.floor(interval / endValue)
            let counter = setInterval(function () {
                startValue += 1
                resultDisplay.textContent = startValue
                if(startValue == endValue || endValue == '0'){
                    clearInterval(counter)
                }
            },duration)
        });
    }
    
    
form.addEventListener('submit', formSubmit)