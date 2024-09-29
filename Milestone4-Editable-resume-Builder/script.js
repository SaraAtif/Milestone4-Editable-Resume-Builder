var form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get references to form elements using their IDs
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('Education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeOutput = "\n        <h2> Editable Resume</h2>\n        <h3>Personal Information:</h3>\n        <p><strong>Name:</strong> <span contenteditable=\"true\"> ".concat(name_1, "</span></p>\n        <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, " </span></p>\n        <p><strong>Phone Number:</strong><span contenteditable=\"true\"> ").concat(phone, " </span></p>\n\n        <h3>Education:</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Work Experience:</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills:</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('display-resume');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
