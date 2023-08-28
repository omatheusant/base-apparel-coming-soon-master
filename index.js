const input = document.querySelector('input')
const button = document.querySelector('.submit-btn')

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active')
}

const handleFocusOut = ({ target }) => {

    if (target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active')

        
        
    }
}

function emailValidation() {
    usuario = input.value.substring(0, input.value.indexOf("@"));
    dominio = input.value.substring(input.value.indexOf("@")+ 1, input.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

            const errorIcon = document.querySelector('.icon-error')
            const errorMessage = document.getElementById('msgemail')
    
            
            errorIcon.classList.remove('show')
            input.classList.remove('invalid-email')
            
            errorMessage.innerHTML = 'Done!'
    
    }
    else{
        
        const errorIcon = document.querySelector('.icon-error')
        const errorMessage = document.getElementById('msgemail')

        
        errorIcon.classList.add('show')
        input.classList.add('invalid-email')
        
        errorMessage.innerHTML = 'Please provide a valid email'
   
    }
    }


input.addEventListener('focus', handleFocus)
input.addEventListener('focusout', handleFocusOut)
button.addEventListener('click', emailValidation)

