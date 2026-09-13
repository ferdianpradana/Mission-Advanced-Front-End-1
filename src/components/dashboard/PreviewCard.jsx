import { PlayIcon, CheckIcon, ChevronDownIcon } from "../ui/icons";

export function PreviewCard({ title, ageRating, episodes, genres, gradient, image }) {
    return (
        <div className="relative z-10 w-[180px] flex-shrink-0 overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10 sm:w-[210px] md:w-[240px] md:scale-105">
            <div className="relative flex h-[115px] items-center justify-center text-center text-sm font-black uppercase tracking-wide text-white/90 sm:h-[135px] md:h-[150px] md:text-lg">
                {image ? (
                    <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                    <div className={`absolute inset-0 ${gradient}`} />
                )}
                <span className="relative bg-black/30 px-2">{title}</span>
            </div>
            <div className="flex flex-col gap-2 bg-[#15151b] p-3">
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
                    >
                        <PlayIcon />
                    </button>
                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-white"
                    >
                        <CheckIcon />
                    </button>
                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-white"
                    >
                        <ChevronDownIcon />
                    </button>
                </div>

                <div className="flex items-center gap-2 text-xs text-white/80">
                    <span className="rounded border border-white/40 px-1.5 py-0.5">{ageRating}</span>
                    <span>{episodes}</span>
                </div>

                <p className="text-xs text-white/50">{genres.join(" • ")}</p>
            </div>
        </div>
    );
}
