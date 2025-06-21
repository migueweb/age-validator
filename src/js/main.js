const $form = document.querySelector('#form')
const $result = document.querySelector("#feedbackWrapper")
const $userAge = document.querySelector('#userAge')

$form.addEventListener('submit', (e) => {
    e.preventDefault()
    let userName = e.target[0].value
    let userAge  =  e.target[1].value
    let message, error
    
    userName = userName.trim()
    userAge = parseInt(userAge)

    
    // Check userAge
    if (isNaN(userAge)) {
        message = 'Error: Por favor, ingresa una edad válida en números.'
        error = true
    }
    if (!isNaN(userAge)) {
        $userAge.value = userAge
    }

    if (userAge < 1) {
        message = 'Error: La edad debe ser mayor a cero'
        error = true
    }
    
    // Check userName

    if (userName.length > 25) {
        message = 'Error: El nombre es demasiado largo. El máximo permitido es de 25 caracteres.'
        error = true
    }

    if (userName.length === 0) {
        message = 'Error: Por favor, ingresa tu nombre'
        error = true
    }

    // if error was setted trigger an error message
    if (error) {
        setMessage($result, message, error)
        return
    }

    // Valid age
    if (userAge < 18) {
        message = `Hola ${userName}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
    } else if (userAge >= 18) {
        message = `Hola ${userName}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
    }

    setMessage($result, message)
})

function setMessage ($element, message, error=false) {

    $element.innerHTML = `
        <div class="feedback ${error ? "error" : 'normal'}">
            <p>${message}</p>
        </div>
    `
}