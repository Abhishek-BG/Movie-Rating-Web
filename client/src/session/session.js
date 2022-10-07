var Session = (function() {
    var role = false;
    var mid = null;
    var getmid = function() {
      return mid;   
    };
  
    var getrole = function() {
      return role;  
    };
  
    var setrole = function(userrole) {
      role = userrole;     
    };
    var setmid = function(m_id) {
      mid = m_id;     
    };

  
    return {
      getrole: getrole,
      setrole: setrole,
      getmid: getmid,
      setmid: setmid
    }
  
  })();
  
  export default Session;