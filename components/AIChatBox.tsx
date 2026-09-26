import { useState } from 'react';

export function AIChatBox() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('Your AI coach can recommend a daily plan, explain your weak areas, and help you prepare for specific companies.');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;

    const response = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, context: 'Focus on placement preparation and realistic engineering student advice.' })
    });

    const data = await response.json();
    setAnswer(data?.answer?.content || data?.answer || 'I am here to help with your placement prep plan.');
    setMessage('');
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
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
            Ask Placero AI
          </button>
        </div>
      </form>
    </div>
  );
}
