document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const ageInput = document.getElementById("inputAge");
    const phoneInput = document.getElementById("inputPhone");
    const moreInfoInput = document.getElementById("inputMoreInfo");
    const moreInfoCounter = document.createElement("small");
    moreInfoCounter.classList.add("form-text", "text-muted");
    moreInfoInput.parentElement.appendChild(moreInfoCounter);

    // Set the initial counter for "More Info"
    updateMoreInfoCounter();

    // Age validation
    function validateAge() {
        const ageValue = Number(ageInput.value);
        if (isNaN(ageValue) || ageValue < 21 || ageValue > 99) {
            alert("Age must be between 21 and 99.");
            return false;
        }
        return true;
    }

    // Phone number validation
    function validatePhone() {
        const phoneValue = phoneInput.value;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/; // Matches 111-222-3333 format
        if (!phonePattern.test(phoneValue)) {
            alert("Please enter a valid phone number in the format 111-222-3333.");
            return false;
        }
        return true;
    }

    // Update the character counter for "More Info"
    function updateMoreInfoCounter() {
        const maxChars = 30;
        const remainingChars = maxChars - moreInfoInput.value.length;
        moreInfoCounter.innerText = `${remainingChars} characters remaining.`;
    }

    // Form submission validation
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission to allow validation

        const isAgeValid = validateAge();
        const isPhoneValid = validatePhone();

        const maritalStatus = document.querySelector('input[name="maritalStatus"]:checked').value;

        // Get selected favorite colors
        const selectedColors = [];
        document.querySelectorAll('input[name="colors"]:checked').forEach((color) => {
            selectedColors.push(color.value);
        });

        if (isAgeValid && isPhoneValid) {
            // Log form data in the console
            const formData = {
                firstName: document.getElementById("inputFirstName").value,
                lastName: document.getElementById("inputLastName").value,
                address1: document.getElementById("inputAddress1").value,
                address2: document.getElementById("inputAddress2").value,
                city: document.getElementById("inputCity").value,
                state: document.getElementById("inputState").value,
                age: ageInput.value,
                phone: phoneInput.value,
                email: document.getElementById("inputEmail").value,
                password: document.getElementById("inputPassword").value,
                maritalStatus: maritalStatus,
                favoriteColors: selectedColors,
                moreInfo: moreInfoInput.value,
            };

            console.log(formData);
            alert("Form submitted successfully!");
            form.reset(); // Optionally reset the form
            updateMoreInfoCounter(); // Reset counter
        }
    });

    // Update counter on input in "More Info"
    moreInfoInput.addEventListener("input", updateMoreInfoCounter);
});
