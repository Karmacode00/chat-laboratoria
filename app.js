function logInOrRegister() {
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
    .then(()=>{
      console.log("Usuario registrado");
    })
    .catch((error)=>{
      console.log("Error de firebase > "+error.code);
      console.log("Error de firebase, mensaje > "+error.message);
    });
}

function login() {
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
    .then(()=>{
      console.log("Usuario con login exitoso")
    })
    .catch(()=>{
      console.log("Error de firebase > "+error.code);
      console.log("Error de firebase, mensaje > "+error.mensaje);
    });
}