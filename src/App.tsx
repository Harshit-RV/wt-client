
import { Routes,Route, useLocation } from "react-router-dom"
import MonitorCreate from "./pages/MonitorCreate";
import { Home } from "./pages/Home";

import { ScrollArea } from "./components/ui/scroll-area";
import { RedirectToSignIn, SignedIn, SignedOut} from "@clerk/clerk-react";
import { SignInPage } from "./pages/SignIn";
import { SignUpPage } from "./pages/SignUp";
import { ReactNode } from "react";
import { NavBar } from "./components/NavBar";

function App() {
  const location = useLocation();
  
  
  return (
    <div className="flex flex-col">
      {
        location.pathname == '/sign-in' || location.pathname == '/sign-up' ? null :  <NavBar />
      }

      <ScrollArea className="h-full w-full rounded-md border">
        <Routes>
          <Route path="/" element= { <ProtectedRoute child={<Home/>} /> }/>
          <Route path="/create" element={ <ProtectedRoute child={<MonitorCreate/>} />} />
          <Route path="/sign-in" element={<SignInPage/>} />
          <Route path="/sign-up" element={<SignUpPage/>} />

        </Routes>
      </ScrollArea>
      
    </div>
  );
}

const ProtectedRoute = ({ child }: { child: ReactNode }) => {
  return (
    <>
    <SignedIn> {child} </SignedIn>

    <SignedOut> 
      <RedirectToSignIn />
    </SignedOut>
    </>
  );
};

export default App
