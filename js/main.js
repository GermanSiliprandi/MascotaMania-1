//Funciones de Formulario

var form = document.getElementById("my-form");

async function handleSubmit(event) {
	event.preventDefault();
	const inputNombre = document.getElementById("inputNombre").value;
	const inputEmail = document.getElementById("inputEmail").value;
	const mensaje = document.getElementById("message").value;

	var status = document.getElementById("my-form-status");
	if (inputEmail != "" && inputEmail != "" && mensaje != "") {
		var data = new FormData(event.target);

		fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					status.innerHTML = "¡Gracias por su mensaje!";
					form.reset();
				} else {
					response.json().then((data) => {
						if (Object.hasOwn(data, "errors")) {
							status.innerHTML = data["errors"]
								.map((error) => error["message"])
								.join(", ");
						} else {
							status.innerHTML =
								"Oops! There was a problem submitting your form";
						}
					});
				}
			})
			.catch((error) => {
				status.innerHTML =
					"Oops! There was a problem submitting your form";
			});
	} else {
		status.innerHTML =
			"Los campos Nombre, Email y mensaje son obligatorios";
	}
}
form.addEventListener("submit", handleSubmit);
