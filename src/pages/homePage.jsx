import AppBar from "../components/appBar";

export default function HomePage({email}) {
  return (
<AppBar username={email}/>
  );
}
