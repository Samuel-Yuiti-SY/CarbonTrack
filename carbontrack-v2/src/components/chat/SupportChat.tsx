"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/providers/I18nProvider";

type ChatMessage = {
  id: string;
  role: "support" | "user";
  text: string;
};

export function SupportChat() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [replyIndex, setReplyIndex] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.scrollTo({
      top: panelRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  const handleSend = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      return;
    }

    const reply = t.chat.replies[replyIndex % t.chat.replies.length];
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `user-${Date.now()}`,
        role: "user",
        text: trimmedInput,
      },
      {
        id: `support-${Date.now()}`,
        role: "support",
        text: reply,
      },
    ]);
    setReplyIndex((currentIndex) => currentIndex + 1);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open ? (
        <section className="glass-panel flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl">
          <header className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-200">
                <MessageCircle size={18} aria-hidden />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-foreground">
                  {t.chat.title}
                </h2>
                <p className="text-xs text-muted">{t.chat.subtitle}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted transition hover:text-foreground"
              aria-label={t.chat.close}
            >
              <X size={16} aria-hidden />
            </button>
          </header>

          <div ref={panelRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {[
              { id: "initial", role: "support", text: t.chat.initial } as const,
              ...messages,
            ].map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                    message.role === "user"
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-100 text-foreground dark:bg-white/10"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <form
            className="flex gap-2 border-t border-border p-3"
            onSubmit={(event) => {
              event.preventDefault();
              handleSend();
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.chat.placeholder}
              className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted"
            />
            <button
              type="submit"
              className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500 text-slate-950 transition hover:bg-emerald-400"
              aria-label={t.chat.send}
            >
              <Send size={16} aria-hidden />
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((currentOpen) => !currentOpen)}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-slate-950 shadow-xl shadow-emerald-950/20 transition hover:scale-105"
        aria-label={open ? t.chat.close : t.chat.open}
        title={open ? t.chat.close : t.chat.open}
      >
        {open ? <X size={22} aria-hidden /> : <MessageCircle size={22} aria-hidden />}
      </button>
    </div>
  );
}
