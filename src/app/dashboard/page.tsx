"use client";

import { useAuthContext } from "@/components/providers/AuthProvider";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { PrimaryButton } from "@/components/ui";

function DashboardContent() {
	const { user, signOut } = useAuthContext();

	return (
		<div className="min-h-screen bg-gray-50 p-8 page-transition">
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-lg shadow-sm p-6 section-stagger">
					<h1 className="text-2xl font-bold text-gray-900 mb-4">
						Dashboard
					</h1>
					
					<div className="space-y-4">
						<div className="bg-gray-50 p-4 rounded-lg">
							<h2 className="text-lg font-semibold text-gray-800 mb-2">
								User Information
							</h2>
							<div className="space-y-2 text-sm text-gray-600">
								<p><strong>Email:</strong> {user?.email}</p>
								<p><strong>Full Name:</strong> {user?.fullName || "Not provided"}</p>
								<p><strong>Phone:</strong> {user?.phone || "Not provided"}</p>
								<p><strong>Email Confirmed:</strong> {user?.emailConfirmed ? "Yes" : "No"}</p>
							</div>
						</div>
						
						<div className="flex gap-4">
							<PrimaryButton onClick={signOut}>
								Sign Out
							</PrimaryButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function DashboardPage() {
	return (
		<ProtectedRoute>
			<DashboardContent />
		</ProtectedRoute>
	);
}
