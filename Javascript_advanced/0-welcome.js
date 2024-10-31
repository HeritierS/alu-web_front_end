function welcome(firstName, lastName) {
    firstName = 'Heri';
    lastName = 'Seba';
    
    let fullName = `${firstName} ${lastName}`;
    function displayFullName() {
        alert ("Welcome " + fullName + "!");
    }
    displayFullName();
}
welcome();
