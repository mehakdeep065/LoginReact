import React from "react";
function Text({message,message2}) {
    return ( 
        <>
            <h1 className="text-3xl font-medium py-1 w-3/5 ">{message}</h1>
            <p className="text-[18px] font-light w-3/4 mb-2.5 ">{message2}</p>
        </>
     );
}
 

export default Text;