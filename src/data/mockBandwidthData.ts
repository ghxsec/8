import { BandwidthData } from '../types/dashboard';

// Generate 24 hours of mock bandwidth data
const generateMockBandwidthData = (): BandwidthData[] => {
  const data: BandwidthData[] = [];
  const now = new Date();
  
  for (let i = 23; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000).toISOString();
    data.push({
      timestamp,
      download: Math.floor(Math.random() * 1000) + 500, // 500-1500 Mbps
      upload: Math.floor(Math.random() * 500) + 200,    // 200-700 Mbps
    });
  }
  
  return data;
};

export const mockBandwidthData: BandwidthData[] = generateMockBandwidthData();