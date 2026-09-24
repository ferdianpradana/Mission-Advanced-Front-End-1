export function EyeIcon({ open }) {
    if (open) {
        return (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        );
    }

    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 3l18 18" />
            <path d="M10.6 5.2A9.9 9.9 0 0 1 12 5c6.5 0 10 7 10 7a16.4 16.4 0 0 1-3.3 4.2M6.5 6.6C4 8.3 2 12 2 12s3.5 7 10 7a9.8 9.8 0 0 0 4.2-.9" />
                <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
        </svg>
    );
}

export function ChevronDownIcon({ className = "" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

export function InfoIcon({ className = "" }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5.5" />
            <circle cx="12" cy="8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
    );
}

export function MuteIcon({ className = "" }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
            <path d="M4 9v6h4l5 4V5L8 9H4Z" />
            <path d="M17 9l4 6M21 9l-4 6" />
        </svg>
    );
}

export function ArrowLeftIcon({ className = "" }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M15 6l-6 6 6 6" />
        </svg>
    );
}

export function ArrowRightIcon({ className = "" }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
            <path d="M9 6l6 6-6 6" />
        </svg>
    );
}

export function PlayIcon({ className = "" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M6 4l15 8-15 8V4Z" />
        </svg>
    );
}

export function PlusIcon({ className = "" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className}>
            <path d="M12 5v14M5 12h14" />
        </svg>
    );
}

export function TrashIcon({ className = "" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
            <path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-9 0 1 13a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-13" />
        </svg>
    );
}

export function CheckIcon({ className = "" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className}>
            <path d="M5 12.5l4.5 4.5L19 7" />
        </svg>
    );
}

export function StarIcon({ className = "" }) {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.8 5.9 21l1.5-6.8-5.2-4.7 6.9-.7L12 2.5Z" />
        </svg>
    );
}

export function UserIcon({ className = "" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
        </svg>
    );
}

export function LogoutIcon({ className = "" }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
            <path d="M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" />
            <path d="M13 16l4-4-4-4M17 12H8" />
        </svg>
    );
}

export function MenuIcon({ className = "" }) {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
            <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );
}

export function CloseIcon({ className = "" }) {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
            <path d="M6 6l12 12M18 6L6 18" />
        </svg>
    );
}

export function GoogleIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z" />
            <path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.1-4 1.1-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.3 21.3 7.3 24 12 24Z" />
            <path fill="#FBBC05" d="M5.4 14.3a7.2 7.2 0 0 1 0-4.6V6.6H1.4a12 12 0 0 0 0 10.8l4-3.1Z" />
            <path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.3 0 3.3 2.7 1.4 6.6l4 3.1c.9-2.8 3.5-4.9 6.6-4.9Z" />
        </svg>
    );
}
