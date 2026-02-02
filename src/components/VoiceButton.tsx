import { Mic, MicOff } from 'lucide-react';

interface VoiceButtonProps {
  isSupported: boolean;
  isListening: boolean;
  onStart: () => void;
  onStop: () => void;
  transcript: string;
}

export default function VoiceButton({
  isSupported,
  isListening,
  onStart,
  onStop,
  transcript,
}: VoiceButtonProps) {
  if (!isSupported) {
    return (
      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          ⚠️ 您的浏览器不支持语音识别功能。请使用 Chrome、Edge 或 Safari 浏览器获得最佳体验。
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <button
        onClick={isListening ? onStop : onStart}
        className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-medium text-white transition-all touch-manipulation active:scale-95 flex items-center justify-center gap-2 sm:gap-3 shadow-lg ${
          isListening
            ? 'bg-gradient-to-r from-red-500 to-pink-500 animate-pulse'
            : 'bg-gradient-to-r from-purple-500 to-pink-500 active:opacity-90'
        }`}
      >
        {isListening ? (
          <>
            <MicOff className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg">正在录音中... 点击停止</span>
          </>
        ) : (
          <>
            <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg">🎤 点击开始语音输入</span>
          </>
        )}
      </button>

      {transcript && isListening && (
        <div className="mt-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
          <p className="text-sm text-purple-700">
            <span className="font-medium">识别中:</span> {transcript}
          </p>
        </div>
      )}
    </div>
  );
}
