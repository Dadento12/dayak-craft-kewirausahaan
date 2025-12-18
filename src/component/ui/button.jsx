export default function Button({ className = '', children, type = '',onClick, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  )
}
