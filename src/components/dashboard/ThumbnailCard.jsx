import { StarIcon, PlusIcon, CheckIcon } from "../ui/icons";

export function ThumbnailCard({ id, title, rating, gradient, image, badge, inList, onToggleList }) {
    return (
        <div className="relative h-[120px] w-[200px] flex-shrink-0 overflow-hidden rounded-lg shadow-lg sm:h-[140px] sm:w-[230px] md:h-[160px] md:w-[260px]">
            {image ? (
                <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
                <div className={`absolute inset-0 ${gradient}`} />
            )}

            {onToggleList && (
                <button
                    type="button"
                    onClick={() => onToggleList({ id, title, rating, gradient, image, badge })}
                    aria-label={inList ? "Hapus dari Daftar Saya" : "Tambah ke Daftar Saya"}
                    className={`absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-white transition ${
                        inList ? "bg-green-600" : "bg-black/60 hover:bg-black/80"
                    }`}
                >
                    {inList ? <CheckIcon /> : <PlusIcon />}
                </button>
            )}

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/85 to-transparent px-3 py-2.5">
                <span className="text-sm font-semibold text-white">{title}</span>
                {rating && (
                    <span className="flex flex-shrink-0 items-center gap-1 text-xs text-white/90">
                        <StarIcon className="text-yellow-400" /> {rating}
                    </span>
                )}
            </div>
        </div>
    );
}
