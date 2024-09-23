import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Abhishek Shakya",
    description: "Web developer dedicated to building applications that real world problem.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
