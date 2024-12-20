import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NotificationPanel = ({ notifications: initialNotifications = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'milestone':
        return (
          <svg className="w-5 h-5 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'reminder':
        return (
          <svg className="w-5 h-5 text-[#14B8A6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-[#F472B6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="relative">
      {/* Notification Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-[#111827] hover:bg-[#F9FAFB] 
          rounded-full transition-colors duration-200"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
          />
        </svg>
        
        {/* Unread Badge */}
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 
            bg-[#6366F1] text-white text-xs font-bold rounded-full h-5 w-5 
            flex items-center justify-center"
          >
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      <div className={`absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl 
        shadow-lg border border-[#E5E7EB] overflow-hidden transition-all duration-300 
        origin-top transform ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'}`}
      >
        <div className="p-4 bg-gradient-to-r from-[#6366F1] to-[#14B8A6]">
          <h3 className="text-lg font-semibold text-white">Notifications</h3>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-[#6B7280]">
              No notifications yet
            </div>
          ) : (
            <div className="divide-y divide-[#E5E7EB]">
              {notifications.map((notification, index) => (
                <div 
                  key={notification.id}
                  className={`p-4 hover:bg-[#F9FAFB] transition-colors duration-200
                    ${notification.read ? 'opacity-75' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-[#111827] font-medium">
                        {notification.message}
                      </p>
                      <p className="text-sm text-[#6B7280] mt-1">
                        {notification.timestamp}
                      </p>
                    </div>

                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-sm text-[#14B8A6] hover:text-[#6366F1] 
                          transition-colors duration-200"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

NotificationPanel.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['milestone', 'reminder', 'default']).isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  })),
};

export default NotificationPanel;
