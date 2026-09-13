import { StarIcon } from "../ui/icons";

export function ThumbnailCard({ title, rating, gradient, image }) {
    return (
        <div className="relative h-[120px] w-[200px] flex-shrink-0 overflow-hidden rounded-lg shadow-lg sm:h-[140px] sm:w-[230px] md:h-[160px] md:w-[260px]">
            {image ? (
                <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
                <div className={`absolute inset-0 ${gradient}`} />
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
