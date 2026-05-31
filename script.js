function openChat() {

    window.open(
        "https://wa.me/233546148765",
        "_blank"
    );

}
function submitPrescription() {

    const file =
        document.getElementById("prescriptionFile").files[0];

    if (!file) {
        alert("Please select a prescription file.");
        return;
    }

    window.open(
        "https://wa.me/233546148765?text=Hello%20Frimps%20Pharmacy,%20I%20would%20like%20to%20submit%20a%20prescription.",
        "_blank"
    );
}
function submitPrescription() {

    const message = encodeURIComponent(
        "Hello Frimps Pharmacy, I would like to submit a prescription."
    );

    window.open(
        `https://wa.me/233546148765?text=${message}`,
        "_blank"
    );
}

function openChat() {

    window.open(
        "https://wa.me/233546148765",
        "_blank"
    );
}