import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import AuthHeader from "./auth-header";



  
const HeaderPage = async () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl md:text-2xl">discuss</h1>
        </div>

        <div className="py-5">
        <Input type="text" placeholder="Search" />
      </div>

        <div className="flex items-center gap-2">
          <AuthHeader/>
          <ModeToggle />
        </div>
      </div>

      
    </div>
  );
};

export default HeaderPage;
