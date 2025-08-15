import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/providers/ToastProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="id">
			<body className={inter.className}>
				<ThemeProvider>
					<AuthProvider>
						<ToastProvider>{children}</ToastProvider>
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
