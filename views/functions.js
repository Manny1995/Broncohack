function submitPressed() {            
var newUser = document.getElementById('loginOrSignUp').checked;
    if (newUser == true) {
        auth.signup(document.getElementById('signup_username').value, document.getElementById('signup_password').value);
    }
    else {
        auth.login(document.getElementById('signup_username').value, document.getElementById('signup_password').value)
    }
}  


function onNewPost() {
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var link = document.getElementById('link').value;

    user.newPost(title, description, link);

}
