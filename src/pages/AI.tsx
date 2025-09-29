import React, { useState } from 'react';
import { MessageCircle, Send, Bot, User, Zap, Database, Fish, Dna, Map, BarChart3 } from 'lucide-react';
import { aiService, type ChatMessage } from '../services/aiService';

// --- Advanced Helper Function to Parse Markdown ---
const parseMarkdown = (text: string) => {
  const lines = text.split('\n');
  const htmlElements = [];
  let inList = false;
  let inOrderedList = false;
  let inTable = false;

  const closeLists = () => {
    if (inList) htmlElements.push('</ul>');
    if (inOrderedList) htmlElements.push('</ol>');
    inList = false;
    inOrderedList = false;
  };

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Table handling
    if (line.trim().startsWith('|')) {
      if (!inTable) {
        const nextLine = lines[i + 1];
        if (nextLine && nextLine.trim().includes('---')) {
          closeLists();
          inTable = true;
          htmlElements.push('<table class="w-full text-left border-collapse my-2">');
          const headers = line.split('|').slice(1, -1).map(h => h.trim());
          htmlElements.push('<thead><tr class="bg-gray-100 border-b">');
          headers.forEach(h => htmlElements.push(`<th class="p-2 font-semibold text-xs">${h}</th>`));
          htmlElements.push('</tr></thead><tbody>');
          i++; // Skip separator line
          continue;
        }
      } else {
        const cells = line.split('|').slice(1, -1).map(c => c.trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'));
        htmlElements.push('<tr class="border-b">');
        cells.forEach(c => htmlElements.push(`<td class="p-2 text-xs">${c}</td>`));
        htmlElements.push('</tr>');
        continue;
      }
    } else if (inTable) {
      htmlElements.push('</tbody></table>');
      inTable = false;
    }

    // Process **bold** text for all line types
    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Headings
    if (line.startsWith('### ')) {
      closeLists();
      htmlElements.push(`<h3 class="font-semibold text-base mt-3 mb-1">${line.substring(4)}</h3>`);
    } else if (line.startsWith('## ')) {
      closeLists();
      htmlElements.push(`<h2 class="font-bold text-lg mt-4 mb-2">${line.substring(3)}</h2>`);
    }
    // Numbered Lists (e.g., 1. Item)
    else if (/^\d+\.\s/.test(line.trim())) {
      if (inList) closeLists();
      if (!inOrderedList) {
        htmlElements.push('<ol class="list-decimal list-inside space-y-1 my-2">');
        inOrderedList = true;
      }
      htmlElements.push(`<li>${line.trim().substring(line.trim().indexOf(' ') + 1)}</li>`);
    }
    // Nested Unordered Lists (e.g.,   + Item)
    else if (line.trim().startsWith('+ ')) {
        if (!inList) { // Should be inside a parent list, but handle gracefully
             htmlElements.push('<ul class="list-inside space-y-1 my-2">');
             inList = true;
        }
        htmlElements.push(`<li class="ml-4"><ul class="list-disc list-inside"><li>${line.trim().substring(2)}</li></ul></li>`);
    }
    // Unordered Lists (e.g., - Item or * Item)
    else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      if (inOrderedList) closeLists();
      if (!inList) {
        htmlElements.push('<ul class="list-disc list-inside space-y-1 my-2">');
        inList = true;
      }
      htmlElements.push(`<li>${line.trim().substring(2)}</li>`);
    }
    // Paragraphs and blank lines
    else {
      closeLists();
      if (line.trim() !== '') {
        htmlElements.push(`<p>${line}</p>`);
      }
    }
  }

  closeLists();
  if (inTable) htmlElements.push('</tbody></table>');

  return { __html: htmlElements.join('') };
};


const AI = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m Shark AI, your marine data assistant.',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const quickActions = [
    { icon: Database, label: 'Find Datasets', query: 'Show me available marine datasets' },
    { icon: Fish, label: 'Identify Species', query: 'Help me identify a marine species' },
    { icon: Dna, label: 'Analyze eDNA', query: 'Explain eDNA analysis results' },
    { icon: Map, label: 'Ocean Mapping', query: 'Show me ocean temperature patterns' },
    { icon: BarChart3, label: 'Generate a Table', query: 'Generate a sample table of fish populations in the Indian Ocean' }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    setError(null);
    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const chatHistory: ChatMessage[] = messages
        .filter(msg => msg.type !== 'bot' || msg.id !== 1)
        .map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }));
      
      chatHistory.push({
        role: 'user',
        content: inputMessage
      });

      const response = await aiService.sendMessage(chatHistory);
      
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: response,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (err) {
      console.error('Error getting AI response:', err);
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while processing your request.';
      setError(errorMessage);
      
      const errorResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: `I apologize, but I encountered an error: ${errorMessage}. Please try again or contact support if the issue persists.`,
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickAction = (query: string) => {
    setInputMessage(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="py-12 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-ocean-800 mb-4 animate-float">Shark AI Assistant</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your intelligent companion for marine data analysis and ocean insights
          </p>
        </div>

        <div className="glass rounded-2xl overflow-hidden glow-soft">
          <div className="glass-ocean text-white p-4 flex items-center space-x-3 border-b border-white/20">
            <Bot className="w-6 h-6" />
            <div>
              <h2 className="font-semibold">Shark AI</h2>
              <p className="text-sm opacity-90">Marine Data Specialist</p>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Online</span>
            </div>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' ? 'bg-[#3C7EDB]' : 'bg-[#30345E]'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'user'
                    ? 'glass-coral text-white glow-coral'
                    : 'glass-sand text-gray-800'
                }`}>
                  <div
                    className="text-sm prose max-w-none"
                    dangerouslySetInnerHTML={parseMarkdown(message.content)}
                  />
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full glass-seaweed flex items-center justify-center glow-seaweed">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="glass-sand px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-seaweed-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-seaweed-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-seaweed-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-white/20 p-4">
            <p className="text-sm text-gray-600 mb-3">Quick Actions:</p>
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.query)}
                  className={`flex items-center space-x-2 px-3 py-2 glass rounded-lg glow-hover transition-all duration-200 text-sm ${
                    index % 3 === 0 ? 'hover:glass-ocean hover:text-white' :
                    index % 3 === 1 ? 'hover:glass-coral hover:text-white' :
                    'hover:glass-seaweed hover:text-white'
                  }`}
                >
                  <action.icon className="w-4 h-4" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-white/20 p-4">
            {error && (
              <div className="mb-4 p-3 glass border border-red-300 rounded-lg glow-soft">
                <p className="text-red-700 text-sm">
                  <strong>Error:</strong> {error}
                </p>
              </div>
            )}
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about marine data, species identification, or ocean insights..."
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-500/20 resize-none"
                  rows="2"
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="glass-coral text-white p-3 rounded-lg glow-coral transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Powered by NVIDIA Llama-3.1-Nemotron-70B-Instruct
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;

