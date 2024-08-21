import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn/ui入門！",
  description: "Shadcn/uiを使ってUIを構築してみよう！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${NotoSansJP.className} bg-cover bg-center bg-fixed`}
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      >
        <div className="bg-balck/10 backdrop-blur-sm min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
