import React from 'react';

interface ButtonProps {
  type?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  download?: boolean;
  className?: string;
}

export function Button({ children, variant = 'primary', href, download, className = '' }: ButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white"
  };

  if (href) {
    return (
      <a 
        href={href}
        download={download}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}