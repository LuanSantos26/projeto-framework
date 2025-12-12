import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-scale-in origin-bottom-right">
          {/* Header */}
          <div className="gradient-bg p-4 text-primary-foreground">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Suporte Sitara</p>
                  <p className="text-xs text-primary-foreground/80">
                    Online agora
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-primary-foreground/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-64 p-4 overflow-y-auto bg-background">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">
                S
              </div>
              <div className="bg-secondary p-3 rounded-2xl rounded-tl-sm max-w-[200px]">
                <p className="text-sm text-foreground">
                  Olá! 👋 Como posso ajudar você hoje?
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-border flex gap-2"
          >
            <Input
              type="text"
              placeholder="Digite sua mensagem..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-secondary"
            />
            <Button
              type="submit"
              size="icon"
              className="gradient-bg hover:opacity-90 shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full gradient-bg shadow-lg flex items-center justify-center text-primary-foreground transition-all hover:scale-110 ${
          isOpen ? "" : "animate-pulse-glow"
        }`}
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default ChatButton;
