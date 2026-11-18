import React from 'react';

interface ProjectThumbnailProps {
  projectId: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ projectId }) => {
  if (projectId === 'vendor-invoice-intelligence') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#081738] to-[#040C20] rounded-xl border border-border relative overflow-hidden flex flex-col justify-between p-4 group-hover:border-accent/40 transition-colors">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1E7BFF_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        
        {/* Top Header Mockup */}
        <div className="relative z-10 flex items-center justify-between border-b border-border/40 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 font-mono text-[10px] text-text-muted">invoice_ml_pipeline.py</span>
          </div>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/25">
            Streamlit + Joblib
          </span>
        </div>

        {/* Visual Pipeline Schematic */}
        <div className="relative z-10 grid grid-cols-3 gap-2 my-auto items-center">
          <div className="p-2 rounded-lg bg-surface/80 border border-border text-center">
            <div className="font-mono text-[10px] text-accent-2 font-semibold">Freight Cost</div>
            <div className="text-[11px] font-sans font-bold text-text mt-0.5">Regression</div>
            <div className="text-[9px] font-mono text-text-muted mt-1">RMSE Tuned</div>
          </div>

          <div className="flex items-center justify-center">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-accent animate-pulse">
              <path d="M0 10H34M34 10L26 4M34 10L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="p-2 rounded-lg bg-surface/80 border border-accent/30 text-center shadow-[0_0_15px_rgba(30,123,255,0.2)]">
            <div className="font-mono text-[10px] text-accent font-semibold">Anomaly Risk</div>
            <div className="text-[11px] font-sans font-bold text-text mt-0.5">Random Forest</div>
            <div className="text-[9px] font-mono text-text-muted mt-1">GridSearchCV F1</div>
          </div>
        </div>

        {/* Bottom bar stats */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-text-muted border-t border-border/40 pt-2">
          <span className="text-accent">● Full-Stack Inference</span>
          <span>Dual Model Architecture</span>
        </div>
      </div>
    );
  }

  if (projectId === 'agentic-rag-tutor') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#061B30] to-[#040C20] rounded-xl border border-border relative overflow-hidden flex flex-col justify-between p-4 group-hover:border-accent-2/40 transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(#38E1FF_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        
        <div className="relative z-10 flex items-center justify-between border-b border-border/40 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 font-mono text-[10px] text-text-muted">offline_rag_core.py</span>
          </div>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent-2/15 text-accent-2 border border-accent-2/25">
            100% Offline Local
          </span>
        </div>

        <div className="relative z-10 flex items-center justify-between gap-1.5 my-auto">
          <div className="flex-1 p-2 rounded-lg bg-surface/80 border border-border text-center">
            <div className="font-mono text-[9px] text-text-muted">PyPDF Docs</div>
            <div className="text-[10px] font-mono font-bold text-text mt-0.5">Chunks</div>
          </div>

          <span className="text-text-muted text-xs">→</span>

          <div className="flex-1 p-2 rounded-lg bg-surface/80 border border-accent-2/30 text-center shadow-[0_0_15px_rgba(56,225,255,0.15)]">
            <div className="font-mono text-[9px] text-accent-2">ChromaDB</div>
            <div className="text-[10px] font-mono font-bold text-text mt-0.5">nomic-embed</div>
          </div>

          <span className="text-text-muted text-xs">→</span>

          <div className="flex-1 p-2 rounded-lg bg-surface/80 border border-accent/40 text-center shadow-[0_0_15px_rgba(30,123,255,0.2)]">
            <div className="font-mono text-[9px] text-accent">Llama 3</div>
            <div className="text-[10px] font-mono font-bold text-text mt-0.5">Ollama</div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-text-muted border-t border-border/40 pt-2">
          <span className="text-accent-2">● Zero Cloud Dependency</span>
          <span>LangChain Orchestration</span>
        </div>
      </div>
    );
  }

  // Quantum Imaging for Disaster Search & Rescue
  return (
    <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#0B1536] to-[#03091B] rounded-xl border border-border relative overflow-hidden flex flex-col justify-between p-4 group-hover:border-accent/40 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(#1E7BFF_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

      <div className="relative z-10 flex items-center justify-between border-b border-border/40 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 font-mono text-[10px] text-text-muted">ghost_imaging_sim.py</span>
        </div>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/25">
          DRDO Research Domain
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 my-auto items-center">
        <div className="p-2 rounded-lg bg-surface/80 border border-border text-center">
          <div className="font-mono text-[9px] text-text-muted">Input Signals</div>
          <div className="text-[10px] font-mono font-bold text-text mt-0.5">Turbid Medium</div>
          <div className="text-[9px] font-mono text-red-400 mt-0.5">Noisy SNR</div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="font-mono text-[9px] text-accent font-semibold mb-0.5">Pearson r</div>
          <svg width="40" height="16" viewBox="0 0 40 16" fill="none" className="text-accent-2">
            <path d="M0 8H34M34 8L26 3M34 8L26 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="font-mono text-[8px] text-text-muted mt-0.5">Correlation</div>
        </div>

        <div className="p-2 rounded-lg bg-surface/80 border border-accent/40 text-center shadow-[0_0_15px_rgba(30,123,255,0.2)]">
          <div className="font-mono text-[9px] text-accent">Output</div>
          <div className="text-[10px] font-mono font-bold text-text mt-0.5">Reconstructed</div>
          <div className="text-[9px] font-mono text-green-400 mt-0.5">Single-Pixel</div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-text-muted border-t border-border/40 pt-2">
        <span className="text-accent">● Low-Visibility Rescue</span>
        <span>NumPy & SciPy Math</span>
      </div>
    </div>
  );
};
