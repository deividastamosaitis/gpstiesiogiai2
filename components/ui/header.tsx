import Link from "next/link";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="gpsmeistras.lt">
              <Image src={Logo} width={300} alt="GPSmeistras.lt" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
