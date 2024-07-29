import { ThemeToggle } from "./ThemeToggle"
export function ThemeToggleSidebar() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      <ThemeToggle />
    </div>
  )
}
