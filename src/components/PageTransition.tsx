"use client";

import { ReactNode, useEffect, useState } from "react";

interface PageTransitionProps {
	children: ReactNode;
	className?: string;
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Trigger animation after component mounts
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`page-transition ${className}`}
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? "translateY(0)" : "translateY(100%)",
				transition: "opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
			}}
		>
			{children}
		</div>
	);
}

interface SectionTransitionProps {
	children: ReactNode;
	className?: string;
	delay?: number;
}

export function SectionTransition({ children, className = "", delay = 0 }: SectionTransitionProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, delay);

		return () => clearTimeout(timer);
	}, [delay]);

	return (
		<div
			className={`section-stagger ${className}`}
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? "translateY(0)" : "translateY(100%)",
				transition: `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
			}}
		>
			{children}
		</div>
	);
}
