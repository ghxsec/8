import { User } from '../types/auth';

export const mockUsers: (User & { password: string })[] = [
  {
    id: '1',
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'user123',
    name: 'Regular User',
    role: 'user',
    createdAt: '2024-01-02T00:00:00.000Z'
  }
];