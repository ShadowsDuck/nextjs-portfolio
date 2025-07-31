import React from "react";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  className?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  icon,
  ariaLabel,
  target = "_blank",
  rel = "noopener noreferrer",
  className = "",
}) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      className={className}
    >
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white h-10 relative group overflow-hidden rounded-full p-2 bg-transparent text-gray-50 hover:bg-transparent hover:text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12 cursor-pointer">
        {icon}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -translate-x-full group-hover:translate-x-full transition duration-700"></div>
      </button>
    </a>
  );
};

export default SocialButton;
