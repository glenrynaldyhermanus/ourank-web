"use client";

import React from "react";
import { User, MapPin, Briefcase, Star, Mail, Phone } from "lucide-react";

export default function TalentPoolPage() {
	const candidates = [
		{
			id: 1,
			name: "John Doe",
			title: "Senior Frontend Developer",
			location: "Jakarta, Indonesia",
			experience: "5 years",
			skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
			rating: 4.8,
			email: "john.doe@email.com",
			phone: "+62 812 3456 7890",
			avatar: "JD",
		},
		{
			id: 2,
			name: "Sarah Smith",
			title: "Data Scientist",
			location: "Bandung, Indonesia",
			experience: "3 years",
			skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
			rating: 4.6,
			email: "sarah.smith@email.com",
			phone: "+62 823 4567 8901",
			avatar: "SS",
		},
		{
			id: 3,
			name: "Mike Johnson",
			title: "Product Manager",
			location: "Surabaya, Indonesia",
			experience: "7 years",
			skills: ["Product Strategy", "Agile", "User Research", "Analytics"],
			rating: 4.9,
			email: "mike.johnson@email.com",
			phone: "+62 834 5678 9012",
			avatar: "MJ",
		},
	];

	return (
		<div className="min-h-screen bg-[#FAFAF8] py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-[#2F3E34]">Talent Pool</h1>
					<p className="text-[#4D5C51] mt-2">
						Discover and connect with top talent
					</p>
				</div>

				<div className="grid gap-6">
					{candidates.map((candidate) => (
						<div
							key={candidate.id}
							className="bg-white rounded-xl shadow-sm border border-[#D6DED5] p-6">
							<div className="flex items-start justify-between">
								<div className="flex-1">
									<div className="flex items-center space-x-3 mb-2">
										<div className="w-12 h-12 bg-[#BFD8B8] rounded-lg flex items-center justify-center">
											<span className="text-[#2F3E34] font-semibold">
												{candidate.avatar}
											</span>
										</div>
										<div>
											<h3 className="text-xl font-semibold text-[#2F3E34]">
												{candidate.name}
											</h3>
											<p className="text-[#4D5C51]">{candidate.title}</p>
										</div>
										<div className="flex items-center space-x-1">
											<Star className="w-4 h-4 text-yellow-400 fill-current" />
											<span className="text-sm font-medium text-[#2F3E34]">
												{candidate.rating}
											</span>
										</div>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#7A8C7F] mb-4">
										<div className="flex items-center space-x-2">
											<MapPin className="w-4 h-4" />
											<span>{candidate.location}</span>
										</div>
										<div className="flex items-center space-x-2">
											<Briefcase className="w-4 h-4" />
											<span>{candidate.experience} experience</span>
										</div>
										<div className="flex items-center space-x-2">
											<Mail className="w-4 h-4" />
											<span>{candidate.email}</span>
										</div>
										<div className="flex items-center space-x-2">
											<Phone className="w-4 h-4" />
											<span>{candidate.phone}</span>
										</div>
									</div>

									<div className="flex flex-wrap gap-2">
										{candidate.skills.map((skill, index) => (
											<span
												key={index}
												className="px-3 py-1 bg-[#E6F1E0] text-[#2F3E34] rounded-full text-sm">
												{skill}
											</span>
										))}
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
