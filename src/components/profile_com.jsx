import React from "react";
function Procom() {
    return (<>
        <div className="flex my-10 mx-5 ">
            <div className="relative">
                <img className="relative" src="assinment_img.png" alt="profile img" />
                <img className="absolute top-14 left-14 " src="camara_logo.png" alt="profile img" />
            </div>
            <div className="flex flex-col mx-2.5">
                <h2 className="font-bold">Marry Doe</h2>
                <p>Marry@gmail.com</p>
            </div>
        </div>
    </>);
}

export default Procom;