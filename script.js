window.addEventListener('load', () => {

    const nameField = document.querySelector('.name')
    const emailField = document.querySelector('.email')
    const phoneField = document.querySelector('.phone')
    const messageField = document.querySelector('.text_message')
    const submitButton = document.querySelector('.btn_submit')
    const form_submit = document.getElementById('form_submit')

    function validateContactForm(e) {
        if (nameField.value !== '' && emailField.value !== '' && phoneField.value !== '' && messageField.value !== '') {
            console.log('you can send your message')
        }
    }

    submitButton.addEventListener('click', () => {
        validateContactForm()
    })

})