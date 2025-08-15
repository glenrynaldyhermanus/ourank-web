import Link from "next/link";
import {
	Users,
	Briefcase,
	Calendar,
	TrendingUp,
	ArrowRight,
	CheckCircle,
} from "lucide-react";

export default function HomePage() {
	return (
		<div className="min-h-screen page-transition">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-[#E6F1E0] to-[#FAFAF8] py-20 px-4 sm:px-6 lg:px-8 section-stagger">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<h1 className="text-4xl md:text-6xl font-bold text-[#2F3E34] leading-tight">
									Connect Talent with
									<span className="text-[#9BB49C]"> Opportunity</span>
								</h1>
								<p className="text-lg text-[#4D5C51] max-w-xl">
									The modern talent management platform that bridges the gap
									between exceptional talent and forward-thinking companies
									through intelligent matching and seamless interview
									management.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="/dashboard"
									className="bg-[#BFD8B8] text-[#2F3E34] px-8 py-4 rounded-lg font-semibold hover:bg-[#9BB49C] transition-all duration-300 flex items-center justify-center group">
									Get Started
									<ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</Link>
								<button className="border-2 border-[#BFD8B8] text-[#2F3E34] px-8 py-4 rounded-lg font-semibold hover:bg-[#E6F1E0] transition-colors">
									Watch Demo
								</button>
							</div>
						</div>

						<div className="relative">
							<div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<h3 className="font-semibold text-[#2F3E34]">
											Today&apos;s Matches
										</h3>
										<span className="bg-[#FFE08A] text-[#2F3E34] px-3 py-1 rounded-full text-sm font-medium">
											5 New
										</span>
									</div>
									<div className="space-y-3">
										{[1, 2, 3].map((i) => (
											<div
												key={i}
												className="flex items-center space-x-3 p-3 bg-[#FAFAF8] rounded-lg">
												<div className="w-10 h-10 bg-[#BFD8B8] rounded-full flex items-center justify-center">
													<Users className="w-5 h-5 text-[#2F3E34]" />
												</div>
												<div className="flex-1">
													<p className="font-medium text-[#2F3E34]">
														Senior Developer
													</p>
													<p className="text-sm text-[#7A8C7F]">95% Match</p>
												</div>
												<CheckCircle className="w-5 h-5 text-[#A1D6A1]" />
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Applications Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white section-stagger">
				<div className="max-w-7xl mx-auto">
					<div className="text-center space-y-4 mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-[#2F3E34]">
							Our Applications
						</h2>
						<p className="text-lg text-[#4D5C51] max-w-2xl mx-auto">
							Discover our suite of modern business applications designed to
							streamline your operations.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12">
						{[
							{
								name: "Ourbit",
								subtitle: "Starterkit Bisnis Modern",
								description:
									"Platform manajemen bisnis terpadu untuk startup dan perusahaan yang ingin mengoptimalkan operasional mereka dengan teknologi modern.",
								features: [
									"Dashboard real-time dengan analytics bisnis",
									"Manajemen inventori dan stok otomatis",
									"Sistem POS terintegrasi dengan pembayaran digital",
									"CRM untuk mengelola pelanggan dan leads",
									"Laporan keuangan dan analisis performa",
									"Multi-store management dengan sinkronisasi data",
								],
								color: "from-orange-500 to-red-500",
								icon: "🏪",
							},
							{
								name: "Ourank",
								subtitle: "Talent Management Platform",
								description:
									"Platform manajemen talenta yang menghubungkan perusahaan dengan kandidat berkualitas melalui matching AI dan proses rekrutmen yang efisien.",
								features: [
									"AI-powered talent matching algorithm",
									"Interview scheduling dengan video call terintegrasi",
									"Assessment dan skill testing otomatis",
									"Talent pool management dengan database kandidat",
									"Analytics performa rekrutmen real-time",
									"Multi-company collaboration tools",
								],
								color: "from-green-500 to-blue-500",
								icon: "👥",
							},
							{
								name: "Ourflow",
								subtitle: "Workflow Automation Platform",
								description:
									"Platform otomasi workflow yang membantu perusahaan mengoptimalkan proses bisnis dengan integrasi sistem dan automasi yang cerdas.",
								features: [
									"Visual workflow builder dengan drag & drop",
									"Integrasi API dengan 100+ aplikasi populer",
									"Automated task assignment dan approval",
									"Real-time monitoring dan alerting",
									"Custom dashboard untuk setiap role",
									"Advanced reporting dan analytics",
								],
								color: "from-purple-500 to-pink-500",
								icon: "⚡",
							},
							{
								name: "Ourdata",
								subtitle: "Data Analytics & BI Platform",
								description:
									"Platform analisis data dan business intelligence yang membantu perusahaan mengambil keputusan berbasis data dengan visualisasi yang interaktif.",
								features: [
									"Interactive data visualization dashboard",
									"Real-time data streaming dan processing",
									"Custom report builder dengan templates",
									"Predictive analytics dan forecasting",
									"Data integration dari multiple sources",
									"Role-based access control dan security",
								],
								color: "from-blue-500 to-cyan-500",
								icon: "📊",
							},
						].map((app, index) => (
							<div
								key={index}
								className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 bg-white">
								<div className="flex items-start space-x-4 mb-6">
									<div
										className={`w-16 h-16 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-2xl`}>
										{app.icon}
									</div>
									<div className="flex-1">
										<h3 className="text-2xl font-bold text-[#2F3E34] mb-1">
											{app.name}
										</h3>
										<p className="text-lg font-medium text-[#9BB49C] mb-2">
											{app.subtitle}
										</p>
										<p className="text-[#4D5C51] text-sm leading-relaxed">
											{app.description}
										</p>
									</div>
								</div>

								<div className="space-y-3">
									<h4 className="font-semibold text-[#2F3E34] text-lg mb-4">
										Key Features:
									</h4>
									<ul className="space-y-2">
										{app.features.map((feature, featureIndex) => (
											<li
												key={featureIndex}
												className="flex items-start space-x-3">
												<div className="w-2 h-2 bg-[#BFD8B8] rounded-full mt-2 flex-shrink-0"></div>
												<span className="text-[#4D5C51] text-sm leading-relaxed">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</div>

								<div className="mt-6 pt-6 border-t border-gray-100">
									<button className="w-full bg-[#BFD8B8] text-[#2F3E34] py-3 px-6 rounded-lg font-semibold hover:bg-[#9BB49C] transition-colors duration-200">
										Learn More
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#E6F1E0] section-stagger">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-4 gap-8 text-center">
						{[
							{ value: "10,000+", label: "Active Talents" },
							{ value: "500+", label: "Partner Companies" },
							{ value: "95%", label: "Success Rate" },
							{ value: "24h", label: "Avg. Response Time" },
						].map((stat, index) => (
							<div key={index} className="space-y-2">
								<div className="text-3xl md:text-4xl font-bold text-[#2F3E34]">
									{stat.value}
								</div>
								<div className="text-[#4D5C51] font-medium">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white section-stagger">
				<div className="max-w-4xl mx-auto text-center space-y-8">
					<h2 className="text-3xl md:text-4xl font-bold text-[#2F3E34]">
						Ready to transform your hiring process?
					</h2>
					<p className="text-lg text-[#4D5C51]">
						Join thousands of companies and talents who trust Ourank for their
						career journey.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/dashboard"
							className="bg-[#BFD8B8] text-[#2F3E34] px-8 py-4 rounded-lg font-semibold hover:bg-[#9BB49C] transition-colors">
							Start Free Trial
						</Link>
						<button className="text-[#2F3E34] px-8 py-4 rounded-lg font-semibold hover:bg-[#E6F1E0] transition-colors">
							Contact Sales
						</button>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#2F3E34] text-white py-12 px-4 sm:px-6 lg:px-8 section-stagger">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-4 gap-8">
						<div className="space-y-4">
							<div className="flex items-center space-x-2">
								<div className="w-8 h-8 bg-[#BFD8B8] rounded-lg flex items-center justify-center">
									<span className="text-[#2F3E34] font-bold text-sm">O</span>
								</div>
								<span className="text-xl font-bold">Ourank</span>
							</div>
							<p className="text-gray-300">
								Connecting talent with opportunity through intelligent matching
								and seamless management.
							</p>
						</div>

						{[
							{
								title: "Product",
								links: ["Features", "Pricing", "API", "Integrations"],
							},
							{
								title: "Company",
								links: ["About", "Careers", "Contact", "Blog"],
							},
							{
								title: "Support",
								links: ["Help Center", "Documentation", "Community", "Status"],
							},
						].map((section, index) => (
							<div key={index} className="space-y-4">
								<h3 className="font-semibold">{section.title}</h3>
								<ul className="space-y-2">
									{section.links.map((link) => (
										<li key={link}>
											<a
												href="#"
												className="text-gray-300 hover:text-white transition-colors">
												{link}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
						<p>&copy; 2025 Ourank. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
