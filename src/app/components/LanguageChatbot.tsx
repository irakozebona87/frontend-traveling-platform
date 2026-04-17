import { useState } from 'react';
import { X, Send, Bot } from 'lucide-react';
import { languageAPI } from '../api/travelApi';

interface Message {
  text: string;
  isBot: boolean;
}

interface LanguageChatbotProps {
  onClose: () => void;
}

export function LanguageChatbot({ onClose }: LanguageChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Muraho! I'm your backend-powered Kinyarwanda tutor. Ask me how to say something in Kinyarwanda.", isBot: true },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) {
      return;
    }

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { text: userMessage, isBot: false }]);
    setInput('');
    setLoading(true);

    try {
      const result = await languageAPI.translate(userMessage);
      const response = result.translation
        ? `In Kinyarwanda, "${result.match}" is "${result.translation}". ${result.note}`
        : result.note;

      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: 'The language service is unavailable right now. Try again in a moment.', isBot: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-24 right-4 md:right-8 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col h-[500px]">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Kinyarwanda Tutor</h3>
            <p className="text-xs text-blue-100">Served through the backend</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isBot ? 'bg-gray-100 text-gray-900' : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 text-gray-900 text-sm">Thinking...</div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your question..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all disabled:opacity-60"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">Try: "How do you say hello?" or "Thank you in Kinyarwanda"</p>
      </div>
    </div>
  );
}
