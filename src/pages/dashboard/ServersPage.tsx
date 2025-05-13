import React from 'react';
import { Shield } from 'lucide-react';

function ServersPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Servers
        </h1>
        <p className="text-gray-600 mt-2">
          Manage your proxy servers and configurations
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid gap-6">
          {/* Server list will be implemented later */}
          <div className="text-center text-gray-500">
            <p>No servers configured yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServersPage;