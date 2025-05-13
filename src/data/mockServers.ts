import { ServerStatus } from '../types/dashboard';

export const mockServers: ServerStatus[] = [
  {
    id: '1',
    name: 'US East Server',
    protocol: 'https',
    status: 'online',
    latency: 45,
    location: 'New York',
    lastChecked: new Date().toISOString()
  },
  {
    id: '2',
    name: 'EU West Server',
    protocol: 'https',
    status: 'online',
    latency: 85,
    location: 'London',
    lastChecked: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Asia Pacific Server',
    protocol: 'http',
    status: 'warning',
    latency: 150,
    location: 'Singapore',
    lastChecked: new Date().toISOString()
  }
];