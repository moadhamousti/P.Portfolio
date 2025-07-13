"use client";

import { useLenisScroll } from "@/hooks/useLenisScroll";
import { ThemeProvider } from "@/components/theme-provider";
import { ToggleButton } from "@/components/toggle-theme";
import Footer from "@/components/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useLenisScroll();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ToggleButton />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
