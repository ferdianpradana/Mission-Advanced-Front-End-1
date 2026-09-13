import { useState } from "react";
import logo from "../../assets/Logo.png";
import { ChevronDownIcon, UserIcon, StarIcon, LogoutIcon, MenuIcon, CloseIcon } from "../ui/icons";

const NAV_LINKS = [
    { label: "Series", href: "/series" },
    { label: "Film", href: "/film" },
    { label: "Daftar Saya", href: "/daftar-saya" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-30 bg-[#0b0b0f]">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-10">
                <div className="flex items-center gap-10">
                    <img src={logo} alt="Chill" className="h-6" />
                    <nav className="hidden gap-8 text-sm text-white/80 md:flex">
                        {NAV_LINKS.map((link) => (
                            <a key={link.label} href={link.href} className="hover:text-white">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="text-white md:hidden"
                        aria-label="Menu"
                    >
                        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>

                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setOpen((prev) => !prev)}
                            className="flex items-center gap-2"
                        >
                            <span className="h-9 w-9 overflow-hidden rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
                            <ChevronDownIcon className={`hidden text-white/70 transition-transform sm:block ${open ? "rotate-180" : ""}`} />
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-3 w-48 rounded-xl bg-[#1a1a22] p-2 text-sm shadow-2xl ring-1 ring-white/10">
                                <a href="/profile" className="flex items-center gap-2 rounded-lg px-3 py-2 text-blue-400 hover:bg-white/5">
                                    <UserIcon /> Profil Saya
                                </a>
                                <a href="/premium" className="flex items-center gap-2 rounded-lg px-3 py-2 text-white hover:bg-white/5">
                                    <StarIcon /> Ubah Premium
                                </a>
                                <a href="/logout" className="flex items-center gap-2 rounded-lg px-3 py-2 text-white hover:bg-white/5">
                                    <LogoutIcon /> Keluar
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {mobileOpen && (
                <nav className="flex flex-col gap-1 border-t border-white/10 px-4 pb-4 text-sm text-white/80 md:hidden">
                    {NAV_LINKS.map((link) => (
                        <a key={link.label} href={link.href} className="rounded-lg px-2 py-2 hover:bg-white/5 hover:text-white">
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
