import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoadingScreen from '../components/ui/LoadingScreen';

// Lazily load pages for better performance
const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'));
const DashboardLayout = lazy(() => import('../components/layout/DashboardLayout'));
const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'));
const ProfilePage = lazy(() => import('../pages/dashboard/ProfilePage'));
const ServersPage = lazy(() => import('../pages/dashboard/ServersPage'));

// Protocol-specific pages
const SSHTunnelPage = lazy(() => import('../pages/protocols/SSHTunnelPage'));
const VMessPage = lazy(() => import('../pages/protocols/VMessPage'));
const ShadowsocksPage = lazy(() => import('../pages/protocols/ShadowsocksPage'));
const VlessPage = lazy(() => import('../pages/protocols/VlessPage'));
const TrojanGoPage = lazy(() => import('../pages/protocols/TrojanGoPage'));
const WireguardPage = lazy(() => import('../pages/protocols/WireguardPage'));

function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Protected routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="servers" element={<ServersPage />} />
            
            {/* Protocol routes */}
            <Route path="ssh-tunnel" element={<SSHTunnelPage />} />
            <Route path="vmess" element={<VMessPage />} />
            <Route path="shadowsocks" element={<ShadowsocksPage />} />
            <Route path="vless" element={<VlessPage />} />
            <Route path="trojan-go" element={<TrojanGoPage />} />
            <Route path="wireguard" element={<WireguardPage />} />
          </Route>
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;