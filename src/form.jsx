
function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name"  />
                <input type="text" placeholder="Email"  />
                <br />
                <input type="text" placeholder="Phone Number"  />
                <select name="form-type">
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
                <p>Staff:</p>
                <label>Instructor
                    <input name="staff" type="radio" value="Instructor"></input>
                </label>
                <label>Student
                    <input name="staff" type="radio" value="Student"></input>
                </label>
                <br />
                <textarea placeholder="Bio" rows="4" cols="15" />
                <br />
                <label>Sign up for email notifications!
                    <input type="checkbox" name="email-sign-up-notifications"  />
                </label>
                <br />
                <button>Sign up!</button>
            </form>
        </>
    )
}

export default Form;