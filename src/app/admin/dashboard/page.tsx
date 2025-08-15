"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useAuthContext } from "@/components/providers/AuthProvider";
import { DollarSign, Package, ShoppingCart, Users, Bell } from "lucide-react";
import { Stats, Divider } from "@/components/ui";
import PageHeader from "@/components/layout/PageHeader";

const formatCurrency = (amount: number) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
	}).format(amount);
};

export default function Dashboard() {
	const router = useRouter();
	const { user } = useAuthContext();
	const [userProfile, setUserProfile] = useState<{
		name?: string;
		email?: string;
		avatar?: string;
	} | null>(null);
	const [dashboardStats, setDashboardStats] = useState({
		todayRevenue: 0,
		totalSales: 0,
		totalOrders: 0,
		newCustomers: 0,
	});

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				const {
					data: { user },
				} = await supabase.auth.getUser();
				if (user) {
					setUserProfile({
						name:
							user.user_metadata?.full_name ||
							user.email?.split("@")[0] ||
							"User",
						email: user.email || "user@example.com",
						avatar: user.user_metadata?.avatar_url,
					});
				}
			} catch (error) {
				console.error("Error fetching user profile:", error);
			}
		};
		fetchUserProfile();
	}, []);

	// Placeholder: fetch and compute stats later when libs ready
	useEffect(() => {
		setDashboardStats({
			todayRevenue: 0,
			totalSales: 0,
			totalOrders: 0,
			newCustomers: 0,
		});
	}, []);

	return (
		<div className="min-h-screen bg-[var(--background)]">
			<div className="max-w mx-auto space-y-4">
				<div>
					<PageHeader
						title="Dashboard"
						subtitle="Selamat datang di Ourank"
						notificationButton={{
							icon: Bell,
							onClick: () => {},
							count: 0,
						}}
						profileButton={{
							avatar: userProfile?.avatar,
							name: userProfile?.name,
							email: userProfile?.email,
							onClick: () => {
								router.push("/admin/profile");
							},
						}}
					/>
				</div>

				<div className="animate-fade-in" style={{ animationDelay: "30ms" }}>
					<Divider />
				</div>

				<div className="rounded-xl">
					<div className="flex items-center">
						<div
							className="flex-1 animate-fade-in-left"
							style={{ animationDelay: "0ms" }}>
							<Stats.Card
								title="Pendapatan Hari Ini"
								value={formatCurrency(dashboardStats.todayRevenue)}
								icon={DollarSign}
								iconColor="bg-green-500/10 text-green-600"
							/>
						</div>
						<div className="w-px h-16 bg-[var(--border)]"></div>
						<div
							className="flex-1 animate-fade-in-left"
							style={{ animationDelay: "30ms" }}>
							<Stats.Card
								title="Total Penjualan"
								value={dashboardStats.totalSales.toString()}
								icon={Package}
								iconColor="bg-orange-500/10 text-orange-600"
							/>
						</div>
						<div className="w-px h-16 bg-[var(--border)]"></div>
						<div
							className="flex-1 animate-fade-in-left"
							style={{ animationDelay: "60ms" }}>
							<Stats.Card
								title="Total Pesanan"
								value={dashboardStats.totalOrders.toString()}
								icon={ShoppingCart}
								iconColor="bg-red-500/10 text-red-600"
							/>
						</div>
						<div className="w-px h-16 bg-[var(--border)]"></div>
						<div
							className="flex-1 animate-fade-in-left"
							style={{ animationDelay: "90ms" }}>
							<Stats.Card
								title="Pelanggan Baru"
								value={dashboardStats.newCustomers.toString()}
								icon={Users}
								iconColor="bg-yellow-500/10 text-yellow-600"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
