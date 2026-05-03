import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Bot, Loader2 } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: '1', role: 'assistant', content: 'Hi there! I am an AI assistant trained on Pravesh\'s portfolio. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);



  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: text }]);
    setIsLoading(true);

    try {
      // Assuming backend is running on localhost:8000
      const response = await fetch(`http://127.0.0.1:8000/chat/?q=${encodeURIComponent(text)}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = '';

      setIsLoading(false);
      const msgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: msgId, role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        answer += decoder.decode(value, { stream: true });
        setMessages(prev => prev.map(msg =>
          msg.id === msgId ? { ...msg, content: answer } : msg
        ));
      }
    } catch (error) {
      console.error('Error fetching chat response:', error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Oops! I'm having trouble connecting to the server right now. Is the backend running on port 8000?"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input.trim());
      setInput('');
    }
  };

  const handleSuggestedClick = (question) => {
    sendMessage(question);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                y: [0, -4, 0]
              }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{
                opacity: { delay: 0.5 },
                x: { delay: 0.5 },
                scale: { delay: 0.5 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl rounded-br-none shadow-xl text-white text-sm font-medium whitespace-nowrap mb-1"
            >
              May I help you?
              <div className="absolute -bottom-1.5 right-0 w-3 h-3 bg-white/10 border-r border-b border-white/20 rotate-45 transform translate-x-[-1px] translate-y-[-1px]" />
            </motion.div>

            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="p-4 bg-primary text-white rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)] hover:shadow-[0_0_30px_rgba(79,70,229,0.8)] transition-shadow duration-300 flex items-center justify-center relative group"
            >
              <Bot className="w-7 h-7" />
              <span className="absolute top-3 right-3 w-3 h-3 bg-green-500 border-2 border-primary rounded-full animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] flex flex-col glass rounded-2xl overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Header */}
            <div className="p-4 bg-primary/20 border-b border-white/10 flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Portfolio AI</h3>
                  <p className="text-xs text-textMuted flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-textMuted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-background/80 backdrop-blur-sm">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-secondary/30 text-secondary' : 'bg-primary/30 text-primary'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-secondary/20 text-white rounded-tr-none' : 'bg-white/5 text-textMain border border-white/10 rounded-tl-none'}`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3 max-w-[85%] self-start"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/30 text-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-none flex items-center gap-2">
                    <span className="w-2 h-2 bg-textMuted rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-textMuted rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-textMuted rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {/* <div className="bg-surface/90 backdrop-blur-md px-3 py-2 border-t border-white/10 flex gap-2 overflow-x-auto scrollbar-none">
              {suggestedQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedClick(q)}
                  disabled={isLoading}
                  className="whitespace-nowrap px-3 py-1.5 bg-white/5 hover:bg-primary/20 text-textMuted hover:text-white text-[11px] rounded-full border border-white/10 hover:border-primary/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {q}
                </button>
              ))}
            </div> */}

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-surface/90 backdrop-blur-md border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my skills, projects..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-textMuted/50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white rounded-lg flex items-center justify-center transition-colors disabled:cursor-not-allowed flex-shrink-0"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
