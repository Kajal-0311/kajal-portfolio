import React from 'react';

interface ProjectThumbnailProps {
  projectId: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ projectId }) => {
  if (projectId === 'vendor-invoice-intelligence') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#F2E7D8] to-[#E8DAC5] rounded-xl border border-[#D2BFA6] relative overflow-hidden flex flex-col justify-between p-4 group-hover:border-[#B9875B] transition-colors shadow-sm">
        {/* Subtle warm caramel grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#B9875B_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        
        {/* Top Header Mockup */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#D2BFA6]/60 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D2BFA6]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#B9875B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#75451F]" />
            <span className="ml-2 font-mono text-[10px] text-[#806F60]">invoice_ml_pipeline.py</span>
          </div>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E8DAC5] text-[#75451F] border border-[#D2BFA6] font-medium">
            Streamlit + Joblib
          </span>
        </div>

        {/* Visual Pipeline Schematic */}
        <div className="relative z-10 grid grid-cols-3 gap-2 my-auto items-center">
          <div className="p-2 rounded-lg bg-[#EDE0CC] border border-[#D2BFA6] text-center shadow-xs">
            <div className="font-mono text-[10px] text-[#B9875B] font-semibold">Freight Cost</div>
            <div className="text-[11px] font-sans font-bold text-[#54351F] mt-0.5">Regression</div>
            <div className="text-[9px] font-mono text-[#806F60] mt-1">RMSE Tuned</div>
          </div>

          <div className="flex items-center justify-center">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-[#B9875B] animate-pulse">
              <path d="M0 10H34M34 10L26 4M34 10L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="p-2 rounded-lg bg-[#EDE0CC] border border-[#B9875B] text-center shadow-[0_4px_14px_rgba(185,135,91,0.18)]">
            <div className="font-mono text-[10px] text-[#75451F] font-semibold">Anomaly Risk</div>
            <div className="text-[11px] font-sans font-bold text-[#54351F] mt-0.5">Random Forest</div>
            <div className="text-[9px] font-mono text-[#806F60] mt-1">GridSearchCV F1</div>
          </div>
        </div>

        {/* Bottom bar stats */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#806F60] border-t border-[#D2BFA6]/60 pt-2">
          <span className="text-[#75451F] font-medium">● Full-Stack Inference</span>
          <span>Dual Model Architecture</span>
        </div>
      </div>
    );
  }

  if (projectId === 'agentic-rag-tutor') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#F2E7D8] to-[#E8DAC5] rounded-xl border border-[#D2BFA6] relative overflow-hidden flex flex-col justify-between p-4 group-hover:border-[#B9875B] transition-colors shadow-sm">
        <div className="absolute inset-0 bg-[radial-gradient(#B9875B_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        
        <div className="relative z-10 flex items-center justify-between border-b border-[#D2BFA6]/60 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D2BFA6]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#B9875B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#75451F]" />
            <span className="ml-2 font-mono text-[10px] text-[#806F60]">offline_rag_core.py</span>
          </div>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E8DAC5] text-[#75451F] border border-[#D2BFA6] font-medium">
            100% Offline Local
          </span>
        </div>

        <div className="relative z-10 flex items-center justify-between gap-1.5 my-auto">
          <div className="flex-1 p-2 rounded-lg bg-[#EDE0CC] border border-[#D2BFA6] text-center shadow-xs">
            <div className="font-mono text-[9px] text-[#806F60]">PyPDF Docs</div>
            <div className="text-[10px] font-mono font-bold text-[#54351F] mt-0.5">Chunks</div>
          </div>

          <span className="text-[#B9875B] text-xs font-bold">→</span>

          <div className="flex-1 p-2 rounded-lg bg-[#EDE0CC] border border-[#B9875B] text-center shadow-[0_4px_14px_rgba(185,135,91,0.18)]">
            <div className="font-mono text-[9px] text-[#B9875B] font-semibold">ChromaDB</div>
            <div className="text-[10px] font-mono font-bold text-[#54351F] mt-0.5">nomic-embed</div>
          </div>

          <span className="text-[#B9875B] text-xs font-bold">→</span>

          <div className="flex-1 p-2 rounded-lg bg-[#EDE0CC] border border-[#75451F] text-center shadow-[0_4px_14px_rgba(117,69,31,0.15)]">
            <div className="font-mono text-[9px] text-[#75451F] font-semibold">Llama 3</div>
            <div className="text-[10px] font-mono font-bold text-[#54351F] mt-0.5">Ollama</div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#806F60] border-t border-[#D2BFA6]/60 pt-2">
          <span className="text-[#75451F] font-medium">● Zero Cloud Dependency</span>
          <span>LangChain Orchestration</span>
        </div>
      </div>
    );
  }

  // Quantum Imaging for Disaster Search & Rescue
  return (
    <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#F2E7D8] to-[#E8DAC5] rounded-xl border border-[#D2BFA6] relative overflow-hidden flex flex-col justify-between p-4 group-hover:border-[#B9875B] transition-colors shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(#B9875B_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

      <div className="relative z-10 flex items-center justify-between border-b border-[#D2BFA6]/60 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D2BFA6]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#B9875B]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#75451F]" />
          <span className="ml-2 font-mono text-[10px] text-[#806F60]">ghost_imaging_sim.py</span>
        </div>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#E8DAC5] text-[#75451F] border border-[#D2BFA6] font-medium">
          DRDO Research Domain
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 my-auto items-center">
        <div className="p-2 rounded-lg bg-[#EDE0CC] border border-[#D2BFA6] text-center shadow-xs">
          <div className="font-mono text-[9px] text-[#806F60]">Input Signals</div>
          <div className="text-[10px] font-mono font-bold text-[#54351F] mt-0.5">Turbid Medium</div>
          <div className="text-[9px] font-mono text-[#B9875B] mt-0.5">Noisy SNR</div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="font-mono text-[9px] text-[#75451F] font-semibold mb-0.5">Pearson r</div>
          <svg width="40" height="16" viewBox="0 0 40 16" fill="none" className="text-[#B9875B]">
            <path d="M0 8H34M34 8L26 3M34 8L26 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="font-mono text-[8px] text-[#806F60] mt-0.5">Correlation</div>
        </div>

        <div className="p-2 rounded-lg bg-[#EDE0CC] border border-[#75451F] text-center shadow-[0_4px_14px_rgba(117,69,31,0.15)]">
          <div className="font-mono text-[9px] text-[#75451F] font-semibold">Output</div>
          <div className="text-[10px] font-mono font-bold text-[#54351F] mt-0.5">Reconstructed</div>
          <div className="text-[9px] font-mono text-[#75451F] mt-0.5 font-medium">Single-Pixel</div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#806F60] border-t border-[#D2BFA6]/60 pt-2">
        <span className="text-[#75451F] font-medium">● Low-Visibility Rescue</span>
        <span>NumPy & SciPy Math</span>
      </div>
    </div>
  );
};
