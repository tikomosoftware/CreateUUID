import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "UUID生成ツール",
    description: "UUIDを生成します",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body>
                {children}
            </body>
        </html>
    );
}
