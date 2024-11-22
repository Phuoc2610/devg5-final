import React, { useState, useRef, useEffect } from "react";
import { FiSend, FiPaperclip, FiMic, FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { BsEmojiSmile, BsThreeDotsVertical } from "react-icons/bs";

const ChatInterface = () => {
    const [activeUsers] = useState([
        {
            id: 1,
            name: "John Doe",
            avatar: "JD",
            status: "online",
            lastSeen: "just now"
        },
        {
            id: 2,
            name: "Jane Smith",
            avatar: "JS",
            status: "online",
            lastSeen: "5m ago"
        },
        {
            id: 3,
            name: "Mike Johnson",
            avatar: "MJ",
            status: "offline",
            lastSeen: "1h ago"
        }
    ]);

    const [selectedUser, setSelectedUser] = useState(activeUsers[0]);
    const [messages, setMessages] = useState({
        1: [
            {
                id: 1,
                text: "Hey there! How are you?",
                sender: "other",
                timestamp: "09:30 AM",
                isRead: true,
            },
            {
                id: 2,
                text: "I'm doing great! Thanks for asking.",
                sender: "self",
                timestamp: "09:31 AM",
                isRead: true,
            },
        ],
        2: [
            {
                id: 1,
                text: "Hi Jane! Nice to meet you!",
                sender: "self",
                timestamp: "10:00 AM",
                isRead: true,
            }
        ],
        3: [
            {
                id: 1,
                text: "Hello Mike!",
                sender: "self",
                timestamp: "11:00 AM",
                isRead: false,
            }
        ]
    });

    const [newMessage, setNewMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showEmojis, setShowEmojis] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const messagesEndRef = useRef(null);

    const emojis = ["😀", "😂", "😊", "😍", "🥰", "😎", "🤔", "👍", "❤️", "🎉"];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const newMsg = {
                id: messages[selectedUser.id].length + 1,
                text: newMessage,
                sender: "self",
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                isRead: false,
            };
            setMessages(prev => ({
                ...prev,
                [selectedUser.id]: [...prev[selectedUser.id], newMsg]
            }));
            setNewMessage("");
            setShowEmojis(false);
        }
    };

    const handleEmojiClick = (emoji) => {
        setNewMessage(newMessage + emoji);
    };

    const handleFileAttachment = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("File attached:", file);
        }
    };

    const toggleVoiceRecording = () => {
        setIsRecording(!isRecording);
    };

    const filteredMessages = messages[selectedUser.id].filter((msg) =>
        msg.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`h-screen flex ${darkMode ? "dark bg-gray-900" : "bg-gray-100"}`}>
            {/* Active Users Sidebar */}
            <div className="w-80 bg-white dark:bg-gray-800 border-r dark:border-gray-700 overflow-y-auto">
                <div className="p-4 border-b dark:border-gray-700">
                    <h2 className="text-xl font-semibold dark:text-white">Active Users</h2>
                </div>
                <div className="space-y-2 p-4">
                    {activeUsers.map((user) => (
                        <div
                            key={user.id}
                            onClick={() => setSelectedUser(user)}
                            className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${selectedUser.id === user.id
                                    ? "bg-blue-50 dark:bg-gray-700"
                                    : "hover:bg-gray-50 dark:hover:bg-gray-700"
                                }`}
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                {user.avatar}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium dark:text-white">{user.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {user.status === "online" ? (
                                        <span className="flex items-center">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            Online
                                        </span>
                                    ) : (
                                        `Last seen ${user.lastSeen}`
                                    )}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Interface */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            {selectedUser.avatar}
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold dark:text-white">{selectedUser.name}</h2>
                            {isTyping && (
                                <p className="text-sm text-gray-500 dark:text-gray-400">typing...</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            {darkMode ? (
                                <FiSun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            ) : (
                                <FiMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            )}
                        </button>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search messages..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FiSearch className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <BsThreeDotsVertical className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer" />
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-800">
                    {filteredMessages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === "self" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`max-w-[70%] rounded-lg p-3 ${message.sender === "self"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-100 dark:bg-gray-700 dark:text-white"
                                    }`}
                            >
                                <p className="break-words">{message.text}</p>
                                <div className="flex items-center justify-end space-x-1 mt-1">
                                    <span className="text-xs opacity-75">{message.timestamp}</span>
                                    {message.sender === "self" && (
                                        <span className="text-xs">{message.isRead ? "✓✓" : "✓"}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="border-t dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
                    <div className="flex items-center space-x-4">
                        <input
                            type="file"
                            id="file-attachment"
                            className="hidden"
                            onChange={handleFileAttachment}
                        />
                        <label
                            htmlFor="file-attachment"
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                        >
                            <FiPaperclip className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </label>
                        <button
                            onClick={() => setShowEmojis(!showEmojis)}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <BsEmojiSmile className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                        </button>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Type a message..."
                                className="w-full px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {showEmojis && (
                                <div className="absolute bottom-full mb-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
                                    <div className="grid grid-cols-5 gap-2">
                                        {emojis.map((emoji, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleEmojiClick(emoji)}
                                                className="text-xl hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded"
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={toggleVoiceRecording}
                            className={`p-2 rounded-full ${isRecording
                                    ? "bg-red-500 text-white"
                                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                        >
                            <FiMic className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleSendMessage}
                            className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
                        >
                            <FiSend className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;