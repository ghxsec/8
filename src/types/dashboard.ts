export interface ServerStatus {
  id: string;
  name: string;
  protocol: string;
  status: 'online' | 'offline' | 'warning';
  latency: number;
  location: string;
  lastChecked: string;
}

export interface BandwidthData {
  timestamp: string;
  download: number;
  upload: number;
}