export function PosterCard({ title, badge, gradient, image }) {
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
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-2.5">
                <p className="line-clamp-2 text-xs font-semibold text-white">{title}</p>
            </div>
        </div>
    );
}
