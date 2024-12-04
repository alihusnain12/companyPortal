"use client";
import { useState } from "react";
import { FaPhone, FaVideo } from "react-icons/fa";
import Image from "next/image";
import pic from "../app/public/dp.jpg"
import pic1 from "../app/public/dp2.jpg"
import pic2 from "../app/public/dp3.jpg"
const chats = [
  {
    id: 1,
    name: "Luis Pittman",
    lastMessage:
      "Hi, I wonder when if there is going to be anything new for spring?",
    timestamp: "12:24 AM",
    imageUrl: pic,
  },
  {
    id: 2,
    name: "John Doe",
    lastMessage: "Can you provide me with more details?",
    timestamp: "11:00 AM",
    imageUrl: pic2,
  },
  {
    id: 3,
    name: "Jane Smith",
    lastMessage: "Thank you for your help!",
    timestamp: "10:30 AM",
    imageUrl:pic1,
  },
  // Add more chats as needed
];

const messages = [
  {
    id: 1,
    sender: "Luis Pittman",
    text: "Hi, I wonder when if there is going to be anything new for spring?",
    timestamp: "12:24 AM",
  },
  {
    id: 2,
    sender: "You",
    text: "Hi Luis, can you please be more specific?",
    timestamp: "12:31 AM",
  },
  {
    id: 3,
    sender: "Luis Pittman",
    text: "Sure, I want to know when the new services will be done",
    timestamp: "12:35 AM",
  },
  {
    id: 4,
    sender: "You",
    text: "Thank you for taking interest in our services. You can have a look at the upcoming services",
    timestamp: "12:45 AM",
  },
];

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);

  return (
    <div className="flex h-screen shadow-2xl rounded-xl mt-7">
      {/* Sidebar */}
      <div className="w-1/3 bg-white text-black border-r border-gray-300 rounded-l-xl">
        <div className="p-4 ">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black focus:outline-none"
          />
        </div>
        <div className="overflow-y-auto h-full">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 flex items-center cursor-pointer hover:bg-gray-100 ${
                selectedChat.id === chat.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border overflow-hidden">
                <Image
                  src={chat.imageUrl}
                  alt={chat.name}
                  width={48}
                  height={48}
                />
              </div>
              <div className="ml-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">{chat.name}</p>
                  <span className="text-sm text-gray-500">
                    {chat.timestamp}
                  </span>
                </div>
                <p className="text-gray-500">{chat.lastMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-gray-100 flex flex-col rounded-r-xl">
        <div className="p-4 border-b border-gray-300 bg-white flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border overflow-hidden">
              <Image
                src={selectedChat.imageUrl}
                alt={selectedChat.name}
                width={48}
                height={48}
              />
            </div>
            <p className="ml-4 text-xl font-semibold">{selectedChat.name}</p>
          </div>
          <div className="flex space-x-4">
            <FaPhone className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <FaVideo className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === "You" ? "text-right" : "text-left"
              }`}
            >
              <p
                className={`inline-block px-4 py-2 rounded-lg ${
                  message.sender === "You"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {message.text}
              </p>
              <span className="block text-sm text-gray-500 mt-1">
                {message.timestamp}
              </span>
            </div>
          ))}
        </div>
        <div className="p-4 bg-white border-t border-gray-300 flex items-center">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
          />
          <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
