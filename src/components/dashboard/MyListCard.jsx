import { CheckIcon, TrashIcon } from "../ui/icons";

export function MyListCard({ id, title, badge, gradient, image, watched, onToggleWatched, onRemove }) {
    return (
        <div className="relative h-[195px] w-[130px] flex-shrink-0 overflow-hidden rounded-lg shadow-lg sm:h-[225px] sm:w-[150px] md:h-[255px] md:w-[170px]">
            {image ? (
                <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
                <div className={`absolute inset-0 ${gradient}`} />
            )}

            {badge && (
                <span className="absolute right-2 top-2 rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {badge}
                </span>
            )}

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/90 to-transparent p-2.5">
                <p className="line-clamp-2 text-xs font-semibold text-white">{title}</p>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => onToggleWatched(id)}
                        aria-label={watched ? "Tandai belum ditonton" : "Tandai sudah ditonton"}
                        className={`flex items-center gap-1 rounded px-2 py-1 text-[10px] font-semibold transition ${
                            watched ? "bg-green-600 text-white" : "bg-white/15 text-white/80 hover:bg-white/25"
                        }`}
                    >
                        <CheckIcon /> {watched ? "Ditonton" : "Tandai"}
                    </button>
                    <button
                        type="button"
                        onClick={() => onRemove(id)}
                        aria-label="Hapus dari Daftar Saya"
                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-white/80 hover:bg-red-600 hover:text-white"
                    >
                        <TrashIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}
