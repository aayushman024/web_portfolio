import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function PasswordInput({ password, setPassword }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative mb-6 w-[25vw]">
      <label className="block mb-1 ml-3 text-sm text-gray-700">Password</label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-[20px] w-full border px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 pr-10"
          placeholder="Enter password"
        />

        <button
          type="button"
          className="absolute top-1/2 right-2 -translate-y-1/2 text-blue-600 hover:bg-blue-100 p-1 rounded-4xl transition duration-250"
          onClick={() => setShow(!show)}
        >
          {show ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}
