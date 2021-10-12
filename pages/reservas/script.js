function save() {
  const inputDate = document.querySelector("#date").value;
  const inputTime = document.querySelector("#time").value;
  const inputName = document.querySelector("#name").value;
  const inputEmail = document.querySelector("#email").value;
  const regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
  const emailVerify = regex.test(inputEmail);
  let verify = true;

  let formatedDate = inputDate.split("-").reverse().join("/");

  if (!formatedDate) {
    const warningDate = document.querySelector(".date-warning");
    warningDate.innerHTML = "Data digitada Incorretamente!";
    verify = false;
  }

  if (!inputTime) {
    const warningTime = document.querySelector(".time-warning");
    warningTime.innerHTML = "Hora digitada Incorretamente!";
    verify = false;
  }

  if (!inputName) {
    const warningName = document.querySelector(".name-warning");
    warningName.innerHTML = "Nome digitada Incorretamente!";
    verify = false;
  }

  if (!emailVerify) {
    const warningEmail = document.querySelector(".email-warning");
    warningEmail.innerHTML = "Email digitada Incorretamente!";
    verify = false;
  }

  if (formatedDate && inputTime && inputName && emailVerify) {
    verify = true;
  }

  if (verify) {
    const modal = document.querySelector(".modal");
    const warningRemove = document.querySelectorAll(".warning");
    for (var i = 0; i < warningRemove.length; i++) {
      warningRemove[i].innerHTML = "";
    }

    modal.style.visibility = "visible";
  } else {
    return;
  }
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.visibility = "hidden";
}

function reset(){
  alert("Seu cadastro foi cancelado!");
}