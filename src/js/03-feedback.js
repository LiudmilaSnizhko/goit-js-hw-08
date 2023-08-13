const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const getKey = 'feedback-form-state';
const getData = JSON.parse(localStorage.getItem(getKey));

form.addEventListener('input', throttle(handlerOnInput, 500));

if(getData){
    form.elements.email.value = getData.email;
    form.elements.message.value = getData.message;
    }

function handlerOnInput(){
    const userData = {
        email: form.elements.email.value,
        message: form.elements.message.value, 
           };
    console.log(userData);
    localStorage.setItem(getKey, JSON.stringify(userData));
    
}

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {

    event.preventDefault();

    if (form.elements.email.value === '' || form.elements.message.value ==='') {
        return alert('Please fill in all the fields!');
    }

    console.log(JSON.parse(localStorage.getItem(getKey))); 
 
    form.reset();
  
    localStorage.removeItem(getKey);
  }







   