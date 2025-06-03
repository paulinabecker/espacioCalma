document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("cta_btn");
    const bookingSection = document.getElementById("booking");
    const form = document.getElementById("form_booking");
    const message = document.getElementById("ok_msg");

    //SOFT SCROLL AT FORM
    ctaButton.addEventListener("click", () => {
        bookingSection.scrollIntoView({ behavior: "smooth"});
    });

    //VALIDATE FORM AND OK MSG
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const classmateName = document.getElementById("classmate_name").value.trim();
        const typeClass = document.getElementById("type_class").value;

        if (classmateName && typeClass) {
            Swal.fire({
    title: `"Reserva exitosa"`, 
    text: `Has reservado la clase ${typeClass}`,
    icon: "success",
    confirmButtonText: "Aceptar",
    customClass: {
        title: "title_alert",
        htmlContainer: "txt_alert",
    }
});
            form.reset();
        } else{
            alert("Por favor, completa todos los datos para realizar tu reserva")
        }
    });
});