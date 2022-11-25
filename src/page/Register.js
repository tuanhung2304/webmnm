function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const retypepassword = document.getElementById("retypepassword").value;
        if(password != retypepassword){
            alert("Password and retype password do not match");
            return;
        }
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const data = {
            email: email,
            name : name,
            password: password,
            address: address,

        }
        console.log(data);
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
            .then(user => {
                if(user.success) {
                    alert('Please check your email to confirm register');
                    window.location.href = "/"
                }
            })
    }
    return (
        <section className="login_box_area section_gap">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <div className="login_form_inner">
                            <h3>Register </h3>
                            <form className="row login_form" id="contactForm" onSubmit={handleSubmit} >
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Name'" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="email" name="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="address" name="address" placeholder="Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Address'" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="password" className="form-control" id="retypepassword" name="retypepassword" placeholder="Retype Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Retype Password'" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <button type="submit" value="submit" className="primary-btn" >Register</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register;