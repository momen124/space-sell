// ChatList.tsx
'use client';

import React from 'react';
import { Conversation } from './types'; // Ensure this path is correct
import { List, ListItem } from '@/components/ui/List'; // Ensure this path is correct

interface ChatListProps {
  conversations: Conversation[];
  onSelectConversation: (id: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ conversations, onSelectConversation }) => {
  return (
    <div className="w-1/3 border-r border-gray-200 bg-white">
      <h2 className="text-lg font-semibold p-4 text-green-600">Conversations</h2>
      <List>
        {conversations.map((conversation) => (
          <ListItem
            key={conversation.id}
            className="p-4 hover:bg-green-100 transition duration-300"
            onClick={() => onSelectConversation(conversation.id)}
          >
            <div className="text-green-800">{conversation.lastMessage}</div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChatList;
