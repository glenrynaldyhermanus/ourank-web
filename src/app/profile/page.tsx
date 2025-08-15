"use client";

import React from "react";
import {
	User,
	Mail,
	Phone,
	MapPin,
	Briefcase,
	Calendar,
	Edit,
} from "lucide-react";

export default function ProfilePage() {
	const user = {
		name: "John Doe",
		email: "john.doe@email.com",
		phone: "+62 812 3456 7890",
		location: "Jakarta, Indonesia",
		title: "HR Manager",
		company: "TechCorp",
		joinDate: "January 2023",
		avatar: "JD",
	};

	return (
		<div className="min-h-screen bg-[#FAFAF8] py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-[#2F3E34]">Profile</h1>
					<p className="text-[#4D5C51] mt-2">Manage your account information</p>
				</div>

				<div className="bg-white rounded-xl shadow-sm border border-[#D6DED5] p-8">
					<div className="flex items-start justify-between mb-8">
						<div className="flex items-center space-x-4">
							<div className="w-20 h-20 bg-[#BFD8B8] rounded-full flex items-center justify-center">
								<span className="text-[#2F3E34] font-bold text-xl">
									{user.avatar}
								</span>
							</div>
							<div>
								<h2 className="text-2xl font-bold text-[#2F3E34]">
									{user.name}
								</h2>
								<p className="text-[#4D5C51]">
									{user.title} at {user.company}
								</p>
							</div>
						</div>
						<button className="flex items-center space-x-2 px-4 py-2 border border-[#D6DED5] text-[#4D5C51] rounded-lg hover:bg-[#E6F1E0] transition-colors">
							<Edit className="w-4 h-4" />
							<span>Edit Profile</span>
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<Mail className="w-5 h-5 text-[#7A8C7F]" />
								<div>
									<p className="text-sm text-[#7A8C7F]">Email</p>
									<p className="text-[#2F3E34] font-medium">{user.email}</p>
								</div>
							</div>

							<div className="flex items-center space-x-3">
								<Phone className="w-5 h-5 text-[#7A8C7F]" />
								<div>
									<p className="text-sm text-[#7A8C7F]">Phone</p>
									<p className="text-[#2F3E34] font-medium">{user.phone}</p>
								</div>
							</div>

							<div className="flex items-center space-x-3">
								<MapPin className="w-5 h-5 text-[#7A8C7F]" />
								<div>
									<p className="text-sm text-[#7A8C7F]">Location</p>
									<p className="text-[#2F3E34] font-medium">{user.location}</p>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<Briefcase className="w-5 h-5 text-[#7A8C7F]" />
								<div>
									<p className="text-sm text-[#7A8C7F]">Position</p>
									<p className="text-[#2F3E34] font-medium">{user.title}</p>
								</div>
							</div>

							<div className="flex items-center space-x-3">
								<User className="w-5 h-5 text-[#7A8C7F]" />
								<div>
									<p className="text-sm text-[#7A8C7F]">Company</p>
									<p className="text-[#2F3E34] font-medium">{user.company}</p>
								</div>
							</div>

							<div className="flex items-center space-x-3">
								<Calendar className="w-5 h-5 text-[#7A8C7F]" />
								<div>
									<p className="text-sm text-[#7A8C7F]">Joined</p>
									<p className="text-[#2F3E34] font-medium">{user.joinDate}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
