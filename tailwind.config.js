/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chassis: '#e0e5ec',
        panel: '#f0f2f5',
        recessed: '#d1d9e6',
        ink: {
          primary: '#2d3436',
          muted: '#4a5568',
        },
        accent: {
          DEFAULT: '#ff4757',
          hover: '#ff6b81',
          dark: '#e84118',
        },
        borderNeumorphic: {
          shadow: '#babecc',
          light: '#ffffff',
          dark: '#a3b1c6',
        },
        darkPanel: {
          DEFAULT: '#2d3436',
          slate: '#2c3e50',
          black: '#1e272e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Roboto Mono"', 'monospace'],
      },
      boxShadow: {
        'card': '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
        'card-hover': '12px 12px 24px #babecc, -12px -12px 24px #ffffff',
        'floating': '12px 12px 24px #babecc, -12px -12px 24px #ffffff, inset 1px 1px 0 rgba(255,255,255,0.5)',
        'pressed': 'inset 6px 6px 12px #babecc, inset -6px -6px 12px #ffffff',
        'recessed': 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
        'sharp': '4px 4px 8px rgba(0,0,0,0.15), -1px -1px 1px rgba(255,255,255,0.8)',
        'glow-accent': '0 0 12px 2px rgba(255, 71, 87, 0.6)',
        'glow-green': '0 0 12px 2px rgba(34, 197, 94, 0.6)',
        'glow-cyan': '0 0 12px 2px rgba(56, 189, 248, 0.6)',
        'button-accent': '4px 4px 8px rgba(166,50,60,0.4), -4px -4px 8px rgba(255,100,110,0.4)',
        'dark-inset': 'inset 4px 4px 10px rgba(0,0,0,0.5), inset -4px -4px 10px rgba(255,255,255,0.05)',
      },
      transitionTimingFunction: {
        'mechanical': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      animation: {
        'led-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'radar': 'spin 4s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
};
