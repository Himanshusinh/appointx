import React from 'react'


interface Buttonprops{
    text: String;
    bgColor : string;
    textColor: string;
    onClick : () => void;
    className?: string;
}

const Button: React.FC<Buttonprops> = ({
text,
  bgColor = '#0058E5',
  textColor = '#fff',
  onClick,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-36 h-11 rounded-full ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </button>
  );
};





  


export default Button