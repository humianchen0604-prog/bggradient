/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import { Settings2, RotateCcw } from 'lucide-react';

export default function App() {
  const [duration, setDuration] = useState(3);
  const [delay, setDelay] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [key, setKey] = useState(0);

  return (
    <div className="min-h-screen bg-[#F0F0F0] flex items-center justify-center font-sans">
      <div className="flex items-center">
        {/* Phone frame */}
        <div className="relative w-[390px] h-[844px] bg-white overflow-hidden flex-shrink-0">
          {/* Dissolving gradient layer */}
          <div
            key={key}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 176, 190, 1) 0%, rgba(155, 212, 255, 0.51) 63%, rgba(255, 203, 255, 0) 100%)',
              animation: `fadeOutGradient ${duration}s ease-in-out ${delay}s forwards`,
              opacity: opacity,
              '--start-opacity': opacity,
            } as React.CSSProperties}
          />

          {/* Phone screen image — sits above gradient, below toolbox */}
          <img
            src="/Phone.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        </div>

        {/* Toolbox panel — outside phone frame, flush to its right edge */}
        <aside className="ml-6 w-72 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl border border-slate-200/50 p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-800">
              <Settings2 className="w-5 h-5" />
              <h2 className="text-sm font-semibold tracking-wide uppercase">Toolbox</h2>
            </div>
            <button
              onClick={() => setKey(k => k + 1)}
              className="p-1.5 hover:bg-slate-100/80 rounded-lg text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              title="Replay Animation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-5">
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-medium text-slate-500">
                <label htmlFor="duration">Fadeout Timer</label>
                <span className="text-slate-700 tabular-nums">{duration}s</span>
              </div>
              <input
                id="duration"
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={duration}
                onChange={(e) => setDuration(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800 hover:accent-slate-700"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-medium text-slate-500">
                <label htmlFor="delay">Auto Delay Timing</label>
                <span className="text-slate-700 tabular-nums">{delay}s</span>
              </div>
              <input
                id="delay"
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={delay}
                onChange={(e) => setDelay(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800 hover:accent-slate-700"
              />
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-medium text-slate-500">
                <label htmlFor="opacity">Base Opacity</label>
                <span className="text-slate-700 tabular-nums">{Math.round(opacity * 100)}%</span>
              </div>
              <input
                id="opacity"
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800 hover:accent-slate-700"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
