import { useState } from "react";

function Form() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        notifications: false
    });

    const [errors, setErrors] = useState([]);

    const validate = () => {
        let errors = [];
        if(user.name.length === 0){
            errors.push("Name can't be blank");
        }

        if (user.email.length === 0){
            errors.push("Email can't be blank");
        }

        let [fp, domain] = user.email.split("@")
        console.log(fp, domain);
        if (!fp || !domain || !domain.includes(".com")){
            errors.push("Invalid email")
        }

        if (user.phoneNumber){
            let [areaCode, middle, last] = user.phoneNumber.split("-")
            console.log(areaCode, middle, last);
            if ((!areaCode || !middle || !last) || (areaCode.length !== 3 || middle.length !== 3 || last.length !== 4)){
                errors.push("Invalid phoneNumber")
            }
        }

        if (user.bio.length > 280){
            errors.push("Invalid bio")
        }

        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate());
    }

    return (
        <>
            {errors.map(error => (
                <div>{error}</div>
            ))}

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name"  value={user.name} onChange={(event) => setUser({...user, name: event.currentTarget.value})}/>
                <br></br>
                <br></br>
                <input type="text" placeholder="Email" value={user.email} onChange={(event) => setUser({...user, email: event.currentTarget.value})} />
                <br></br>
                <br />
                <input type="text" placeholder="Phone Number" value={user.phoneNumber} onChange={(event) => setUser({...user, phoneNumber: event.currentTarget.value})} />
                <br></br>
                <br></br>
                <label for="phone-type"> PhoneType: </label>
                <select name="phone-type" id="phone-type" onChange={(event) => setUser({...user, phoneType: event.currentTarget.value})} >
                    <option value="---" selected={user.phoneType === "" ? "selected": ""}>---</option>
                    <option value="home" selected={user.phoneType === "home" ? "selected": ""}>Home</option>
                    <option value="work" selected={user.phoneType === "work" ? "selected": ""}>Work</option>
                    <option value="mobile" selected={user.phoneType === "mobile" ? "selected": ""}>Mobile</option>
                </select>
                <div>Staff :  

                    <label>Instructor
                        <input name="staff" type="radio" value="Instructor" 
                        checked={user.staff === "Instructor" ? "checked": ""} onChange={(event) => setUser({...user, staff: event.currentTarget.value})}></input>
                    </label>
                    <label>Student
                        <input name="staff" type="radio" value="Student" checked={user.staff === "Student" ? "checked": ""} onChange={(event) => setUser({...user, staff: event.currentTarget.value})}></input>
                    </label>

                </div>
                <br />
                <textarea placeholder="Bio" rows="4" cols="15" value={user.bio} 
                onChange={(event) => setUser({...user, bio: event.currentTarget.value})}/>
                <br />
                <label>Sign up for email notifications!
                    <input type="checkbox" name="email-sign-up-notifications"  checked={user.notifications === true ? "checked": ""} onChange={(event) => {
                        let val = event.currentTarget.checked ? true: false;
                        setUser({...user, notifications: val})}}/>
                </label>
                <br />
                <button>Sign up!</button>
            </form>
        </>
    )
}

export default Form;