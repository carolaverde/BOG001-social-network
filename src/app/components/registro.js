<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ce7fc0c236c4f2a4fddca4013b90b432d0c3d895

export function register() {
    const $register = document.createElement("div");
    $register.classList.add("contenedor-form");
    $register.id = ("formRegistro");
    $register.innerHTML = `

    
            <div class="formulario">
                <h2>Registro</h2>
                <form method="POST" action="#" class="formulario">
                    <label for="userRegistration">Usuario * </label>
                    <input type="text" id="userRegistration" placeholder="Usuario" required>
                    <label for="email">Correo Electrónico *</label>
                    <input type="email" id="email" placeholder="Email" required>
                    <label for="nameRegistration">Nombre *</label>
                    <input type="name" id="nameRegistration" placeholder="Nombre" required>
                    <label for="lastnameRegistratio">Apellidos *</label>
                    <input type="lastName" id="lastnameRegistratio" placeholder="Apellidos" required>
                    <label for="birthDate">Fecha de nacimiento *</label>
                    <input type="date" id="birthDate" placeholder="Fecha de nacimiento" required>
                    <li>Acepto términos y condiciones.</li>
                    <br>
                    <input type="submit" id="btonRegistro" value="Aceptar">
                </form>
            </div>
    `;
    console.log("paciencia");
    return $register;


} 
<<<<<<< HEAD
=======
//esta pagina es la de registro cuarta vista


>>>>>>> fa0478ef216baa6f7a4299c359e8cdde230bef81
=======
>>>>>>> ce7fc0c236c4f2a4fddca4013b90b432d0c3d895
