"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
	LayoutDashboard,
	Users,
	Building2,
	UserCheck,
	Settings,
	ClipboardList,
} from "lucide-react";
import { ThemeToggle, Divider } from "@/components/ui";

interface MenuItem {
	icon: React.ReactNode;
	label: string;
	path: string;
}

interface MenuGroup {
	label: string;
	items: MenuItem[];
}

const MENU_ITEMS: MenuItem[] = [
	{
		icon: <LayoutDashboard className="w-5 h-5" />,
		label: "Dashboard",
		path: "/admin/dashboard",
	},
];

const MENU_GROUPS: MenuGroup[] = [
	{
		label: "Recruitment",
		items: [
			{
				icon: <Building2 className="w-5 h-5" />,
				label: "Companies",
				path: "/admin/companies",
			},
			{
				icon: <ClipboardList className="w-5 h-5" />,
				label: "Assessments",
				path: "/admin/assessments",
			},
			{
				icon: <UserCheck className="w-5 h-5" />,
				label: "Interviews",
				path: "/admin/interviews",
			},
			{
				icon: <Users className="w-5 h-5" />,
				label: "Talent Pool",
				path: "/admin/talent-pool",
			},
		],
	},
	{
		label: "Account",
		items: [
			{
				icon: <Settings className="w-5 h-5" />,
				label: "Profile",
				path: "/admin/profile",
			},
		],
	},
];

interface SidebarMenuItemProps {
	item: MenuItem;
	isActive: boolean;
}

function SidebarMenuItem({ item, isActive }: SidebarMenuItemProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link href={item.path}>
			<div
				className={`
					flex items-center w-full h-11 px-6 transition-colors duration-200 cursor-pointer
					${
						isActive
							? "bg-orange-100 text-orange-600 border-r-2 border-orange-600"
							: isHovered
							? "bg-[var(--muted)] text-[var(--foreground)]"
							: "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
					}
				`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<div className="flex items-center space-x-3">
					<div
						className={
							isActive ? "text-orange-600" : "text-[var(--muted-foreground)]"
						}>
						{item.icon}
					</div>
					<span className="text-sm font-medium font-['Inter']">
						{item.label}
					</span>
				</div>
			</div>
		</Link>
	);
}

interface SidebarMenuGroupProps {
	group: MenuGroup;
	pathname: string;
}

function SidebarMenuGroup({ group, pathname }: SidebarMenuGroupProps) {
	const [isExpanded, setIsExpanded] = useState(true);

	return (
		<div className="py-2">
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="flex items-center justify-between w-full px-4 py-2 text-xs font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200 font-['Inter'] uppercase tracking-wider">
				<span>{group.label}</span>
				<div className="text-[var(--primary)]">
					{isExpanded ? (
						<ChevronDown className="w-4 h-4" />
					) : (
						<ChevronRight className="w-4 h-4" />
					)}
				</div>
			</button>
			{isExpanded && (
				<div className="space-y-1">
					{group.items.map((item) => {
						// Only exact match or if pathname starts with item path but no other item is more specific
						let isActive = false;

						if (pathname === item.path) {
							// Exact match
							isActive = true;
						} else if (pathname.startsWith(item.path + "/")) {
							// Check if any other item in this group is more specific
							const moreSpecificExists = group.items.some(
								(otherItem) =>
									otherItem.path !== item.path &&
									otherItem.path.length > item.path.length &&
									(pathname === otherItem.path ||
										pathname.startsWith(otherItem.path + "/"))
							);
							isActive = !moreSpecificExists;
						}

						return (
							<SidebarMenuItem
								key={item.path}
								item={item}
								isActive={isActive}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<div className="w-64 h-screen bg-[var(--background)] border-r border-[var(--border)] flex flex-col shadow-sm">
			{/* Business & Store Info */}
			<div className="px-6 py-6 border-b border-[var(--border)]">
				<div className="space-y-2">
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
							<span className="text-[var(--primary-foreground)] font-bold text-sm">
								O
							</span>
						</div>
						<div>
							<h2 className="text-sm font-semibold text-[var(--foreground)] font-['Inter']">
								Ourank
							</h2>
							<p className="text-xs text-[var(--muted-foreground)] font-['Inter']">
								Platform
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Menu Items */}
			<div className="flex-1 overflow-y-auto py-4">
				<div className="space-y-1">
					{/* Individual Menu Items */}
					{MENU_ITEMS.map((item) => {
						const isActive =
							pathname === item.path || pathname.startsWith(item.path + "/");
						return (
							<SidebarMenuItem
								key={item.path}
								item={item}
								isActive={isActive}
							/>
						);
					})}

					{/* Menu Groups */}
					{MENU_GROUPS.map((group) => (
						<SidebarMenuGroup
							key={group.label}
							group={group}
							pathname={pathname}
						/>
					))}
				</div>
			</div>

			{/* Theme Toggle */}
			<Divider />
			<div className="p-4">
				<div className="flex items-center justify-between">
					<span className="text-sm font-medium text-[var(--foreground)] font-['Inter']">
						Tema
					</span>
					<ThemeToggle />
				</div>
			</div>

			{/* Ourbit Logo & Version */}
			<Divider />
			<div className="p-4">
				<div className="flex items-center space-x-3">
					<div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
						<span className="text-[var(--primary-foreground)] font-bold text-sm">
							O
						</span>
					</div>
					<div>
						<div className="text-sm font-semibold text-[var(--foreground)] font-['Inter']">
							Ourbit
						</div>
						<div className="text-xs text-[var(--muted-foreground)] font-['Inter']">
							v.1.0
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
