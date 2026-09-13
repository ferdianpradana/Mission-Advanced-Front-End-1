import logo from "../../assets/Logo.png";

const GENRES = [
    "Aksi",
    "Anak-anak",
    "Anime",
    "Britania",
    "Drama",
    "Fantasi Ilmiah & Fantasi",
    "Kejahatan",
    "KDrama",
    "Komedi",
    "Petualangan",
    "Perang",
    "Romantis",
    "Sains & Alam",
    "Thriller",
];

const HELP_LINKS = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"];

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#0b0b0f] px-4 py-10 text-sm text-white/50 sm:px-6 md:px-10">
            <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                <div>
                    <img src={logo} alt="Chill" className="h-6" />
                    <p className="mt-3 text-xs">@2023 Chill All Rights Reserved.</p>
                </div>

                <div>
                    <p className="mb-3 font-semibold text-white">Genre</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4 sm:grid-flow-col sm:grid-rows-4 sm:gap-x-8">
                        {GENRES.map((genre) => (
                            <span key={genre} className="hover:text-white">
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="mb-3 font-semibold text-white">Bantuan</p>
                    <ul className="flex flex-col gap-2">
                        {HELP_LINKS.map((link) => (
                            <li key={link} className="hover:text-white">
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
