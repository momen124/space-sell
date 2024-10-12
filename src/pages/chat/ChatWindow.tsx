import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button"; // Assuming you have a custom button component

interface Message {
  text: string;
  time: string;
  sender: 'self' | 'other'; // Ensure this matches the data being passed
}

const schema = z.object({
  newMessage: z.string().min(1, 'Message cannot be empty'),
});

const ChatWindow: React.FC<{ conversationId: string }> = ({ conversationId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  
  const { register, handleSubmit, reset } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = io('http://localhost:5000'); // Update with your backend WebSocket URL
    setSocket(socket);

    // Fetch previous messages for the selected conversation
    socket.emit('joinConversation', conversationId);
    socket.on('loadMessages', (msgs: Message[]) => {
      setMessages(msgs);
    });

    // Listen for new messages
    socket.on('newMessage', (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [conversationId]);

  const onSubmit = (data: z.infer<typeof schema>) => {
    const message: Message = {
      text: data.newMessage,
      time: new Date().toLocaleTimeString(),
      sender: 'self',
    };

    // Send message through WebSocket
    socket?.emit('sendMessage', { conversationId, message });

    // Update state
    setMessages((prevMessages) => [...prevMessages, message]);
    reset(); // Clear the input field
  };

  return (
    <div className="w-2/3 flex flex-col">
      <div className="bg-green-500 p-4 border-b border-gray-200">
        <h3 className="font-semibold text-white">Chat</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-white">
        <div className="flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end ${msg.sender === 'self' ? 'justify-end' : ''}`}>
              {msg.sender === 'self' && <span className="text-xs text-gray-500 mr-2">{msg.time}</span>}
              <div className={`${msg.sender === 'self' ? 'bg-green-200' : 'bg-gray-300'} rounded-lg py-2 px-4 max-w-xs`}>
                <p>{msg.text}</p>
              </div>
              {msg.sender === 'other' && <span className="text-xs text-gray-500 ml-2">{msg.time}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 border-t border-gray-200">
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            {...register('newMessage')}
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2"
          />
          <Button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-r-md">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
