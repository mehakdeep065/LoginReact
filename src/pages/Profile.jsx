import React from "react";
import Procom from "../components/profile_com";
function Profile() {
    return (
        <>
            <div className="sm:mx-[30vw]">
                <h3 className="px-3.5 py-4 text-[18px] border-[0px]  shadow-lg ">Account Settings</h3>
                <Procom />
                <p className="mx-5 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                <div className="border-b-4 border-dashed border-gray-100"></div>
                <div className="relative top-[55vh] border-b-4 border-dashed border-gray-100 "></div>
            </div>
        </>
    );
}

export default Profile;