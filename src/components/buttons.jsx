import React from "react";
function Button({className,message}) {
    return ( 
        <>
        <button className={`${className} text-[16px] font-medium rounded-[6px] p-2 z-1 sm:w-[30vw]`}>{message}</button>
        </>

     );
}

export default Button;