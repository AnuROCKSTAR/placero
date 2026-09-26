'use client';

import { useState, type FormEvent } from 'react';

export function AIChatBox() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('Your AI coach can help you choose what to study today, evaluate your interview clarity, and identify the next skill gap.');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!message.trim()) return;

    const response = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        context: 'The student is preparing for campus placements and wants practical, specific next steps.'
      })
    });

    const data = await response.json();
    setAnswer(data?.answer?.content || data?.answer || 'I can help shape your plan around company preparation and skill gaps.');
    setMessage('');
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl">
      <div className="mb-5 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-blue-100">
        {answer}
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Ask: What should I study today? Am I ready for Reliance?"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 p-4 text-white placeholder:text-slate-500 focus:border-blue-500"
        />
        <div className="flex justify-end">
          <button type="submit" className="rounded-full bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-500">
            Ask Placement AI
          </button>
        </div>
      </form>
    </div>
  );
}
