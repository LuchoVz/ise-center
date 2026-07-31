import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ise-logo.png.asset.json";

export function Logo({ tone = "default" }: { tone?: "default" | "invert" }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3">
      <img
        src={logoAsset.url}
        alt="ISE® — Instituto del Ser en Expansión"
        width={140}
        height={40}
        className={
          "h-10 w-auto object-contain transition-opacity " +
          (tone === "invert" ? "brightness-110" : "")
        }
      />
    </Link>
  );
}
