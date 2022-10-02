import logo from './logo.png'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Session from '../session/session';


function Header(){
	const nav = useNavigate();
function logout(){
	Session.setemail(false);
	nav('/');
}
	if(Session.getemail()==false)
    {
		return(
			<>
			<div id="site-content">
				<div class="site-header">
					<div class="container">
						<a  id="branding">
							<img src={logo} alt="" class="logo"/>
							<div class="logo-copy">
								<h1 class="site-title">Give My Review.com</h1 >
								<small class="site-description">Find the accurate review</small>
							</div>
							</a>
						<div class="main-navigation">
							<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
							<ul class="menu">
								<li class="menu-item ">  <Link to="/"> Home</Link></li>
								<li class="menu-item"><Link to="/Movies">Movies</Link></li>
								<li class="menu-item"><Link to="/Admin">Watch List</Link></li>
								<li class="menu-item"><Link to="/Adminlogin">Admin Login</Link></li>
							</ul> 
	
							<form  class="search-form">
								<input type="text" placeholder="Search..."/>
								<button><i class="fa fa-search"></i></button>
							</form>
	
						<div class="mobile-navigation"></div>
					</div>
				</div>
			</div>
			</div>
			<Outlet/>
			</>
		)
    }else{
		return(
			<>
			<div id="site-content">
				<div class="site-header">
					<div class="container">
						<a  id="branding">
							<img src={logo} alt="" class="logo"/>
							<div class="logo-copy">
								<h1 class="site-title">Give My Review.com</h1 >
								<small class="site-description">Find the accurate review</small>
							</div>
							</a>
						<div class="main-navigation">
							<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
							<ul class="menu">
								<li class="menu-item ">  <Link to="/"> Home</Link></li>
								<li class="menu-item"><Link to="/AddMovie">Add Movies</Link></li>
								<li class="menu-item"><Link to="/Admin">Reviews</Link></li>
								<li class="menu-item"><Link to="/Admin">Users</Link></li>
								<li class="menu-item">
								<input type="button"
								 class="text-centre mybtn" 
								 name="submit"
								  value="Logout" 
								onClick={() => logout()} />
									
								</li>
							</ul> 
	
							<form  class="search-form">
								<input type="text" placeholder="Search..."/>
								<button><i class="fa fa-search"></i></button>
							</form>
	
						<div class="mobile-navigation"></div>
					</div>
				</div>
			</div>
			</div>
			<Outlet/>
			</>
		)
    }

}


export default Header;