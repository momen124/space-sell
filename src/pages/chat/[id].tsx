'use client'

import { useState, useRef, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Send, Paperclip, ShoppingBag, DollarSign } from "lucide-react"

interface Message {
  id: number
  sender: 'user' | 'other'
  content: string
  timestamp: string
}

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export default function ChatConversation() {
  const { id } = useParams()
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'other', content: "Hi, is the iPhone 12 still available?", timestamp: "10:00 AM" },
    { id: 2, sender: 'user', content: "Yes, it's still available. Are you interested?", timestamp: "10:05 AM" },
    { id: 3, sender: 'other', content: "Great! What's the condition of the phone?", timestamp: "10:07 AM" },
    { id: 4, sender: 'user', content: "It's in excellent condition. Only used for a few months.", timestamp: "10:10 AM" },
    { id: 5, sender: 'other', content: "Sounds good. Can we negotiate on the price?", timestamp: "10:12 AM" },
  ])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const product: Product = {
    id: 1,
    name: "iPhone 12",
    price: 599,
    image: "/placeholder.svg?height=100&width=100"
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        sender: 'user',
        content: newMessage.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, newMsg])
      setNewMessage('')
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-10">
        <button className="mr-4">
          <ArrowLeft size={24} />
        </button>
        <Avatar className="h-10 w-10">
          <AvatarImage src={`https://i.pravatar.cc/150?u=${id}`} alt="Chat partner" />
          <AvatarFallback>CP</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <h1 className="text-lg font-semibold text-gray-800">User {id}</h1>
          <p className="text-xs text-gray-500">Online</p>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex items-center">
          <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md mr-4" />
          <div>
            <h2 className="font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        </div>
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`max-w-[75%] p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
              <p className="text-sm">{message.content}</p>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>{message.timestamp}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>
      <footer className="bg-white shadow-sm p-4 sticky bottom-0">
        <div className="flex items-center space-x-2 mb-2">
          <Button variant="outline" size="sm" className="flex-1">
            <ShoppingBag size={16} className="mr-2" />
            View Product
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <DollarSign size={16} className="mr-2" />
            Make Offer
          </Button>
        </div>
        <div className="flex items-center">
          <button className="mr-2">
            <Paperclip size={24} className="text-gray-500" />
          </button>
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 rounded-full bg-gray-100"
          />
          <button className="ml-2" onClick={handleSendMessage}>
            <Send size={24} className="text-blue-500" />
          </button>
        </div>
      </footer>
    </div>
  )
}