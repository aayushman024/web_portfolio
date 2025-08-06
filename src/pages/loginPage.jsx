import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/logo";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import GlowingLoginButton from '../components/glowingButton';

export default function LoginPage({setEmail}) {
  const [email, setLocalEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setEmail(email);
    navigate('/home');
  };
  
  return (
    <div className="grid place-items-center h-screen bg-[url('./assets/background.jpg')] bg-contain">
      <div className="w-[35vw] bg-white p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-2">
        <Logo />
        <EmailInput email={email} setEmail={setLocalEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <div className="flex items-center justify-center">
      <GlowingLoginButton onClick={handleLogin}/>
    </div>
      </div>
    </div>
  );
}