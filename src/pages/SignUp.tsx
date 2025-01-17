import { SignUp } from "@clerk/clerk-react";

export const SignUpPage = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
             <SignUp 
                appearance={{
                    elements: {
                      formButtonPrimary: "bg-[#764abc] hover:bg-[#764abc]/80",
                    },
                  }}
             />
             <div className="h-20"></div>
        </div>
    );
}