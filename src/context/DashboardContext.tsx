import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { ServerStatus, BandwidthData } from '../types/dashboard';
import { mockServers } from '../data/mockServers';
import { mockBandwidthData } from '../data/mockBandwidthData';

interface DashboardContextType {
  servers: ServerStatus[];
  bandwidthData: BandwidthData[];
  loading: boolean;
  refreshData: () => Promise<void>;
  getProtocolServers: (protocol: string) => ServerStatus[];
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [servers, setServers] = useState<ServerStatus[]>([]);
  const [bandwidthData, setBandwidthData] = useState<BandwidthData[]>([]);
  const [loading, setLoading] = useState(true);

  // Load mock data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setServers(mockServers);
        setBandwidthData(mockBandwidthData);
      } catch (error) {
        toast.error('Failed to load dashboard data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Refresh data - would connect to actual API in real implementation
  const refreshData = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update server statuses randomly to simulate changes
      const updatedServers = servers.map(server => ({
        ...server,
        status: Math.random() > 0.8 ? 'offline' : Math.random() > 0.9 ? 'warning' : 'online',
        latency: Math.floor(Math.random() * 200) + 10,
        lastChecked: new Date().toISOString(),
      }));
      
      setServers(updatedServers);
      
      // Update bandwidth data with a new entry
      const lastData = bandwidthData[bandwidthData.length - 1];
      const newDataPoint: BandwidthData = {
        timestamp: new Date().toISOString(),
        download: lastData.download + Math.floor(Math.random() * 50),
        upload: lastData.upload + Math.floor(Math.random() * 30),
      };
      
      setBandwidthData([...bandwidthData.slice(-23), newDataPoint]);
      toast.success('Dashboard data refreshed');
    } catch (error) {
      toast.error('Failed to refresh dashboard data');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Filter servers by protocol
  const getProtocolServers = (protocol: string) => {
    return servers.filter(server => server.protocol === protocol);
  };

  return (
    <DashboardContext.Provider value={{ 
      servers, 
      bandwidthData, 
      loading, 
      refreshData, 
      getProtocolServers 
    }}>
      {children}
    </DashboardContext.Provider>
  );
};