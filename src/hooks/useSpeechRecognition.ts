import { useState, useEffect, useRef } from 'react';

interface SpeechRecognitionHook {
  transcript: string;
  isListening: boolean;
  isSupported: boolean;
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
  error: string | null;
}

export const useSpeechRecognition = (): SpeechRecognitionHook => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  // Check if browser supports Speech Recognition
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const isSupported = !!SpeechRecognition;

  useEffect(() => {
    if (!isSupported) {
      setError('您的浏览器不支持语音识别功能，请使用Chrome、Edge或Safari浏览器');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true; // 启用中间结果，提供更好的反馈
    recognition.lang = 'zh-CN'; // Support Chinese
    recognition.maxAlternatives = 1; // 只返回最可能的结果

    recognition.onstart = () => {
      setIsListening(true);
      setError(null);
    };

    recognition.onresult = (event: any) => {
      const last = event.results.length - 1;
      const transcript = event.results[last][0].transcript;
      setTranscript(transcript);
      
      // 如果是最终结果，自动停止
      if (event.results[last].isFinal) {
        recognition.stop();
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      
      switch (event.error) {
        case 'no-speech':
          setError('未检测到语音，请重试');
          break;
        case 'audio-capture':
          setError('无法访问麦克风，请检查权限');
          break;
        case 'not-allowed':
          setError('麦克风权限被拒绝');
          break;
        default:
          setError(`语音识别错误: ${event.error}`);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, [isSupported]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setError(null);
      setTranscript('');
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error('Failed to start recognition:', err);
        setError('启动语音识别失败');
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const resetTranscript = () => {
    setTranscript('');
    setError(null);
  };

  return {
    transcript,
    isListening,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
    error,
  };
};
