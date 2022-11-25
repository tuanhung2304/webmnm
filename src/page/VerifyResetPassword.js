import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import $ from 'jquery'
function VerifyRegister() {
    const { token } = useParams();
    const [response, setResponse] = useState({});

    useEffect(() => {
        $.ajax({
            url: `http://localhost:5000/verifyResetPassword/${token}`,
            method: "GET",
            credentials: "include",
            crossDomain: true,
            xhrFields: { withCredentials: true },
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": true
            },
            async: true,
            success: function (data) {
                setResponse(data);
            },
            error: (data) => {
                alert("Link Error");
                console.log(data.responseText);
            }
        })
    }, [])
    if (response.success != undefined && response.success) {
        window.location.href = "/resetPassword"
    } else {
        console.log(response)
        return (
            <div>Your link verify isn't true or expired. Please try again.</div>
        )
    }
}
export default VerifyRegister;