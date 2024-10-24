import { useToast } from "@/hooks/use-toast";
import { signInWithEmail } from "@/lib/firebase/auth";
import React, { useState } from "react";

const LoginForm = ({ onHide }: { onHide: () => void }) => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const { toast } = useToast();

  const handleEmailSignUp = async () => {
    try {
      const res = await signInWithEmail(email, pswd);
      console.log(res);
      if (res) {
        onHide();
      } else {
        toast({
          className: "bg-red-500 border-none ",
          title: "Uh oh! Something went wrong.",
          description: "Please check your email and password and try again.",
        });
      }
    } catch (error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please check your email and password and try again.",
      });
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <input
        className="rounded bg-transparent placeholder:text-midGrey"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="m-0 rounded bg-transparent placeholder:text-midGrey"
        type="password"
        placeholder="Password"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}
      />
      <button className="c-primary c-solid" onClick={handleEmailSignUp}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
