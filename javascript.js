function putEmail() {
    email = document.getElementById("email");
    text = "ude.icu@ragrevmk".split('').reverse().join('');
    email.innerHTML = text;
}

function rollover() {
    picture = document.getElementById("about-pic");
    picture.setAttribute("src", "selfoverlay.jpg");
}

function rolloverexit() {
    picture = document.getElementById("about-pic");
    picture.setAttribute("src", "self.jpg");
}