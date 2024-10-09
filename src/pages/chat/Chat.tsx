import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, ShoppingBag } from "lucide-react"

export default function ChatPage() {
  const conversations = [
    { id: 1, name: "John Doe", lastMessage: "Is the iPhone 12 still available?", time: "2m ago", unread: 2, productName: "iPhone 12", productImage: "/placeholder.svg?height=50&width=50" },
    { id: 2, name: "Jane Smith", lastMessage: "Can you do $80 for the coffee maker?", time: "1h ago", unread: 0, productName: "Coffee Maker", productImage: "/placeholder.svg?height=50&width=50" },
    { id: 3, name: "Mike Johnson", lastMessage: "Thanks, I've made the payment!", time: "3h ago", unread: 0, productName: "Wireless Earbuds", productImage: "/placeholder.svg?height=50&width=50" },
    { id: 4, name: "Sarah Williams", lastMessage: "What's the condition of the laptop?", time: "1d ago", unread: 1, productName: "MacBook Pro", productImage: "/placeholder.svg?height=50&width=50" },
    { id: 5, name: "Alex Brown", lastMessage: "Is the price negotiable for the watch?", time: "2d ago", unread: 0, productName: "Smart Watch", productImage: "/placeholder.svg?height=50&width=50" },
  ]

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-gray-800">Messages</h1>
        <div className="relative mt-2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input type="text" placeholder="Search conversations" className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-100" />
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-gray-200">
          {conversations.map((conversation) => (
            <li key={conversation.id}>
              <Link href={`/chat/${conversation.id}`} className="block">
                <div className="flex items-center px-4 py-3 hover:bg-gray-50 transition duration-150 ease-in-out">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${conversation.id}`} alt={conversation.name} />
                    <AvatarFallback>{conversation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">{conversation.name}</p>
                      <p className="text-xs text-gray-500">{conversation.time}</p>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                    <div className="flex items-center mt-1">
                      <ShoppingBag size={14} className="text-gray-400 mr-1" />
                      <p className="text-xs text-gray-400 truncate">{conversation.productName}</p>
                    </div>
                  </div>
                  {conversation.unread > 0 && (
                    <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-blue-500 rounded-full">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className="bg-white shadow-sm p-4 sticky bottom-0">
        <button className="w-full bg-blue-500 text-white rounded-full py-2 px-4 flex items-center justify-center">
          <MessageCircle size={18} className="mr-2" />
          New Message
        </button>
      </footer>
    </div>
  )
}