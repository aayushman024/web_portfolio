import logoImg from '../assets/logo.png';

export default function Logo() {
  return (
    <div className="text-center">
      <img
        src={logoImg}
        alt="Lighthouse"
        className="h-80 w-80 object-contian"
      />
      <p className="text-gray-800 text-[18px] mb-5 font-medium"> - Login to continue - </p>
    </div>
  );
}
