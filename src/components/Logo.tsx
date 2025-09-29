export function Logo({ className }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 font-headline font-bold text-primary ${className}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-accent"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 11.23 4.11 10.49 4.3 9.79L9.79 4.3C10.49 4.11 11.23 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
          fill="currentColor"
        />
        <path
          d="M12 6C9.13 6 6.72 7.89 6.14 10.55C6.05 10.99 6.38 11.41 6.83 11.41H17.17C17.62 11.41 17.95 10.99 17.86 10.55C17.28 7.89 14.87 6 12 6Z"
          fill="hsl(var(--primary))"
        />
      </svg>
      <span className="text-xl">FreshFruit</span>
    </div>
  );
}
