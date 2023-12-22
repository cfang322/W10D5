import { useState } from 'react';

// function Form() {
//     const [firstName, setFirstName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [phoneType, setPhoneType] = useState("Home");
//     const [staff, setStaff] = useState("Instructor");
//     const [bio, setBio] = useState("");
//     const signUp = false;
// 
//     return (
//         <div>Form</div>
//     )
// }

function Form() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "Home",
        staff: "",
        bio: "",
        emailNotifications: false
    });

    const [errorMessages, setErrorMessages] = useState([]);
    const validate = () => {
        let errors = [];

        if (form.name.length === 0) {
            errors.push("name can't be blank")
        };
        if (form.email.length === 0) {
            errors.push("email can't be blank")
        } else if (!form.email.includes("@")) {
            errors.push("email should have '@' symbol")
        };
        if (form.phoneNumber && form.phoneType === undefined) {
            errors.push("phone type must be selected")
        };
        if (form.bio.length > 280) {
            errors.push("bio should have a character limit of 280")
        };

        return errors;
    };

    const handleChange = (field) => {
        return(e) => {
            switch(field){
                case "name":
                    setForm.name(e.target.value)
                    break;
                case "email":
                    setForm.email(e.target.value)
                break;
                case "phoneNumber":
                    setForm.phoneNumber(e.target.value)
                break;
                case "phoneType":
                    setForm.phoneType(e.target.value)
                break;
                case "staff":
                    setForm.staff(e.target.value)
                break;
                case "bio":
                    setForm.bio(e.target.value)
                break;
                case "emailNotification":
                    setForm.emailNotifications(e.target.value)
                break; 

                default:
                    break;
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = validate(); 

        if (errors.length) {
            setErrorMessages(errors);
        } else {
            let user = {
                form.name,
                form.email,
                form.phoneNumber,
                form.phoneType,
                form.staff,
                form.bio,
                form.emailNotification
            }
        }
    }; 

    return (

    );
};

export default Form;



