document.querySelector("#forms").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;

    console.log("Username/Email:", username);
    console.log("Password:", password);
});
