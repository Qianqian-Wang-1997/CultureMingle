import "./login.css";
import { useState } from "react";

function Login2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassWord] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    // state message to store the success or error message.
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //console.log(e.target);
            let res = await fetch("http://localhost:8080/register", {
                method: "POST",
                body: JSON.stringify({
                    username: name,
                    email: email,
                    password: password,
                    birthday: birthday,
                    gender: gender
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setEmail("");
                setMobileNumber("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="Login2">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassWord(e.target.value)}
                />
                <input
                    type="text"
                    value={birthday}
                    placeholder="Your Birthday"
                    onChange={(e) => setBirthday(e.target.value)}
                />
                <input
                    type="text"
                    value={gender}
                    placeholder="Your Gender"
                    onChange={(e) => setGender(e.target.value)}
                />

                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    );
}

export default Login2;
