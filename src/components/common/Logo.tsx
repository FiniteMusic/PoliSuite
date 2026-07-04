
import { Link } from "react-router-dom";
import logo from "@/assets/logo/logo.png";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={logo}
        alt="PoliSuite Logo"
        className="h-20 w-20 rounded-xl object-contain"
      />

      <div className="leading-none">
        <p className="text-lg font-bold tracking-tight text-foreground">
          PoliSuite
        </p>
        <p className="text-xs text-muted-foreground">Compatible con SAES</p>
      </div>
    </Link>
  );
}