import ProfileCardEditor from "@/components/profile-card-editor"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <ProfileCardEditor />
    </ThemeProvider>
  )
}
