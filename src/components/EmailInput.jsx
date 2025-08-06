export default function EmailInput({ email, setEmail }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 ml-3 text-sm text-gray-700">Username</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-[20px] w-[25vw] border px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
        placeholder="eg., aayushman024"
      />
    </div>
  );
}
