import { SignIn } from "@clerk/clerk-react";

export const SignInPage = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
             <SignIn 
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