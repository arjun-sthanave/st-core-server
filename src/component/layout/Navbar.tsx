import { Link } from "react-router-dom";
import { NAVIGATION } from "../../constant/navigation";

export default function Navbar() {
    const navigation = NAVIGATION;
  return (
    <nav>
      <h1>Navbar</h1>
     {navigation.map((item) => (
        <Link key={item.id} to={item.path}>
            {item.title}
        </Link>
     ))}
    </nav>
  );
}