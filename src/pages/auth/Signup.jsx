import Form from "../../components/form";
import Text from "../../components/Text";
import Button from "../../components/buttons";
import { Link } from "react-router-dom";
function Signup() {
    return (
        <>
            <div className="p-5 sm:mx-[30vw]">
                <Text message='Create your PopX account' />

                <Form message='Full Name' type="text" placeholder="Name" required />
                <Form message='Phone Number' type="number" placeholder="Number" required />
                <Form message='Email Address' type="email" placeholder="email address" required />
                <Form message='Password' type="password" placeholder="password" required />
                <Form message='Company Name' type="text" placeholder="Company Name" />

                <div className="mt-1">
                    <p className="ml-0.5">Are you a company?<span className="text-red-800">*</span></p>
                    <div className="m-2">
                        <label><input className="mr-2  " type="radio" name="company" id="company" value='yes' required style={{ accentColor: "#6C25FF" }} />Yes</label>
                        <label><input className="mx-2" type="radio" name="company" id="company" value='no' required style={{ accentColor: "#6C25FF" }} />No</label>
                    </div>
                </div>
               <Link to ="/Profile"><Button className="bg-[#6C25FF] text-white w-full relative top-[5vw]  " message='Create Account' /></Link> 

            </div>
        </>
    );
}

export default Signup;