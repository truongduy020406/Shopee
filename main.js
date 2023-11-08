var btn_login = document.getElementById("btn_login");
if (btn_login) {

    btn_login.addEventListener("click", function () {
      var modal = document.querySelector(".modal");

      if (modal) {
          console.log(modal);
          modal.setAttribute("class","modal_show");

          var login = modal.querySelector(".auth-form-login")
          login.setAttribute("class","auth-form-login-show");
          // Do something with the modal element here
      } else {
          console.log("Không tìm thấy phần tử có class '.modal'");
      }
  });
}
  





