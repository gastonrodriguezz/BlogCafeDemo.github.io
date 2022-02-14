const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// El evento de Submit
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validar el formulario

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", true);
    return; /* Corta la la ejecución del código */
  }
  // Crear la alerta de Enviar correctamente
  mostrarAlerta("Mensaje enviado correctamente");
});

function leerTexto(e) {
  // console.log(e.target.value);
  datos[e.target.id] = e.target.value;
  // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }
  formulario.appendChild(alerta);
  setTimeout(() => {
    error.remove();
  }, 5000);
}
