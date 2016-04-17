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

function prepareForProfile() {
    
    if (!user.isLoggedIn())
        return;
    
    var node = document.getElementById('masterView');
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
    
    user.getPosts();
    
}

function updateNewsfeed(post) {

   
    var enclosing = document.createElement('div');
        
        var description = document.createElement('p');
        description.innerHTML = post.description;
        
        var link = document.createElement('p');
        link.innerHTML = post.link;  
        
        var cardTitle = document.createElement('h4');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = post.title;
        
        var cardBlock = document.createElement('div');
        cardBlock.className = 'card-block';
        cardBlock.appendChild(cardTitle);
        cardBlock.appendChild(description);
        cardBlock.appendChild(link);

        
        var card = document.createElement('div');
        card.className = 'card';
        card.appendChild(cardBlock);
        
        enclosing.appendChild(card);
    
    var detailView = document.getElementById('masterView');
    detailView.appendChild(enclosing);
    
}