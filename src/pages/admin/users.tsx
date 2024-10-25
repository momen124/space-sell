import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useEffect, useState } from 'react'

type User = {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'blocked'
}

const mockUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'User', status: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Admin', status: 'active' },
  { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'blocked' },
]

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // In a real app, you would fetch users from your API
    setUsers(mockUsers)
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleStatusChange = (userId: string, newStatus: 'active' | 'blocked') => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, status: newStatus } : user
    ))
  }

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">User Management</h1>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  user.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                }`}>
                  {user.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange(user.id, user.status === 'active' ? 'blocked' : 'active')}
                  >
                    {user.status === 'active' ? 'Block' : 'Activate'}
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}