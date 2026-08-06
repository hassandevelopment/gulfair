// Floating menu switch, present on every screen except the landing page
// (fixed bottom left, mirroring the theme toggle). One tap back to the
// Psychometric / Oral Interview chooser from anywhere.
export default function HomeButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title="Back to the main menu"
      className="btn-glass fixed bottom-5 left-5 z-50 !p-0 w-12 h-12"
    >
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M2.2 7.4 8 2.2l5.8 5.2M3.6 6.6v6.2a1 1 0 0 0 1 1h2.1v-3.4h2.6v3.4h2.1a1 1 0 0 0 1-1V6.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
