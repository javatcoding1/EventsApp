import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="flex h-screen flex-col">
              <Header />
      <main className="flex-1"> {children} </main>
            <Footer />
      </div>
  );
}