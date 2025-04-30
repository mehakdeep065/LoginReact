import Button from "../components/buttons";
import Text from "../components/Text";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <>
            <div className="sm:mx-[30vw] ">
                <div className=" flex flex-col   relative top-[68vh]  px-6  ">
                    <Text message='Welcome to Popx' message2='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
                   <Link to="/Signup"> <Button className="bg-[#6C25FF] text-white mt-2 " message='Create Account' /></Link>
                   <Link to="/Login"> <Button className="bg-[#6C25FF4B] text-black mt-3 " message='Already Registered? Login' /></Link>
                </div>
            </div>
        </>
    );
}

export default Landing;