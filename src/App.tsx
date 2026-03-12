/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Stethoscope, 
  Search, 
  FileText, 
  ClipboardList, 
  Pill, 
  ChevronRight, 
  Copy, 
  CheckCircle2, 
  RotateCcw,
  BookOpen,
  User,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SPECIALTIES, COMMON_PATHOLOGIES, SpecialtyTemplate, Pathology } from './constants';

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyTemplate>(SPECIALTIES[0]);
  const [anamnesis, setAnamnesis] = useState(SPECIALTIES[0].template);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPathology, setSelectedPathology] = useState<Pathology | null>(null);
  const [pathologySearch, setPathologySearch] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'anamnese' | 'conduta'>('anamnese');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const filteredPathologies = COMMON_PATHOLOGIES
    .filter(p => p.name.toLowerCase().includes(pathologySearch.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleSpecialtySelect = (specialty: SpecialtyTemplate) => {
    setSelectedSpecialty(specialty);
    setAnamnesis(specialty.template);
    setActiveTab('anamnese');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Search local database
    const localMatch = COMMON_PATHOLOGIES.find(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (localMatch) {
      setSelectedPathology(localMatch);
      setActiveTab('conduta');
    } else {
      alert("Patologia não encontrada no banco de dados local.");
    }
  };

  const handlePathologySelect = (pathology: Pathology) => {
    setSelectedPathology(pathology);
    setActiveTab('conduta');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Stethoscope className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">
              Med<span className="text-indigo-600">Consult</span>
            </h1>
          </div>
          
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Pesquisar patologia ou conduta..."
              className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <div className="flex items-center gap-4">
            <button className="text-slate-500 hover:text-indigo-600 transition-colors">
              <BookOpen className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-slate-500" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar - Specialties */}
        <aside className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] mb-4 flex items-center gap-2">
              <ClipboardList className="w-3.5 h-3.5" />
              Especialidades
            </h2>
            <nav className="space-y-1">
              {SPECIALTIES.map((spec) => (
                <button
                  key={spec.id}
                  onClick={() => handleSpecialtySelect(spec)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedSpecialty.id === spec.id 
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100' 
                      : 'text-slate-600 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <span className="truncate">{spec.name}</span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform shrink-0 ${selectedSpecialty.id === spec.id ? 'translate-x-1' : 'opacity-0'}`} />
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
            <h3 className="font-bold text-sm mb-2 flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Dica Médica
            </h3>
            <p className="text-[10px] text-indigo-100 leading-relaxed">
              Sempre valide as doses de acordo com o peso e função renal do paciente. Este assistente é uma ferramenta de apoio.
            </p>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="lg:col-span-7 space-y-6">
          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-slate-200/50 rounded-xl w-fit">
            <button 
              onClick={() => setActiveTab('anamnese')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'anamnese' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              Anamnese
            </button>
            <button 
              onClick={() => setActiveTab('conduta')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'conduta' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Pill className="w-4 h-4" />
              Conduta & Prescrição
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'anamnese' ? (
              <motion.div 
                key="anamnese"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold px-2 py-1 bg-indigo-100 text-indigo-700 rounded uppercase">
                      {selectedSpecialty.name}
                    </span>
                    <span className="text-[10px] text-slate-400 italic">Modelo Padrão Normal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setAnamnesis(selectedSpecialty.template)}
                      className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
                      title="Resetar modelo"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => copyToClipboard(anamnesis)}
                      className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100"
                    >
                      {copied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copiado!' : 'Copiar Tudo'}
                    </button>
                  </div>
                </div>
                <textarea
                  ref={textareaRef}
                  value={anamnesis}
                  onChange={(e) => setAnamnesis(e.target.value)}
                  className="w-full h-[600px] p-8 text-slate-700 font-mono text-sm leading-relaxed focus:outline-none resize-none"
                  placeholder="Selecione uma especialidade para carregar o modelo..."
                />
              </motion.div>
            ) : (
              <motion.div 
                key="conduta"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {selectedPathology ? (
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 bg-indigo-50/30">
                      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <Pill className="text-indigo-600 w-6 h-6" />
                        {selectedPathology.name}
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">Baseado em evidências e diretrizes atuais.</p>
                    </div>
                    <div className="p-8">
                      <div className="prose prose-slate max-w-none">
                        <pre className="whitespace-pre-wrap font-sans text-slate-700 bg-slate-50 p-6 rounded-xl border border-slate-100 leading-relaxed">
                          {selectedPathology.treatment}
                        </pre>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <button 
                          onClick={() => copyToClipboard(selectedPathology.treatment)}
                          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                        >
                          {copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                          {copied ? 'Copiado para Clipboard' : 'Copiar Prescrição'}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center">
                    <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="text-slate-400 w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">Nenhuma conduta selecionada</h3>
                    <p className="text-slate-500 max-w-xs mx-auto mt-2">
                      Pesquise uma patologia na barra superior ou selecione na lista lateral para visualizar o modelo de tratamento e prescrição.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Right Sidebar - Pathologies List */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[calc(100vh-160px)] sticky top-24">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 space-y-3">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.1em] flex items-center gap-2">
                <Pill className="w-3.5 h-3.5 text-indigo-600" />
                Condutas Rápidas
              </h2>
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 w-3 h-3" />
                <input 
                  type="text"
                  placeholder="Filtrar lista..."
                  className="w-full bg-white border border-slate-200 rounded-lg py-1.5 pl-8 pr-3 text-[10px] focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  value={pathologySearch}
                  onChange={(e) => setPathologySearch(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
              <div className="space-y-1">
                {filteredPathologies.length > 0 ? (
                  filteredPathologies.map((path) => (
                    <button
                      key={path.name}
                      onClick={() => handlePathologySelect(path)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                        selectedPathology?.name === path.name 
                          ? 'bg-indigo-600 text-white shadow-md' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {path.name}
                    </button>
                  ))
                ) : (
                  <div className="py-8 text-center px-4">
                    <p className="text-[10px] text-slate-400 italic">Nenhuma conduta encontrada para "{pathologySearch}"</p>
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50/30 text-center">
              <p className="text-[10px] text-slate-400">
                {filteredPathologies.length} de {COMMON_PATHOLOGIES.length} condutas
              </p>
            </div>
          </div>
        </aside>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-xs">
            © 2026 MedConsult. Desenvolvido para fins educacionais e suporte à decisão clínica. 
            Consulte sempre as fontes oficiais.
          </p>
        </div>
      </footer>
    </div>
  );
}
