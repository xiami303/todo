import React from 'react';

interface VoiceButtonProps {
  isListening: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({ isListening, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
        isListening
          ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
          : 'bg-purple-500 hover:bg-purple-600 text-white'
      } disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {isListening ? '🎤 正在录音...' : '🎤 点击开始语音输入'}
    </button>
  );
};
