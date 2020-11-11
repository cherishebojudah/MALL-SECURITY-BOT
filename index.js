function checkEligibilty() {
    let person = prompt("Please enter your name:");
    visitors = 0;
    admitted = 0;
    dismissed = 0;

    if (person === '') {
        alert("You have to input your name");
    } else {
        let facemask = prompt("Hello " + person + " Do you have a face mask?");

        if (facemask==='yes') {
            let checkAge = prompt("Are you 12 or above?");

            if (checkAge === 'yes') {
                 alert("Hello " + person + "!" + " Welcome to Beautify Shopping Mall, Have a great shopping experience!");
                 visitors++;
                 admitted++;
            } else {
                alert("Sorry " + person + " You're too young to be allowed in the mall!");
                visitors++;
                dismissed++;
            }
        } 
        else {
            alert("Sorry, " + person + " You need to have a mask to gain entrance into the mall");
            visitors++;
            dismissed++;
        }
    }

    document.getElementById('visitors').innerHTML = `Total Visits: ${visitors}`;
    document.getElementById('admitted').innerHTML = `Total Admitted: ${admitted}`;
    document.getElementById('dismissed').innerHTML = `Total Dismissed: ${dismissed}`;
}