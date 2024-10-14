'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { useToast } from "@/components/ui/use-toast"; // Ensure this path is correct
import { Conversation } from './types'; // Ensure this path is correct

const ChatPage: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const toast = useToast(); // Use the toast function

  const formSchema = z.object({
    message: z.string().min(1, 'Message cannot be empty'),
  });

  const { register, handleSubmit, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    // Fetch conversations from the backend
    axios.get('/api/conversations')
      .then((response) => {
        setConversations(response.data);
        if (response.data.length > 0) {
          setSelectedConversationId(response.data[0].id);
        }
      })
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          console.error('Error fetching conversations:', error.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      });
  }, []);

  useEffect(() => {
    if (selectedConversationId) {
      // Fetch messages for the selected conversation
      axios.get(`/api/conversations/${selectedConversationId}`)
        .then((response) => setSelectedConversation(response.data))
        .catch((error: unknown) => {
          if (axios.isAxiosError(error)) {
            console.error('Error fetching conversation:', error.message);
          } else {
            console.error('An unexpected error occurred:', error);
          }
        });
    }
  }, [selectedConversationId]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (selectedConversationId) {
      // Send the message to the backend
      axios.post(`/api/conversations/${selectedConversationId}/messages`, { content: data.message })
        .then(() => {
          toast({
            title: "Message sent!",
            description: "Your message has been sent successfully.",
          });
          reset(); // Clear the input field
        })
        .catch((error: unknown) => {
          if (axios.isAxiosError(error)) {
            console.error('Error sending message:', error.message);
          } else {
            console.error('An unexpected error occurred:', error);
          }
        });
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <ChatList onSelectConversation={setSelectedConversationId} conversations={conversations} />
      <div className="flex-1 p-4 border-l border-gray-200 flex flex-col">
        {selectedConversation && (
          <>
            <ChatWindow conversation={selectedConversation} />
            <form onSubmit={handleSubmit(onSubmit)} className="mt-auto flex">
              <input
                type="text"
                placeholder="Type your message..."
                {...register('message')}
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-green-500"
              />
              <Button type="submit" className="bg-green-500 text-white hover:bg-green-600 transition duration-300">
                Send
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
