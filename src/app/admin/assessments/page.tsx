"use client";

import React from "react";
import {
	Plus,
	Search,
	Filter,
	Calendar,
	Clock,
	CheckCircle,
	AlertCircle,
} from "lucide-react";

export default function AssessmentsPage() {
	const assessments = [
		{
			id: 1,
			title: "Frontend Developer Assessment",
			candidate: "John Doe",
			status: "completed",
			score: 85,
			duration: "45 min",
			date: "2024-01-15",
		},
		{
			id: 2,
			title: "Data Scientist Assessment",
			candidate: "Sarah Smith",
			status: "in-progress",
			score: null,
			duration: "60 min",
			date: "2024-01-16",
		},
		{
			id: 3,
			title: "Product Manager Assessment",
			candidate: "Mike Johnson",
			status: "pending",
			score: null,
			duration: "90 min",
			date: "2024-01-17",
		},
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "completed":
				return "bg-green-100 text-green-800";
			case "in-progress":
				return "bg-yellow-100 text-yellow-800";
			case "pending":
				return "bg-gray-100 text-gray-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const getStatusIcon = (status: string) => {
		switch (status) {
			case "completed":
				return <CheckCircle className="w-4 h-4" />;
			case "in-progress":
				return <Clock className="w-4 h-4" />;
			case "pending":
				return <AlertCircle className="w-4 h-4" />;
			default:
				return <AlertCircle className="w-4 h-4" />;
		}
	};

	return (
		<div className="min-h-screen bg-[#FAFAF8] py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-8">
					<div className="flex justify-between items-center">
						<div>
							<h1 className="text-3xl font-bold text-[#2F3E34]">Assessments</h1>
							<p className="text-[#4D5C51] mt-2">
								Manage and track candidate assessments
							</p>
						</div>
						<button className="bg-[#BFD8B8] text-[#2F3E34] px-4 py-2 rounded-lg font-medium hover:bg-[#9BB49C] transition-colors flex items-center space-x-2">
							<Plus className="w-4 h-4" />
							<span>Create Assessment</span>
						</button>
					</div>
				</div>

				{/* Filters */}
				<div className="bg-white rounded-xl shadow-sm border border-[#D6DED5] p-6 mb-8">
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="flex-1">
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A8C7F] w-4 h-4" />
								<input
									type="text"
									placeholder="Search assessments..."
									className="w-full pl-10 pr-4 py-2 border border-[#D6DED5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BFD8B8] focus:border-transparent"
								/>
							</div>
						</div>
						<div className="flex gap-2">
							<button className="flex items-center space-x-2 px-4 py-2 border border-[#D6DED5] rounded-lg text-[#4D5C51] hover:bg-[#E6F1E0] transition-colors">
								<Filter className="w-4 h-4" />
								<span>Filter</span>
							</button>
							<button className="flex items-center space-x-2 px-4 py-2 border border-[#D6DED5] rounded-lg text-[#4D5C51] hover:bg-[#E6F1E0] transition-colors">
								<Calendar className="w-4 h-4" />
								<span>Date</span>
							</button>
						</div>
					</div>
				</div>

				{/* Assessments List */}
				<div className="bg-white rounded-xl shadow-sm border border-[#D6DED5] overflow-hidden">
					<div className="px-6 py-4 border-b border-[#D6DED5]">
						<h2 className="text-lg font-semibold text-[#2F3E34]">
							Recent Assessments
						</h2>
					</div>

					<div className="divide-y divide-[#D6DED5]">
						{assessments.map((assessment) => (
							<div
								key={assessment.id}
								className="p-6 hover:bg-[#E6F1E0] transition-colors">
								<div className="flex items-center justify-between">
									<div className="flex-1">
										<div className="flex items-center space-x-3 mb-2">
											<h3 className="text-lg font-semibold text-[#2F3E34]">
												{assessment.title}
											</h3>
											<span
												className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(
													assessment.status
												)}`}>
												{getStatusIcon(assessment.status)}
												<span className="capitalize">{assessment.status}</span>
											</span>
										</div>
										<p className="text-[#4D5C51] mb-2">
											Candidate: {assessment.candidate}
										</p>
										<div className="flex items-center space-x-4 text-sm text-[#7A8C7F]">
											<span className="flex items-center space-x-1">
												<Clock className="w-4 h-4" />
												<span>{assessment.duration}</span>
											</span>
											<span className="flex items-center space-x-1">
												<Calendar className="w-4 h-4" />
												<span>{assessment.date}</span>
											</span>
											{assessment.score && (
												<span className="text-[#2F3E34] font-medium">
													Score: {assessment.score}%
												</span>
											)}
										</div>
									</div>

									<div className="flex space-x-2">
										<button className="px-3 py-1 text-sm border border-[#BFD8B8] text-[#2F3E34] rounded hover:bg-[#E6F1E0] transition-colors">
											View
										</button>
										<button className="px-3 py-1 text-sm bg-[#BFD8B8] text-[#2F3E34] rounded hover:bg-[#9BB49C] transition-colors">
											Edit
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
