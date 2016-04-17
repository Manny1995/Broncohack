var auth = {
  login: function(username, password){
    if (!username)
      throw "NullUsernameException"
    else if (!password)
      throw "NullPasswordException"

      var ref = new Firebase("https://bhacks-2016.firebaseio.com");

      ref.authWithPassword({
        email    : username,
        password : password
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          user.init(authData.uid)
          console.log("Authenticated successfully with payload:", authData);
        }
      });
  },

  signup: function(username, password){
    if (!username)
      throw "NullUsernameException"
    else if (!password)
      throw "NullPasswordException"

    var ref = new Firebase("https://bhacks-2016.firebaseio.com/");

    //firebase user creation
    ref.createUser({
      email    : username,
      password : password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        ref.child("users").child(userData.uid).set({
          affiliation: "Republican",
          posts: []
        });
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });


  }
}
