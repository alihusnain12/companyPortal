"use client"
import React from "react";
import Image from "next/image";
import { FaEdit, FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import pic from "../app/public/dp.jpg";
import Graph from "./garph&circle";
import { useRouter } from "next/navigation";

const teamMembers = [
  {
    id: 1,
    name: "Arlene McCoy",
    role: "Account Manager",
    contact: "john@email.com",
    tasksAssigned: 8,
    tasksCompleted: 5,
    image: pic
  },
  {
    id: 2,
    name: "Wade Warren",
    role: "Payroll Manager",
    contact: "john@email.com",
    tasksAssigned: 8,
    tasksCompleted: 5,
    image: pic
  },
  {
    id: 3,
    name: "Marvin McKinney",
    role: "Self Assess Manager",
    contact: "john@email.com",
    tasksAssigned: 8,
    tasksCompleted: 5,
    image: pic
  },
  {
    id: 4,
    name: "Albert Flores",
    role: "Account Manager",
    contact: "john@email.com",
    tasksAssigned: 8,
    tasksCompleted: 5,
    image: pic
  },
  {
    id: 5,
    name: "Savannah Nguyen",
    role: "Account Manager",
    contact: "john@email.com",
    tasksAssigned: 8,
    tasksCompleted: 5,
    image: pic
  },
];

const FeedbackSummary = () => {
  const ratings = [
    { stars: 5 },
    { stars: 4 },
    { stars: 3 },
    { stars: 2},
    { stars: 1 },
  ];

  const totalRatings = ratings.reduce((acc, rating) => acc + rating.count, 0);

  const router=useRouter()
  const nextpg=()=>{
    router.push("/teamManagement2")
  }
  return (
    <div >
      {/* Team Members Table Section */}
      <div className="container mx-auto p-4 mt-8 flex space-x-4">
      <div className="w-2/3 bg-white rounded-md shadow-lg p-4">
        <h1 className="text-2xl font-bold mb-4">Team Members List</h1>
        <table className="min-w-full bg-gray-50">
          <thead>
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Team Member</th>
              <th className="py-2">Role</th>
              <th className="py-2">Contact</th>
              <th className="py-2">Tasks Assigned</th>
              <th className="py-2">Tasks Completed</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {teamMembers.map((member) => (
              <tr key={member.id} className="text-center">
                <td className="py-2">{String(member.id).padStart(2, "0")}</td>
                <td className="py-2 flex items-center justify-center space-x-2 text-left">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={32} // Adjust the width as needed
                    height={32} // Adjust the height as needed
                    className="rounded-full"
                  />
                  <span className="text-left">{member.name}</span>
                </td>
                <td className="py-2">{member.role}</td>
                <td className="py-2">{member.contact}</td>
                <td className="py-2">{member.tasksAssigned}</td>
                <td className="py-2">{member.tasksCompleted}</td>
                <td className="py-2 flex items-center justify-center space-x-4">
                  <FaEdit className="text-blue-500 cursor-pointer" title="Edit" />
                  <FaEye className="text-green-500 cursor-pointer" title="View" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button className="border text-black px-4 py-2 rounded flex items-center">
            <FaArrowLeft className="mr-2" /> Previous
          </button>
          <button className="border text-black px-4 py-2 rounded flex items-center " onClick={nextpg}>
            Next <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      {/* Rating Graph Section */}
      <div className="w-1/3 bg-white rounded-md shadow-lg p-4">
        <div className="w-full max-w-xs">
          <h2 className="text-xl font-bold mb-4 px-4 text-center">Client Feedback<br/> Rate</h2>
          {ratings.map((rating) => (
            <div key={rating.stars} className="flex items-center mb-2 mt-8">
              <span className="w-8 text-sm font-semibold">{rating.stars} ★</span>
              <div className="flex-1 mx-2 bg-gray-200 rounded h-4">
                <div
                  className="bg-green-500 h-4 rounded"
                  style={{ width: `${(rating.count / totalRatings) * 100}%` }}
                ></div>
              </div>
              <span className="w-8 text-sm font-semibold">{rating.count}</span>
            </div>
          ))}
          <div className="flex items-center space-x-5 justify-center mt-7">
            <Image src={pic} className="w-12 h-12 rounded-full " alt="ali"/>
            <p className="bold  font-bold">Henry</p>
          </div>
          <p className="text-sm text-gray-500 text-center mt-2">Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua</p>
        </div>
      </div>
      </div>
      {/* graph&circle */}
      <Graph/>
    </div>
  );
};

export default FeedbackSummary;
