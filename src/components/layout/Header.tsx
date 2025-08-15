"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, Bell, Settings, LogOut } from "lucide-react";

interface HeaderProps {
	user: any;
	userRole: "hr" | "company" | "talent" | null;
	setUser: (user: any) => void;
}

const Header: React.FC<HeaderProps> = ({ user, userRole, setUser }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const pathname = usePathname();

	const navigation = [
		{
			name: "Dashboard",
			href: "/dashboard",
			roles: ["hr", "company", "talent"],
		},
		{ name: "Talent Pool", href: "/talent-pool", roles: ["hr", "company"] },
		{ name: "Companies", href: "/companies", roles: ["hr", "talent"] },
		{
			name: "Interviews",
			href: "/interviews",
			roles: ["hr", "company", "talent"],
		},
		{ name: "Assessments", href: "/assessments", roles: ["hr", "company"] },
	];

	const handleLogin = () => {
		// Simulate login - in real app, this would be Supabase auth
		setUser({ name: "John Doe", email: "john@example.com" });
	};

	const isCurrentPath = (path: string) => pathname === path;

	return (
		<header className="bg-white shadow-sm border-b border-[#D6DED5] sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-[#BFD8B8] rounded-lg flex items-center justify-center">
							<span className="text-[#2F3E34] font-bold text-sm">O</span>
						</div>
						<span className="text-xl font-bold text-[#2F3E34]">Ourank</span>
					</Link>

					{/* Desktop Navigation */}
					{user && (
						<nav className="hidden md:flex space-x-8">
							{navigation
								.filter((item) => !userRole || item.roles.includes(userRole))
								.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
											isCurrentPath(item.href)
												? "text-[#2F3E34] bg-[#E6F1E0]"
												: "text-[#7A8C7F] hover:text-[#2F3E34] hover:bg-[#E6F1E0]"
										}`}>
										{item.name}
									</Link>
								))}
						</nav>
					)}

					{/* Right side */}
					<div className="flex items-center space-x-4">
						{user ? (
							<>
								<button className="p-2 text-[#7A8C7F] hover:text-[#2F3E34] hover:bg-[#E6F1E0] rounded-lg transition-colors">
									<Bell className="w-5 h-5" />
								</button>

								<div className="relative">
									<button
										onClick={() => setIsProfileOpen(!isProfileOpen)}
										className="flex items-center space-x-2 p-2 text-[#7A8C7F] hover:text-[#2F3E34] hover:bg-[#E6F1E0] rounded-lg transition-colors">
										<User className="w-5 h-5" />
										<span className="text-sm font-medium">{user.name}</span>
									</button>

									{isProfileOpen && (
										<div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#D6DED5] py-2">
											<Link
												href="/profile"
												className="flex items-center px-4 py-2 text-sm text-[#4D5C51] hover:bg-[#E6F1E0] transition-colors"
												onClick={() => setIsProfileOpen(false)}>
												<User className="w-4 h-4 mr-2" />
												Profile
											</Link>
											<Link
												href="/settings"
												className="flex items-center px-4 py-2 text-sm text-[#4D5C51] hover:bg-[#E6F1E0] transition-colors"
												onClick={() => setIsProfileOpen(false)}>
												<Settings className="w-4 h-4 mr-2" />
												Settings
											</Link>
											<button
												onClick={() => {
													setUser(null);
													setIsProfileOpen(false);
												}}
												className="flex items-center w-full px-4 py-2 text-sm text-[#4D5C51] hover:bg-[#E6F1E0] transition-colors">
												<LogOut className="w-4 h-4 mr-2" />
												Sign out
											</button>
										</div>
									)}
								</div>
							</>
						) : (
							<button
								onClick={handleLogin}
								className="bg-[#BFD8B8] text-[#2F3E34] px-4 py-2 rounded-lg font-medium hover:bg-[#9BB49C] transition-colors">
								Sign In
							</button>
						)}

						{/* Mobile menu button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 text-[#7A8C7F] hover:text-[#2F3E34] hover:bg-[#E6F1E0] rounded-lg transition-colors">
							{isMenuOpen ? (
								<X className="w-5 h-5" />
							) : (
								<Menu className="w-5 h-5" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && user && (
					<div className="md:hidden py-4 border-t border-[#D6DED5]">
						<nav className="flex flex-col space-y-2">
							{navigation
								.filter((item) => !userRole || item.roles.includes(userRole))
								.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
											isCurrentPath(item.href)
												? "text-[#2F3E34] bg-[#E6F1E0]"
												: "text-[#7A8C7F] hover:text-[#2F3E34] hover:bg-[#E6F1E0]"
										}`}
										onClick={() => setIsMenuOpen(false)}>
										{item.name}
									</Link>
								))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
