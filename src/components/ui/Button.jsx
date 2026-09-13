export function Button({ children, type = "button", variant = "primary", icon, onClick, className = "" }) {
    const base = "flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-medium transition";
    const variants = {
        primary: "bg-white/25 text-white hover:bg-white/35",
        outline: "border border-white/15 text-white hover:bg-white/5",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {icon}
            {children}
        </button>
    );
}
