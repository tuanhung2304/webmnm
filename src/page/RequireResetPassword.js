import $ from 'jquery';
function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const data = {
            email: email,
        }
        console.log(data)
        fetch('http://localhost:5000/requireResetPassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(response => {
                alert("Please check your email to confirm reset password");
                //window.location.href = "/"
            })
    }
    return (
        <>
            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login_form_inner">
                                <h3>Reset Password</h3>
                                <form className="row login_form" id="contactForm" onSubmit={handleSubmit}>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="email" name="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" />
                                    </div>
                                    
                                   
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="primary-btn">Reset Password</button>

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