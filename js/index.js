let usersList = [];
if (localStorage.getItem("users")) {
  usersList = JSON.parse(localStorage.getItem("users"));
}
let currentuser;
if (localStorage.getItem("currentuser")) {
  currentuser = JSON.parse(localStorage.getItem("currentuser"));
}

if (window.location.href == `http://127.0.0.1:5500/home.html`) {
  let cartona = `<h1>Welcome to the meeting </h1>
  <h2>${currentuser} </h2>
    <p >Remember ... always pay respect to the Godfather</p>
    <button type="button" class="btn  leave " >Leave meeting</button>
    `;

  document.getElementById("welcomeGang").innerHTML = cartona;
  let logout = document.querySelector(".leave");
  logout.addEventListener("click", function () {
    window.location.assign(`http://127.0.0.1:5500/`);
  });
} else if (window.location.href == `http://127.0.0.1:5500/`) {
  /// to hide & unhide login dialog
  
  let wrapper = document.querySelector(".wrapper");
  let loginLink = document.querySelector(".login-link");
  let loginLink2 = document.querySelector(".login-link2");
  let registerLink = document.querySelector(".register-link");
  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
    clearform();
  });
  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });

  loginLink2.addEventListener("click", function () {
    adduser();
    //  clearform()
  });

  //array to add userslist
  let userName = document.querySelector("#userName");
  let Email = document.querySelector("#userEmail");
  let password = document.querySelector("#userPassword");

  function adduser() {
    let user = {
      name: userName.value,
      email: Email.value,
      password: password.value,
    };
    usersList.push(user);
    localStorage.setItem("users", JSON.stringify(usersList));
    wrapper.classList.remove("active");
    // clearform();
  }
  function clearform() {
    userName.value = "";
    Email.value = "";
    password.value = "";
  }

  // log in check in
  let inputEmail = document.querySelector("#inputEmail");
  let inputpassword = document.querySelector("#inputpassword");
  let joinIn = document.getElementById("joinin");
  joinIn.addEventListener("click", function () {
    openHomePage();
    welcome(usersList[i].name);
  });

  function openHomePage() {
    if (checkEmail() == true) {
      window.location.assign(`http://127.0.0.1:5500/home.html`);
    }
  }

  /* function checkEmail() {
  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].email == inputEmail.value) {
      return true;
    }
  }
  return false;
} */
  /* function checkpassword() {
  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].password == inputpassword.value) {
      return true;
    }
  }
  return false;
} */

  function checkEmail() {
    for (let i = 0; i < usersList.length; i++) {
      if (usersList[i].email == inputEmail.value) {
        if (checkpassword(usersList[i])) {
          localStorage.setItem(
            "currentuser",
            JSON.stringify(usersList[i].name)
          );
          return true;
        } else {
          return false;
        }
      }
    }
    return false;
  }

  function checkpassword(ay7aga) {
    return ay7aga.password == inputpassword.value;
  }
}
