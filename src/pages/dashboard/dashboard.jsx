import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { Hero } from "../../components/dashboard/Hero";
import { MovieRow } from "../../components/dashboard/MovieRow";
import { continueWatching, topRating, trending, newReleases } from "../../data/movies";

export function Dashboard() {
    return (
        <div className="min-h-screen bg-[#0b0b0f]">
            <Navbar />

            <Hero
                title="Duty After School"
                description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
                ageRating="18+"
            />

            <MovieRow title="Melanjutkan Tonton Film" items={continueWatching} variant="thumbnail" />
            <MovieRow title="Top Rating Film dan Series Hari ini" items={topRating} variant="poster" />
            <MovieRow title="Film Trending" items={trending} variant="poster" />
            <MovieRow title="Rilis Baru" items={newReleases} variant="poster" />

            <Footer />
        </div>
    );
}
