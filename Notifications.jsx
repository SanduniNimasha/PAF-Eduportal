import React, { useEffect, useState } from "react";

// Dummy data for notifications
const dummyNotifications = [
  { id: 1, message: "Alice (you follow) posted a new lesson!", read: false, time: "2 min ago" },
  { id: 2, message: "Bob commented on your answer.", read: false, time: "10 min ago" },
  { id: 3, message: "Your post was liked by Carol.", read: true, time: "1 hour ago" },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // In real app, fetch notifications from backend
    setNotifications(dummyNotifications);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-green-50 to-yellow-50 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 mt-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((notif) => (
            <li key={notif.id} className={`flex items-center gap-3 p-4 rounded-xl border ${notif.read ? 'bg-gray-50' : 'bg-yellow-100 border-yellow-300'} shadow-sm`}>
              <span className={`w-2 h-2 rounded-full ${notif.read ? 'bg-gray-400' : 'bg-yellow-500'}`}></span>
              <div className="flex-1">
                <div className="text-blue-900 font-medium">{notif.message}</div>
                <div className="text-xs text-blue-400 mt-1">{notif.time}</div>
              </div>
              {!notif.read && <button className="text-xs text-blue-600 hover:underline" onClick={() => setNotifications(notifications.map(n => n.id === notif.id ? { ...n, read: true } : n))}>Mark as read</button>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
