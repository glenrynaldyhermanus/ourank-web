import { useAuthContext } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
	const { user, loading } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) {
			router.push("/sign-in");
		}
	}, [user, loading, router]);

	if (loading) return <div>Loading...</div>;
	if (!user) return null;

	return <>{children}</>;
} 