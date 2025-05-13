/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0A1929',
          purple: '#2A1B3D',
        },
        accent: {
          cyan: '#00F5FF',
          purple: '#7B4DFF',
        },
        status: {
          online: '#10B981',
          offline: '#EF4444',
          warning: '#F59E0B',
        },
        protocol: {
          ssh: '#3B82F6',
          vmess: '#8B5CF6',
          shadowsocks: '#EC4899',
          vless: '#F97316',
          trojan: '#14B8A6',
          wireguard: '#06B6D4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0, 245, 255, 0.5)',
        'glow-purple': '0 0 15px rgba(123, 77, 255, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to right, #0A1929, #2A1B3D)',
      },
    },
  },
  plugins: [],
};