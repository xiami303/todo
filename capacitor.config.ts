import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.voicetodo.app',
  appName: '语音待办事项',
  webDir: 'dist',
  ios: {
    contentInset: 'automatic',
    scrollEnabled: true,
    allowsLinkPreview: false,
  },
  server: {
    // 开发时可以使用本地服务器
    // url: 'http://192.168.x.x:5173',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#a855f7',
      showSpinner: false,
    },
  },
};

export default config;
