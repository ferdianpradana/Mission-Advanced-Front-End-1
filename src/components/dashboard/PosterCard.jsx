import { PlusIcon, CheckIcon } from "../ui/icons";

export function PosterCard({ id, title, badge, gradient, image, rating, inList, onToggleList }) {
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

            {onToggleList && (
                <button
                    type="button"
                    onClick={() => onToggleList({ id, title, badge, gradient, image, rating })}
                    aria-label={inList ? "Hapus dari Daftar Saya" : "Tambah ke Daftar Saya"}
                    className={`absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-white transition ${
                        inList ? "bg-green-600" : "bg-black/60 hover:bg-black/80"
                    }`}
                >
                    {inList ? <CheckIcon /> : <PlusIcon />}
                </button>
            )}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-2.5">
                <p className="line-clamp-2 text-xs font-semibold text-white">{title}</p>
            </div>
        </div>
    );
}
