const wrapper = document.querySelector(".wrapper"),
        signupHeader = document.querySelector(".signup header"),
        loginHeader = document.querySelector(".login header");
      loginHeader.addEventListener("click", () => {
        wrapper.classList.add("active");
      });
      signupHeader.addEventListener("click", () => {
        wrapper.classList.remove("active");
      });

      function myfunc(event){
        event.preventDefault();
        count = 0;
            let username = document.getElementById('username').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value; 

            localStorage.setItem(`ls_username${count}`, username);
            localStorage.setItem(`ls_email${count}`, email);
            localStorage.setItem(`ls_password${count}`, password);
            count++;
      }