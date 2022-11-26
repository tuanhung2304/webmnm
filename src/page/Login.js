import {dangnhap} from '../js/main.js'
function Login(){
    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const data = {
            email : email,
            password: password
        }
        fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        }).then(response => response.json())
        .then(user =>{
            if( user.message == "Login success"){
                document.cookie = `tokenidUser=${user.data.user._id}`
                document.cookie = `tokenuser=${user.data.token}`;
                dangnhap();
                var home = document.getElementById('home')
                window.location.href="http://localhost:3000/home";
            }
        })
    }
    return(
        <>
            <section className="login_box_area section_gap">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="login_form_inner">
                    <h3>Login</h3>
                    <form className="row login_form"  id="contactForm" onSubmit={handleSubmit}>
                        <div className="col-md-12 form-group">
                            <input type="text" className="form-control" id="username" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'"/>
                        </div>
                        <div className="col-md-12 form-group">
                            <input type="password" className="form-control" id="password" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"/>
                        </div>
                        <div className="col-md-12 form-group">
                            <div className="creat_account">
                                <input type="checkbox" id="f-option2" name="selector"/>
                                <label for="f-option2">Keep me logged in</label>
                            </div>
                        </div>
                        <div className="col-md-12 form-group">
                            <button type="submit" value="submit" className="primary-btn">Log In</button>
                            <a href="/requireResetPassword">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    )
}
export default Login;