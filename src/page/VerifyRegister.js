import { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import $ from 'jquery'
function VerifyRegister() {
    const { token } = useParams();
    const [response, setResponse] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/verifyRegister/${token}`)
            .then(res => res.json())
            .then(response => {
                setResponse(response);
            })
    }, [])
    if (response.success != undefined) {
        return (
            <>
            <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="login_form_inner">
                    <h3></h3>
                    <h3>Your account is verify.</h3>
                    <div className='loan'>
                    <Link to={'/home'}><div className="checkout_btn_inner d-flex align-items-center">
                                    <a className="primary-btn" >Go to home page</a>
                                </div></Link>
                                <Link to={'/login'}><div className="checkout_btn_inner d-flex align-items-center">
                                    <a className="primary-btn" >Go to login page</a>
                                </div></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
            
            </>
            
        )
    } else {
        console.log(response)
        return (
            
            <>
             <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="login_form_inner" >
                            <h3></h3>
                            <div className="checkout_btn_inner d-flex align-items-center">
                                    <Link className="primary-btn" to={'/'}>Your link verify isn't true or expired. Please try again.</Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
           
            </>
        )
    }
}
export default VerifyRegister;