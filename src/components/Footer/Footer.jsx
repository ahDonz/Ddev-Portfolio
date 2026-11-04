const Footer = () => {
  const year = new Date().getFullYear();

  const time = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <footer className="w-full border-t border-gray-200 py-6 mx-5" >
      <div className=" flex flex-col gap-3 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">
          <span>© {year}</span>
          <span>•</span>
          <span>Designed & built by Don Atillo ◡̈</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Location SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <path d="M12 21s-6-5.3-6-11a6 6 0 1 1 12 0c0 5.7-6 11-6 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>

          <span>Philippines</span>
          <span>|</span>
          <span>{time}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;