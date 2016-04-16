var signup = {
  init: function(username, password){

    if (!username)
      throw "NullUsernameException"
    else if (!password)
      throw "NullPasswordException"

    var ref = new Firebase("https://bhacks-2016.firebaseio.com/users");

    //firebase user creation
    ref.createUser({
      email    : username,
      password : password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  }
}
