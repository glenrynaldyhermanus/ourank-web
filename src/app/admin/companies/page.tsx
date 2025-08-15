"use client";

import React from "react";
import { Building, Users, MapPin, Globe, Mail, Phone } from "lucide-react";

export default function CompaniesPage() {
	const companies = [
		{
			id: 1,
			name: "TechCorp",
			industry: "Technology",
			location: "Jakarta, Indonesia",
			employees: "500-1000",
			website: "techcorp.com",
			email: "hr@techcorp.com",
			phone: "+62 21 1234 5678",
			description:
				"Leading technology company specializing in software development and digital solutions.",
		},
		{
			id: 2,
			name: "DataFlow",
			industry: "Data & Analytics",
			location: "Bandung, Indonesia",
			employees: "100-500",
			website: "dataflow.co.id",
			email: "careers@dataflow.co.id",
			phone: "+62 22 8765 4321",
			description:
				"Data analytics and machine learning company focused on business intelligence solutions.",
		},
		{
			id: 3,
			name: "InnovateCo",
			industry: "Startup",
			location: "Surabaya, Indonesia",
			employees: "50-100",
			website: "innovateco.id",
			email: "jobs@innovateco.id",
			phone: "+62 31 5555 1234",
			description:
				"Innovative startup building next-generation products and services.",
		},
	];

	return (
		<div className="min-h-screen bg-[#FAFAF8] py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-[#2F3E34]">Companies</h1>
					<p className="text-[#4D5C51] mt-2">
						Discover and connect with leading companies
					</p>
				</div>

				<div className="grid gap-6">
					{companies.map((company) => (
						<div
							key={company.id}
							className="bg-white rounded-xl shadow-sm border border-[#D6DED5] p-6">
							<div className="flex items-start justify-between">
								<div className="flex-1">
									<div className="flex items-center space-x-3 mb-2">
										<div className="w-12 h-12 bg-[#BFD8B8] rounded-lg flex items-center justify-center">
											<Building className="w-6 h-6 text-[#2F3E34]" />
										</div>
										<div>
											<h3 className="text-xl font-semibold text-[#2F3E34]">
												{company.name}
											</h3>
											<p className="text-[#4D5C51]">{company.industry}</p>
										</div>
									</div>

									<p className="text-[#4D5C51] mb-4">{company.description}</p>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#7A8C7F]">
										<div className="flex items-center space-x-2">
											<MapPin className="w-4 h-4" />
											<span>{company.location}</span>
										</div>
										<div className="flex items-center space-x-2">
											<Users className="w-4 h-4" />
											<span>{company.employees} employees</span>
										</div>
										<div className="flex items-center space-x-2">
											<Globe className="w-4 h-4" />
											<span>{company.website}</span>
										</div>
										<div className="flex items-center space-x-2">
											<Mail className="w-4 h-4" />
											<span>{company.email}</span>
										</div>
									</div>
								</div>

								<div className="flex flex-col space-y-2">
									<button className="px-4 py-2 text-sm bg-[#BFD8B8] text-[#2F3E34] rounded-lg hover:bg-[#9BB49C] transition-colors">
										View Profile
									</button>
									<button className="px-4 py-2 text-sm border border-[#D6DED5] text-[#4D5C51] rounded-lg hover:bg-[#E6F1E0] transition-colors">
										Contact
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
