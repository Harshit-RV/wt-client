import { SignUp } from "@clerk/clerk-react";

export const SignUpPage = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
             <SignUp 
                appearance={{
                    elements: {
                      formButtonPrimary: "bg-[#F93943] hover:bg-[#F93943]/80",
                    },
                  }}
             />
             <div className="h-20"></div>
        </div>
    );
}