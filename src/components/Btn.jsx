// Shared glossy button. variant 'glass' for navigation and secondary actions,
// 'primary' for the main call to action. `kbd` renders the shortcut chip.
export default function Btn({ variant = 'glass', kbd, children, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`${variant === 'primary' ? 'btn-primary' : 'btn-glass'} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {kbd && <kbd className="btn-kbd">{kbd}</kbd>}
    </button>
  )
}
