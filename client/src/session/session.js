var Session = (function() {
    var email = false;
  
    var getemail = function() {
      return email;    // Or pull this from cookie/localStorage
    };
  
    var setemail = function(name) {
      email = name;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getemail: getemail,
      setemail: setemail
    }
  
  })();
  
  export default Session;