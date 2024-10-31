function welcome(firstName, lastName) {
    firstName = 'Mugisha';
    lastName = 'Gasheja';
    
    let fullName = `${firstName} ${lastName}`;
    function displayFullName() {
        alert ("Welcome " + fullName + "!");
    }
    displayFullName();
}
welcome();
