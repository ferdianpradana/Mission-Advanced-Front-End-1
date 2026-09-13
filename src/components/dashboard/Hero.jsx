import { InfoIcon, MuteIcon } from "../ui/icons";

export function Hero({ title, description, ageRating = "18+" }) {
    return (
        <section className="relative flex h-[380px] w-full items-end overflow-hidden bg-gradient-to-br from-zinc-700 via-zinc-800 to-black sm:h-[440px] md:h-[540px]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0f]/90 via-[#0b0b0f]/20 to-transparent" />

            <div className="relative flex max-w-xl flex-col gap-3 px-4 pb-10 sm:gap-4 sm:px-6 sm:pb-14 md:px-10">
                <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">{title}</h1>
                <p className="text-xs leading-relaxed text-white/70 sm:text-sm">{description}</p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                        type="button"
                        className="rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white hover:bg-blue-500 sm:px-6 sm:py-2.5 sm:text-sm"
                    >
                        Mulai
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-xs text-white hover:bg-white/10 sm:px-5 sm:py-2.5 sm:text-sm"
                    >
                        <InfoIcon /> Selengkapnya
                    </button>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xs text-white sm:h-9 sm:w-9">
                        {ageRating}
                    </span>
                </div>
            </div>

            <button
                type="button"
                className="absolute bottom-10 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 sm:bottom-14 sm:right-6 sm:h-10 sm:w-10 md:right-10"
            >
                <MuteIcon />
            </button>
        </section>
    );
}
