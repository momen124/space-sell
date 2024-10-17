// types.ts

export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}




export interface IconProps {
  className?: string;
}

export interface HeaderLink {
  href: string;
  text: string;
}

export interface QuickLink {
  href: string;
  text: string;
}

export interface HowItWorksItem {
  title: string;
  description: string;
}

declare module '@/components/ui/badge' {
  export interface BadgeProps {
    variant?: 'default' | 'warning' | 'destructive';
  }

  export const Badge: React.FC<BadgeProps>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  joinDate: string;
}

export interface ChatRoom {
  id: string;
  participants: User[];
  lastMessage?: Message;
}

export interface Message {
  id: string;
  roomId: string;
  sender: User; // Keep this as User
  content: string;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  name: string;
  messages: Message[]; // This should remain the same
  avatar: string;
}
// types.ts
export interface Conversation {
  id: string;
  lastMessage: string;
  // Add other relevant properties
}
// types.ts
export interface Message {
  content: string;
  isUser: boolean; // Indicates if the message is from the user or the other party
}
export interface Conversation {
  id: string;
  title: string; // You can change this based on your needs
  lastMessage: string; // Last message content
  messages: Message[]; // Array of messages in the conversation
}
