import { useState } from "react";
import "./form.css";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    phoneType: "Home",
    staff: "Instructor",
    bio: "",
    emailNotifications: false,
  });

  const [errorMessages, seterrorMessages] = useState([]);

  const validate = () => {
    let errors = [];

    if (form.name.length === 0) {
      errors.push("name can't be blank");
    }

    if (form.email.length === 0) {
      errors.push("email can't be blank");
    } else if (!form.email.includes("@")) {
      errors.push("email should have @ symbol");
    }

    if (form.phoneNumber && form.phoneType === undefined) {
      errors.push("phone type must be selected");
    }

    if (form.bio.length > 280) {
      errors.push("bio should have a character limit of 280 characters");
    }

    return errors;
  };

  // const handleChange = (field) => {

  //   return (e) => {
  //     switch (field) {
  //       case "name":
  //         setForm.name(e.target.value);
  //         break;
  //       case "email":
  //         setForm.email(e.target.value);
  //         break;
  //       case "phoneNumber":
  //         setForm.phoneNumber(e.target.value);
  //         break;
  //       case "phoneType":
  //         setForm.phoneType(e.target.value);
  //         break;
  //       case "staff":
  //         setForm.staff(e.target.value);
  //         break;
  //       case "bio":
  //         setForm.bio(e.target.value);
  //         break;
  //       case "emailNotifications":
  //         setForm.emailNotifications(e.target.value);
  //         break;
  //       default:
  //         break;
  //     }
  //   };
  // };

  const handleChange = (field) => (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    let errors = validate();

    if (errors.length) {
      seterrorMessages(errors);
    } else {
      let user = {
        ...form,
      };

      console.log("form submitted", user);

      seterrorMessages([]);
    }
  };

  const showErrors = () => {
    if (!errorMessages.length) {
      return null;
    } else {
      return (
        <ul>
          {errorMessages.map((errors, idx) => {
            return <li key={idx}>{errors}</li>;
          })}
        </ul>
      );
    }
  };

  return (
    <>
      {showErrors()}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={form.name}
            onChange={handleChange("name")}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={form.email}
            onChange={handleChange("email")}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            value={form.phoneNumber}
            onChange={handleChange("phoneNumber")}
          />
        </div>

        <div>
          <label htmlFor="phoneType">Phone Type:</label>
          <select
            id="phoneType"
            name="phoneType"
            value={form.phoneType}
            onChange={handleChange("phoneType")}
          >
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>

        <div>
          <label htmlFor="bio">Bio:</label>
          <input
            type="text"
            value={form.bio}
            placeholder="bio"
            onChange={handleChange("bio")}
          />
        </div>

        <div>
          <label htmlFor="staff">
            Instructor:
            <input
              type="radio"
              name="staff"
              value="Instructor"
              checked={form.staff === "Instructor"}
              onChange={handleChange("staff")}
            />
          </label>

          <label htmlFor="staff">
            Student:
            <input
              type="radio"
              name="staff"
              value="Student"
              checked={form.staff === "Student"}
              onChange={handleChange("staff")}
            />
          </label>
        </div>

        <div>
          <label htmlFor="emailNotification">
            Sign up for notification:
            <input
              type="checkbox"
              name="emailNotification"
              checked={form.emailNotifications}
              onChange={handleChange("emailNotifications")}
            />
          </label>
        </div>

        <div>
          <input type="submit" value="Sign Up" />
        </div>
      </form>
    </>
  );
}

export default Form;