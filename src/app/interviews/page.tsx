"use client";

import React from "react";
import { Calendar, Clock, Video, Phone, MapPin, User } from "lucide-react";

export default function InterviewsPage() {
	const interviews = [
		{
			id: 1,
			candidate: "John Doe",
			position: "Senior Frontend Developer",
			company: "TechCorp",
			date: "2024-01-20",
			time: "10:00 AM",
			type: "video",
			status: "scheduled",
		},
		{
			id: 2,
			candidate: "Sarah Smith",
			position: "Data Scientist",
			company: "DataFlow",
			date: "2024-01-21",
			time: "2:30 PM",
			type: "onsite",
			status: "confirmed",
		},
		{
			id: 3,
			candidate: "Mike Johnson",
			position: "Product Manager",
			company: "InnovateCo",
			date: "2024-01-22",
			time: "11:00 AM",
			type: "phone",
			status: "pending",
		},
	];

	return (
		<div className="min-h-screen bg-[#FAFAF8] py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-[#2F3E34]">Interviews</h1>
					<p className="text-[#4D5C51] mt-2">
						Manage and schedule candidate interviews
					</p>
				</div>

				<div className="grid gap-6">
					{interviews.map((interview) => (
						<div
							key={interview.id}
							className="bg-white rounded-xl shadow-sm border border-[#D6DED5] p-6">
							<div className="flex items-center justify-between">
								<div className="flex-1">
									<div className="flex items-center space-x-3 mb-2">
										<h3 className="text-lg font-semibold text-[#2F3E34]">
											{interview.candidate}
										</h3>
										<span className="px-2 py-1 rounded-full text-xs font-medium bg-[#BFD8B8] text-[#2F3E34]">
											{interview.status}
										</span>
									</div>
									<p className="text-[#4D5C51] mb-2">
										{interview.position} at {interview.company}
									</p>
									<div className="flex items-center space-x-4 text-sm text-[#7A8C7F]">
										<span className="flex items-center space-x-1">
											<Calendar className="w-4 h-4" />
											<span>{interview.date}</span>
										</span>
										<span className="flex items-center space-x-1">
											<Clock className="w-4 h-4" />
											<span>{interview.time}</span>
										</span>
										<span className="flex items-center space-x-1">
											{interview.type === "video" ? (
												<Video className="w-4 h-4" />
											) : interview.type === "phone" ? (
												<Phone className="w-4 h-4" />
											) : (
												<MapPin className="w-4 h-4" />
											)}
											<span className="capitalize">{interview.type}</span>
										</span>
									</div>
								</div>

								<div className="flex space-x-2">
									<button className="px-4 py-2 text-sm bg-[#BFD8B8] text-[#2F3E34] rounded-lg hover:bg-[#9BB49C] transition-colors">
										Join
									</button>
									<button className="px-4 py-2 text-sm border border-[#D6DED5] text-[#4D5C51] rounded-lg hover:bg-[#E6F1E0] transition-colors">
										Reschedule
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
