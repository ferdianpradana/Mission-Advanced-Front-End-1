export function Input({ label, name, type = "text", placeholder, value, onChange, rightElement }) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label htmlFor={name} className="text-sm text-white">
                    {label}
                </label>
            )}
            <div className="relative">
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 pr-11 text-sm text-white placeholder-white/40 outline-none focus:border-white/30"
                />
                {rightElement && (
                    <div className="absolute inset-y-0 right-3 flex items-center">
                        {rightElement}
                    </div>
                )}
            </div>
        </div>
    );
}
