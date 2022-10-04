

import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function UserLogin() {
  return (
    <>
      <div class="contact-form text-center">
        <input type="email"
          class="email"
          name="email"
          placeholder="Email"
          //onChange={(e) => setemail(e.target.value)}
          required />
        <input type="password"
          class="password"
          name="password"
          placeholder="Password"
          //  onChange={(e) => setpassword(e.target.value)}
          required />
        <div class="alert-danger" >  </div>
        <input type="button" class="text-centre" name="submit" value="Login "
        //onClick={() => login()}
        />
        <div class="text-centre">
          <h3>or<br></br>
            <a>	<span class="menu-item"><Link to="/SignUp">Sign Up</Link></span></a></h3>
        </div>
      </div>
      <Outlet />
    </>
  )
}