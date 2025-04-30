import Form from "../../components/form";
import Text from "../../components/texts";
import Button from "../../components/buttons";
import { Link } from "react-router-dom";
function Login() {
    return (
        <>
            <div className="p-5 sm:mx-[30vw]">
                <Text message='Signin to your PopX account ' message2='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
                <Form message='Email Address' type="email" placeholder="email address"  />
                <Form message='Password' type="password" placeholder="password"  />
              <Link to="/Profile"> <Button  className="bg-[#CBCBCB] text-white w-full mt-5 " message='Login' /></Link>
            </div>
        </>
    );
}

export default Login;