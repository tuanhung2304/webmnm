import $ from "jquery";
function ResetPassword() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const retypepassword = document.getElementById("retypepassword").value;
        if (password != retypepassword) {
            alert("Password and retype password do not match");
            return;
        }
        const data = {
            email: email,
            password: password,
        }

        $.ajax({
            url: "http://localhost:5000/resetPassword",
            method: "POST",
            credentials: "include",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": true
            },
            data: JSON.stringify(data),
            async: true,
            success: function (data) {
                alert("Reset Password Success");
                window.location.href = "/login";
            },
            error: (data) => {
                alert("Reset Password Error");
                console.log(data.responseText);
            }
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
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control" id="retypepassword" name="retypepassword" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'" />
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
export default ResetPassword;