import React from 'react'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} className="bg-sky-600 px-5 py-2 text-white rounded-md hover:opacity-70 transition-opacity duration-500">
      {children}
    </button>
  )
}
