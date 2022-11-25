import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
            <div>
                <div> Your account is verify. </div>
                <a href='/'><button>Go to home page</button></a>
                <a href='/'><button>Go to login page</button></a>
            </div>
        )
    } else {
        console.log(response)
        return (
            <div>Your link verify isn't true or expired. Please try again.</div>
        )
    }
}
export default VerifyRegister;