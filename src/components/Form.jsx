function Form({message,type,placeholder,required}) {
    return (
        <>

            <form>
                <div>
                <label className="text-[#6C25FF] bg-white w-[30vw] sm:w-[7vw] relative top-3 left-3 z-1 sm: flex" htmlFor={message}>{message} {required && <span className="text-red-800">*</span>}</label>
                <input className="sm:w-[30vw]  border-[1px] relative border-[#CBCBCB] w-[90vw] p-3 rounded-[6px] focus:outline-none " type={type} name={message} placeholder={`Enter ${placeholder}`} />
                </div>
            </form> 

        </>
    );
}

export default Form;