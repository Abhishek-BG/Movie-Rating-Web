
import Header from '../../Component/header'
export default function AddMovie(){
    return (
       <>
        <Header/>
            <div class="container">
                <div class="row justify-content-lg-center">
                    <div class="col-lg-auto ">
                        <h1 class="">Add Movies</h1>
                        <div class="contact-form text-center">
                            <input type="text"
                                name="name"
                                placeholder="Movie Name"
                               // onChange={(e) => setemail(e.target.value)}
                                required />
                            <input type="password"
                                class="password"
                                name="password"
                                placeholder="Password"
                             //   onChange={(e) => setpassword(e.target.value)}
                                required />
                            <div class="alert-danger" >  {} </div>
                            <input type="button" class="text-centre" name="submit" value="Login "  />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
      

}