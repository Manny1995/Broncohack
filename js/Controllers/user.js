var user = {

  _uid: null,
  _ref: null,

  isLoggedIn: function(){
    return  (!!user._uid && !!user._ref)
  },

  newPost: function(title, description, link){

    ref = user._ref
    
    if (!user.isLoggedIn())
      throw "UserNotLoggedInException"
    if (!title)
      throw "NoTitleException"
    else if (!description)
      throw "NoDescriptionException"

    var postsRef = ref.child("posts");
    // we can also chain the two calls together
    postsRef.push().set({
      title: title,
      description: description,
      link: link
    });
  },

  init(uid){
    console.log('Logging in user with uid: ' + uid)
    user._uid = uid
    user._ref =  new Firebase('https://bhacks-2016.firebaseio.com/users/' + uid)
  },
    
 getPosts: function() {
    var ref = user._ref;
     var postsRef = ref.child("posts");
     
     postsRef.on("value", function(snapshot) {
        console.log(snapshot.val());
     }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
     });
     
 }
    
}
