export interface SpecialtyTemplate {
  id: string;
  name: string;
  template: string;
}

export interface Pathology {
  name: string;
  treatment: string;
}

export const SPECIALTIES: SpecialtyTemplate[] = [
  {
    id: 'geral',
    name: 'Clínica Médica',
    template: `IDENTIFICAÇÃO:
Nome: [Nome do Paciente], Idade: [Idade], Sexo: [Sexo], Cor: [Cor], Estado Civil: [Estado Civil], Profissão: [Profissão], Naturalidade: [Naturalidade], Procedência: [Procedência].

QUEIXA PRINCIPAL:
"Check-up de rotina" ou [Queixa do paciente]

HISTÓRIA DA DOENÇA ATUAL (HDA):
Paciente nega sintomas agudos. Nega dor torácica, dispneia, palpitações, tosse ou alterações do hábito intestinal/urinário. Nega febre ou perda ponderal recente.

ANTECEDENTES PESSOAIS:
Nega HAS, DM, Asma ou outras comorbidades. Nega cirurgias prévias. Nega alergias medicamentosas.
Vacinação: Em dia.

ANTECEDENTES FAMILIARES:
Nega histórico familiar de neoplasias precoces ou doenças cardiovasculares hereditárias.

HÁBITOS DE VIDA:
Nega tabagismo ou etilismo. Pratica atividade física regular (3x/semana). Sono reparador. Dieta equilibrada.

EXAME FÍSICO (NORMAL):
BEG, LOTE, acianótico, anictérico, febril, hidratado.
Aparelho Cardiovascular: RCR em 2T, bulhas normofonéticas, sem sopros. FC: 72 bpm. PA: 120/80 mmHg.
Aparelho Respiratório: MV presente bilateralmente, sem ruídos adventícios. FR: 16 irpm. SatO2: 98% em AA.
Abdome: Plano, ruídos hidroaéreos presentes, indolor à palpação superficial e profunda. Sem visceromegalias.
Extremidades: Bem perfundidas, sem edema, pulsos periféricos presentes e simétricos.`
  },
  {
    id: 'ginecologia',
    name: 'Ginecologia',
    template: `IDENTIFICAÇÃO:
Nome: [Nome], Idade: [Idade].

QUEIXA PRINCIPAL:
Rotina ginecológica.

HISTÓRIA DA DOENÇA ATUAL (HDA):
Paciente assintomática. Nega corrimento vaginal, prurido, sinusorragia ou dor pélvica.

ANTECEDENTES GINECO-OBSTÉTRICOS:
Menarca: [Idade]. Ciclos: Regulares (28/28 dias). Duração: 5 dias. Fluxo: Normal.
DUM: [Data].
Sexarca: [Idade]. Parceiros: [Número]. Método Contraceptivo: [Método].
Gestações: [G], Partos: [P], Abortos: [A].
Último Preventivo (Papanicolau): [Data/Resultado].
Última Mamografia: [Data/Resultado].

EXAME FÍSICO GINECOLÓGICO:
Mamas: Simétricas, sem nódulos palpáveis ou descargas papilares. Axilas livres.
Genitália Externa: Sem lesões, vulva de aspecto normal.
Especular: Conteúdo vaginal fisiológico, colo uterino epitelizado, sem lesões visíveis.
Toque Vaginal: Útero em AVF, tamanho normal, móvel, indolor. Anexos não palpáveis e indolores.`
  },
  {
    id: 'cardiologia',
    name: 'Cardiologia',
    template: `QUEIXA PRINCIPAL:
Avaliação cardiológica.

HDA:
Paciente nega precordialgia típica ou atípica. Nega dispneia aos esforços, ortopneia ou dispneia paroxística noturna. Nega palpitações, síncope ou pré-síncope. Nega claudicação intermitente.

ANTECEDENTES:
Nega HAS, DM ou Dislipidemia. Nega histórico de IAM ou AVC.

EXAME FÍSICO:
PA: 120/80 mmHg (ambos os braços). FC: 70 bpm.
Precordial: Ictus cordis não visível, palpável no 5º EIE na linha hemiclavicular, ocupando 2 polpas digitais. RCR em 2T, bulhas normofonéticas, sem sopros ou desdobramentos.
Pulsos: Carotídeos, braquiais, radiais, femorais, poplíteos, tibiais posteriores e pediosos presentes, amplos e simétricos.
Pescoço: Sem turgência jugular a 45º. Refluxo hepatojugular ausente.`
  },
  {
    id: 'pediatria',
    name: 'Pediatria (Puericultura)',
    template: `IDENTIFICAÇÃO:
Nome da criança: [Nome], Idade: [Idade], Acompanhante: [Grau de parentesco].

QUEIXA PRINCIPAL:
Consulta de puericultura.

HISTÓRIA DA DOENÇA ATUAL:
Criança ativa, bom estado geral. Mãe nega febre, tosse, vômitos ou diarreia.

ANTECEDENTES NEONATAIS:
Tipo de parto: [Parto], Idade Gestacional: [IG], Peso ao nascer: [Peso], Apgar: [Apgar]. Intercorrências neonatais: [Nega].

ALIMENTAÇÃO:
Aleitamento materno exclusivo/misto/fórmula. Introdução alimentar: [Se aplicável].

DESENVOLVIMENTO NEUROPSICOMOTOR:
[ ] Sustenta a cabeça
[ ] Senta com/sem apoio
[ ] Engatinha/Anda
[ ] Balbucia/Fala palavras
[ ] Interage com o examinador

EXAME FÍSICO:
Peso: [ ], Estatura: [ ], PC: [ ]. (Plotados em curva da OMS).
Pele: Sem lesões ou exantemas.
Fontanela: Plana e normotensa.
Orofaringe e Otoscopia: Sem alterações.
ACV: RCR 2T, sem sopros. AR: MVB sem RA.
Abdome: Sem massas ou visceromegalias.
Genitália: Masculina (testículos tópicos) / Feminina (sem sinéquias).
Quadril: Manobras de Ortolani e Barlow negativas.`
  },
  {
    id: 'ortopedia',
    name: 'Ortopedia',
    template: `QUEIXA PRINCIPAL:
Dor em [Localização].

HDA:
Início dos sintomas há [Tempo]. Caráter da dor: [Tipo]. Fatores de melhora: [Repouso/Gelo]. Fatores de piora: [Movimento/Carga]. Nega trauma agudo ou queda. Nega febre ou sintomas sistêmicos. Nega parestesias ou perda de força.

EXAME FÍSICO ORTOPÉDICO:
Inspeção: Sem desalinhamentos, edemas, equimoses ou cicatrizes. Musculatura trófica e simétrica.
Palpação: Ausência de pontos gatilho ou dor à palpação óssea. Temperatura local normal.
Mobilidade: ADM (Amplitude de Movimento) ativa e passiva preservada e indolor em todos os planos.
Testes Especiais: [Negativos para a região avaliada].
Neurovascular: Pulsos distais presentes e simétricos. Sensibilidade e força preservadas (Grau V).`
  },
  {
    id: 'neurologia',
    name: 'Neurologia',
    template: `QUEIXA PRINCIPAL:
Cefaleia / Alteração de sensibilidade / Outros.

HDA:
Paciente nega déficits focais súbitos. Nega crises convulsivas. Nega alterações visuais ou auditivas. Nega tontura ou desequilíbrio.

EXAME NEUROLÓGICO:
Nível de Consciência: LOTE, Glasgow 15.
Pares de Nervos Cranianos: II a XII sem alterações. Pupilas isocóricas e fotorreagentes.
Motricidade: Força Grau V em 4 membros, simétrica. Tônus normal.
Sensibilidade: Preservada (tátil, térmica e dolorosa) em todos os dermátomos.
Reflexos: ++/IV globalmente. Cutâneo-plantar em flexão bilateral (Babinski negativo).
Coordenação/Equilíbrio: Index-nariz e Diadococinesia normais. Romberg negativo. Marcha normal.`
  },
  {
    id: 'psiquiatria',
    name: 'Psiquiatria',
    template: `QUEIXA PRINCIPAL:
"Tristeza" / "Ansiedade" / Acompanhamento.

EXAME DO ESTADO MENTAL:
Aparência: Bem cuidado, asseio preservado, atitude colaborativa.
Consciência: Vigil. Atenção: Preservada.
Orientação: Autopsiquicamente e alopsiquicamente orientado.
Memória: Preservada (remota e recente).
Inteligência: Clinicamente na média.
Pensamento: Curso normal, forma lógica, conteúdo sem delírios ou ideação suicida/homicida.
Linguagem: Clara, coerente, sem alterações qualitativas.
Sensopercepção: Ausência de alucinações ou ilusões.
Humor: Eutímico. Afeto: Sintônico e modulado.
Psicomotricidade: Sem agitação ou lentificação.
Juízo Crítico: Preservado. Insight: Presente.`
  },
  {
    id: 'gastroenterologia',
    name: 'Gastroenterologia',
    template: `QUEIXA PRINCIPAL:
Dor abdominal / Dispepsia.

HDA:
Paciente nega disfagia ou odinofagia. Nega náuseas ou vômitos. Hábito intestinal regular, fezes de consistência normal, sem sangue, muco ou melena. Nega pirose ou regurgitação ácida.

EXAME FÍSICO ABDOMINAL:
Inspeção: Plano, sem cicatrizes, circulações colaterais ou hérnias visíveis.
Ausculta: Ruídos hidroaéreos presentes e normais em todos os quadrantes.
Percussão: Timpanismo global preservado. Espaço de Traube livre.
Palpação Superficial e Profunda: Abdome flácido, indolor. Ausência de massas ou visceromegalias.
Sinais Especiais: Blumberg negativo. Murphy negativo. Giordano negativo.`
  },
  {
    id: 'dermatologia',
    name: 'Dermatologia',
    template: `QUEIXA PRINCIPAL:
Lesão na pele em [Localização].

HDA:
Início há [Tempo]. Evolução: [Progressiva/Estável]. Sintomas associados: [Prurido/Dor/Ardor]. Fatores desencadeantes: [Sol/Produtos/Alimentos]. Tratamentos prévios: [Nenhum/Cremes].

EXAME DERMATOLÓGICO:
Localização: [Local].
Tipo de Lesão: [Mácula/Pápula/Nódulo/Vesícula/Placa].
Cor: [Eritematosa/Hipocrômica/Hipercrômica].
Bordas: [Regulares/Irregulares/Bem delimitadas].
Superfície: [Lisa/Descamativa/Crostosa].
Distribuição: [Isolada/Agrupada/Disseminada].
Anexos: Unhas e cabelos sem alterações.`
  },
  {
    id: 'endocrinologia',
    name: 'Endocrinologia',
    template: `QUEIXA PRINCIPAL:
Acompanhamento de [Diabetes/Tireoide/Obesidade].

HDA:
Paciente nega poliúria, polidipsia ou polifagia. Nega tremores, palpitações ou intolerância ao calor/frio. Nega alteração de peso súbita. Nega cansaço excessivo ou sonolência.

EXAME FÍSICO ENDÓCRINO:
Peso: [ ] kg. Estatura: [ ] m. IMC: [ ]. Circunferência Abdominal: [ ] cm.
Tireoide: Tamanho normal, consistência fibroelástica, móvel à deglutição, sem nódulos palpáveis. Ausência de sopros.
Pele: Sem acantose nigricans, estrias violáceas ou hirsutismo.
Pés (se DM): Pulsos presentes, sensibilidade preservada ao monofilamento, sem lesões.`
  },
  {
    id: 'urologia',
    name: 'Urologia',
    template: `QUEIXA PRINCIPAL:
Sintomas urinários / Avaliação de próstata.

HDA:
Nega disúria, polaciúria ou urgência miccional. Nega hesitação, jato fraco ou sensação de esvaziamento incompleto. Nega nictúria excessiva. Nega hematúria.

EXAME FÍSICO UROLÓGICO:
Abdome: Bexiga não palpável (ausência de bexigoma).
Genitália Masculina: Testículos tópicos, sem massas ou hidrocele. Pênis sem lesões ou secreções.
Toque Retal (se indicado): Próstata de tamanho normal (~20g), consistência elástica, superfície lisa, limites precisos, indolor, sem nódulos suspeitos.`
  },
  {
    id: 'otorrino',
    name: 'Otorrinolaringologia',
    template: `QUEIXA PRINCIPAL:
Dor de ouvido / Nariz entupido / Dor de garganta.

HDA:
Nega otalgia, otorréia ou hipoacusia. Nega obstrução nasal, rinorréia ou espirros frequentes. Nega odinofagia ou disfonia.

EXAME OTORRINO:
Otoscopia: Conduto auditivo externo livre. Membrana timpânica íntegra, translúcida, com brilho preservado.
Rinoscopia: Mucosa corada, cornetos normotróficos, septo centrado, sem secreções purulentas.
Orofaringe: Mucosa úmida, amígdalas normotróficas (Grau I), sem exsudatos. Pilares e úvula normais.`
  },
  {
    id: 'nefrologia',
    name: 'Nefrologia',
    template: `QUEIXA PRINCIPAL:
Alteração na cor da urina / Edema / Acompanhamento de função renal.

HDA:
Nega hematúria macroscópica ou urina espumosa. Nega disúria ou polaciúria. Nega dor lombar. Nega prurido ou hálito urêmico.

EXAME FÍSICO NEFROLÓGICO:
PA: [ ] mmHg.
Edema: Ausente / Presente (Grau [ ]/IV, localização [ ]).
Giordano: Negativo bilateralmente.
Ausculta Renal: Ausência de sopros em artérias renais.`
  },
  {
    id: 'geriatria',
    name: 'Geriatria',
    template: `QUEIXA PRINCIPAL:
Avaliação geriátrica ampla.

HDA:
Paciente nega quedas recentes. Nega incontinência urinária ou fecal. Nega esquecimentos que interfiram nas atividades de vida diária. Nega polifarmácia sem orientação.

AVALIAÇÃO GERIÁTRICA:
Funcionalidade: Independente para AVDs e AVIs.
Cognição: Sem sinais de declínio evidente.
Mobilidade: Teste "Timed Up and Go" (TUG) normal.
Nutrição: Apetite preservado, sem perda de peso.

EXAME FÍSICO:
PA (Sentado e Em pé): Pesquisa de hipotensão ortostática.
Pele: Presença de fragilidade capilar ou lesões por pressão.
ACV/AR: Sem alterações significativas.`
  },
  {
    id: 'oftalmologia',
    name: 'Oftalmologia',
    template: `QUEIXA PRINCIPAL:
Baixa acuidade visual / Olho vermelho / Prurido ocular.

HDA:
Início há [Tempo]. Unilateral ou bilateral. Presença de secreção (purulenta/aquosa). Nega dor ocular profunda ou fotofobia intensa. Nega visualização de halos ou moscas volantes.

EXAME OFTALMOLÓGICO (BÁSICO):
Inspeção: Pálpebras sem edemas ou lesões. Conjuntiva (corada/hiperemiada).
Córnea: Transparente, sem opacidades.
Pupilas: Isocóricas e fotorreagentes.
Teste de Acuidade (Snellen): OD [ ] / OE [ ].
Motilidade Ocular: Preservada em todas as direções.`
  },
  {
    id: 'infectologia',
    name: 'Infectologia',
    template: `QUEIXA PRINCIPAL:
Febre a esclarecer / Acompanhamento de doença infecciosa crônica.

HDA:
Febre: Início, frequência, aferida ou referida. Sintomas associados (calafrios, sudorese, perda ponderal).
Exposição: Viagens recentes, contato com animais, consumo de água/alimentos suspeitos, comportamento de risco.

EXAME FÍSICO:
Linfonodos: Cadeias cervicais, axilares e inguinais (tamanho, consistência, mobilidade, dor).
Pele: Presença de exantemas, petéquias ou escaras.
Visceromegalias: Pesquisa de hepatoesplenomegalia.`
  },
  {
    id: 'cirurgia',
    name: 'Evolução Cirúrgica',
    template: `IDENTIFICAÇÃO:
Nome: [Nome], Idade: [Idade], PO: [Dia de Pós-Operatório], Cirurgia: [Nome da Cirurgia].

EVOLUÇÃO:
Paciente em [PO] de [Cirurgia]. Refere [Melhora/Piora] do quadro. Refere [Dor/Ausência de dor] em sítio cirúrgico. Refere [Eliminação de flatos/Fezes]. Refere [Diurese presente]. Nega febre.

EXAME FÍSICO:
BEG, LOTE, hidratado, corado, febril.
ACV: RCR 2T, sem sopros. AR: MVB sem RA.
Abdome: [Plano/Globoso], RHA [Presentes/Diminuídos], [Indolor/Doloroso] à palpação. Ausência de sinais de peritonite.
Sítio Cirúrgico: Ferida operatória com [Bom aspecto/Sinais logísticos], [Sem secreções/Com secreção serosa/purulenta]. Drenos: [Débito e aspecto].
Extremidades: Sem sinais de TVP.

CONDUTA:
1. Dieta: [Suspensa/Líquida/Pastosa/Livre].
2. Analgesia: [Esquema].
3. Antibioticoterapia: [Se aplicável].
4. Cuidados com ferida e drenos.
5. Deambulação estimulada.`
  }
];

export const COMMON_PATHOLOGIES: Pathology[] = [
  {
    name: "Hipertensão Arterial Sistêmica (HAS)",
    treatment: `EXAMES COMPLEMENTARES:
- MAPA de 24h ou MRPA.
- Creatinina, Potássio, Glicemia, Perfil Lipídico, Ácido Úrico.
- Urina tipo I (Albuminúria).
- ECG.

PRESCRIÇÃO:
1. Losartana 50mg -------------------- 30 comp
   Tomar 1 comp VO, 1x ao dia (manhã).
2. Hidroclorotiazida 25mg ------------- 30 comp
   Tomar 1 comp VO, 1x ao dia (manhã).`
  },
  {
    name: "Diabetes Mellitus Tipo 2",
    treatment: `EXAMES COMPLEMENTARES:
- Glicemia de jejum, HbA1c, TOTG 75g.
- Albuminúria/Creatinúria, Fundo de olho.

PRESCRIÇÃO:
1. Metformina 850mg ------------------ 60 comp
   Tomar 1 comp VO, 2x ao dia (após café e jantar).`
  },
  {
    name: "Pneumonia Adquirida na Comunidade (PAC)",
    treatment: `EXAMES COMPLEMENTARES:
- Rx de Tórax (PA e Perfil).
- Hemograma, PCR, SatO2.

PRESCRIÇÃO:
1. Amoxicilina 500mg ----------------- 21 caps
   Tomar 1 caps VO, 8/8h por 7 dias.
2. Dipirona 500mg -------------------- 1 frasco
   Tomar 40 gotas VO, se dor ou febre (máx 6/6h).`
  },
  {
    name: "Insuficiência Cardíaca (IC)",
    treatment: `EXAMES COMPLEMENTARES:
- Ecocardiograma, BNP/NT-proBNP, Rx Tórax, ECG.

PRESCRIÇÃO (ICFER):
1. Sacubitril/Valsartana 49/51mg ------ 60 comp
   Tomar 1 comp VO, 2x ao dia.
2. Bisoprolol 5mg --------------------- 30 comp
   Tomar 1 comp VO, 1x ao dia.
3. Dapagliflozina 10mg ---------------- 30 comp
   Tomar 1 comp VO, 1x ao dia.
4. Espironolactona 25mg --------------- 30 comp
   Tomar 1 comp VO, 1x ao dia.`
  },
  {
    name: "Asma Brônquica",
    treatment: `EXAMES COMPLEMENTARES:
- Espirometria com prova BD.

PRESCRIÇÃO (Resgate/Manutenção):
1. Formoterol 6mcg + Budesonida 200mcg -- 1 inalador
   Inalar 1 dose se sintomas (demanda).`
  },
  {
    name: "Infecção Urinária (Cistite)",
    treatment: `EXAMES COMPLEMENTARES:
- Urina I (EAS), Urocultura com Antibiograma.

PRESCRIÇÃO:
1. Nitrofurantoína 100mg -------------- 28 caps
   Tomar 1 caps VO, 6/6h por 7 dias.
2. Monuril (Fosfomicina) 3g ----------- 1 sachê
   Tomar dose única ao deitar.`
  },
  {
    name: "Hipotireoidismo",
    treatment: `EXAMES COMPLEMENTARES:
- TSH, T4 Livre, Anti-TPO.

PRESCRIÇÃO:
1. Levotiroxina 50mcg ----------------- 30 comp
   Tomar 1 comp VO, em jejum (30-60 min antes do café).`
  },
  {
    name: "Anemia Ferropriva",
    treatment: `EXAMES COMPLEMENTARES:
- Hemograma, Ferritina, Ferro Sérico, Saturação de Transferrina.

PRESCRIÇÃO:
1. Sulfato Ferroso 200mg (40mg Fe) ---- 60 comp
   Tomar 1 comp VO, 2x ao dia, 1h antes das refeições (ou com suco cítrico).`
  },
  {
    name: "Dislipidemia",
    treatment: `EXAMES COMPLEMENTARES:
- Perfil Lipídico (CT, LDL, HDL, TG), TGO/TGP.

PRESCRIÇÃO:
1. Atorvastatina 20mg ----------------- 30 comp
   Tomar 1 comp VO, à noite.`
  },
  {
    name: "Refluxo Gastroesofágico (DRGE)",
    treatment: `EXAMES COMPLEMENTARES:
- Endoscopia Digestiva Alta (EDA) - se sinais de alarme.

PRESCRIÇÃO:
1. Omeprazol 20mg --------------------- 30 caps
   Tomar 1 caps VO, em jejum (30 min antes do café).`
  },
  {
    name: "Depressão / Ansiedade",
    treatment: `EXAMES COMPLEMENTARES:
- TSH, Vitamina B12 (excluir causas orgânicas).

PRESCRIÇÃO (Exemplo):
1. Sertralina 50mg -------------------- 30 comp
   Tomar 1/2 comp VO por 7 dias, após 1 comp ao dia (manhã).`
  },
  {
    name: "Dengue",
    treatment: `EXAMES COMPLEMENTARES:
- Hemograma (Plaquetas/Hematócrito), NS1 (até 3º dia), Sorologia IgM.

PRESCRIÇÃO:
1. Dipirona 500mg -------------------- 1 frasco
   Tomar 40 gotas VO, se dor ou febre (máx 6/6h).
2. Soro de Reidratação Oral ----------- 10 envelopes
   Diluir e tomar conforme sede/perdas.

AVISO: NÃO usar AAS ou Anti-inflamatórios (AINEs).`
  },
  {
    name: "Amigdalite Bacteriana",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (Critérios de Centor).

PRESCRIÇÃO:
1. Penicilina Benzatina 1.200.000 UI -- 1 ampola
   Aplicar IM, dose única.
OU:
1. Amoxicilina 500mg ----------------- 30 caps
   Tomar 1 caps VO, 8/8h por 10 dias.`
  },
  {
    name: "Osteoartrite (Artrose)",
    treatment: `EXAMES COMPLEMENTARES:
- Rx da articulação acometida.

PRESCRIÇÃO:
1. Paracetamol 500mg ------------------ 20 comp
   Tomar 1 comp VO, até 6/6h se dor.
2. Condroitina + Glucosamina ---------- 30 sachês
   Tomar 1 sachê ao dia.`
  },
  {
    name: "Gota (Crise Aguda)",
    treatment: `EXAMES COMPLEMENTARES:
- Ácido Úrico sérico, Rx, Pesquisa de cristais no líquido sinovial.

PRESCRIÇÃO:
1. Colchicina 0,5mg ------------------- 20 comp
   Tomar 1 comp VO, 8/8h (ou conforme tolerância).
2. Naproxeno 500mg -------------------- 10 comp
   Tomar 1 comp VO, 12/12h por 5 dias.`
  },
  {
    name: "Candidíase Vaginal",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico / pH vaginal / Microscopia.

PRESCRIÇÃO:
1. Fluconazol 150mg ------------------- 1 caps
   Tomar 1 caps VO, dose única.
2. Nistatina Creme Vaginal ------------ 1 bisnaga
   Aplicar 1 aplicador cheio via vaginal, ao deitar, por 14 noites.`
  },
  {
    name: "Enxaqueca",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (Diário da cefaleia).

PRESCRIÇÃO (Crise):
1. Sumatriptana 50mg ------------------ 4 comp
   Tomar 1 comp VO ao início da aura/dor.
2. Naproxeno 500mg -------------------- 10 comp
   Tomar 1 comp VO se dor.`
  },
  {
    name: "Osteoporose",
    treatment: `EXAMES COMPLEMENTARES:
- Densitometria Óssea (DMO), Cálcio, Vitamina D.

PRESCRIÇÃO:
1. Alendronato de Sódio 70mg ---------- 4 comp
   Tomar 1 comp VO, 1x por semana, em jejum (não deitar por 30 min).
2. Carbonato de Cálcio 500mg + Vit D -- 60 comp
   Tomar 1 comp VO, 2x ao dia (junto às refeições).`
  },
  {
    name: "DPOC (Doença Pulmonar Obstrutiva Crônica)",
    treatment: `EXAMES COMPLEMENTARES:
- Espirometria (VEF1/CVF < 0.7 pós-BD).

PRESCRIÇÃO:
1. Tiotrópio (Spiriva) 18mcg ---------- 1 inalador
   Inalar 1 cápsula ao dia.
2. Salbutamol 100mcg ------------------ 1 spray
   Inalar 2 jatos se falta de ar (resgate).`
  },
  {
    name: "Colelitíase / Colecistite",
    treatment: `EXAMES COMPLEMENTARES:
- Ultrassonografia de Abdome Superior (padrão-ouro).
- Hemograma, Amilase/Lipase, TGO/TGP, Bilirrubinas.

PRESCRIÇÃO (Sintomático):
1. Escopolamina (Buscopan) 10mg ------- 20 comp
   Tomar 1 comp VO, até 6/6h se dor.
2. Dipirona 500mg -------------------- 1 frasco
   Tomar 40 gotas VO, se dor.`
  },
  {
    name: "Crise Hipertensiva (Urgência)",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (ausência de lesão de órgão-alvo).
- Creatinina, Urina I, ECG.

PRESCRIÇÃO:
1. Captopril 25mg --------------------- 1 comp
   Tomar 1 comp VO (macerar se necessário).
2. Clonidina 0,100mg ------------------ 1 comp
   Tomar 1 comp VO.`
  },
  {
    name: "Artrite Reumatóide",
    treatment: `EXAMES COMPLEMENTARES:
- Fator Reumatóide, Anti-CCP, VHS, PCR, Rx de mãos/pés.

PRESCRIÇÃO (Manutenção):
1. Metotrexato 15mg ------------------- 4 comp
   Tomar 3 comp VO, 1x por semana (mesmo dia).
2. Ácido Fólico 5mg ------------------- 4 comp
   Tomar 1 comp VO, 24h após o Metotrexato.`
  },
  {
    name: "Tuberculose Pulmonar",
    treatment: `EXAMES COMPLEMENTARES:
- Baciloscopia de Escarro (BAAR), TRM-TB (Teste Rápido), Rx Tórax.

PRESCRIÇÃO (Esquema Básico - RHZE):
1. Rifampicina + Isoniazida + Pirazinamida + Etambutol
   Tomar dose conforme peso, em jejum, por 2 meses (Fase Intensiva).`
  },
  {
    name: "Sífilis (Primária/Secundária)",
    treatment: `EXAMES COMPLEMENTARES:
- VDRL (quantitativo), Teste Rápido (Treponêmico).

PRESCRIÇÃO:
1. Penicilina Benzatina 2.400.000 UI -- 2 ampolas
   Aplicar 1.200.000 UI em cada glúteo, IM, dose única.`
  },
  {
    name: "Herpes Zoster",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (lesões vesiculares em dermátomo).

PRESCRIÇÃO:
1. Aciclovir 800mg -------------------- 35 comp
   Tomar 1 comp VO, 5x ao dia (6/6h pulando a noite), por 7 dias.`
  },
  {
    name: "Escabiose (Sarna)",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico.

PRESCRIÇÃO:
1. Permetrina 5% Creme ---------------- 1 bisnaga
   Aplicar do pescoço aos pés, deixar por 8-12h e lavar. Repetir em 7 dias.
2. Ivermectina 6mg -------------------- 2 comp
   Tomar 2 comp VO, dose única (conforme peso). Repetir em 7 dias.`
  },
  {
    name: "Acne Vulgar",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico.

PRESCRIÇÃO (Grau I/II):
1. Peróxido de Benzila 5% Gel --------- 1 bisnaga
   Aplicar fina camada à noite.
2. Adapaleno 0,1% Gel ----------------- 1 bisnaga
   Aplicar à noite (alternar se irritar).`
  },
  {
    name: "Litíase Renal (Cólica)",
    treatment: `EXAMES COMPLEMENTARES:
- Tomografia de Abdome sem contraste (padrão-ouro).
- Ultrassonografia, Urina I.

PRESCRIÇÃO (Crise):
1. Cetoprofeno 100mg ------------------ 10 comp
   Tomar 1 comp VO, 12/12h por 3 dias.
2. Tansulosina 0,4mg ------------------ 10 caps
   Tomar 1 caps VO ao dia (facilita expulsão).`
  },
  {
    name: "Hiperplasia Prostática (HPB)",
    treatment: `EXAMES COMPLEMENTARES:
- PSA, Ultrassonografia de Próstata, Urofluxometria.

PRESCRIÇÃO:
1. Doxazosina 2mg --------------------- 30 comp
   Tomar 1 comp VO, ao deitar.
2. Finasterida 5mg -------------------- 30 comp
   Tomar 1 comp VO ao dia.`
  },
  {
    name: "Parkinson",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico.

PRESCRIÇÃO:
1. Prolopa (Levodopa + Benserazida) 200/50mg
   Tomar 1/4 a 1 comp VO, 3x ao dia (30 min antes das refeições).`
  },
  {
    name: "Alzheimer",
    treatment: `EXAMES COMPLEMENTARES:
- Testes Cognitivos (MEEM), Ressonância de Crânio.

PRESCRIÇÃO:
1. Donepezila 5mg --------------------- 30 comp
   Tomar 1 comp VO, ao deitar.`
  },
  {
    name: "Rinite Alérgica",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico.

PRESCRIÇÃO:
1. Furoato de Mometasona 50mcg -------- 1 frasco
   Aplicar 2 jatos em cada narina, 1x ao dia.
2. Loratadina 10mg -------------------- 10 comp
   Tomar 1 comp VO ao dia.`
  },
  {
    name: "Sinusite Aguda",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico.

PRESCRIÇÃO:
1. Amoxicilina + Clavulanato 875/125mg - 14 comp
   Tomar 1 comp VO, 12/12h por 7 dias.
2. Lavagem Nasal com Soro Fisiológico - Frequente.`
  },
  {
    name: "Lombalgia Aguda",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (ausência de "red flags").

PRESCRIÇÃO:
1. Ciclobenzaprina 5mg ---------------- 10 comp
   Tomar 1 comp VO, ao deitar.
2. Ibuprofeno 600mg ------------------- 10 comp
   Tomar 1 comp VO, 8/8h por 3-5 dias.`
  },
  {
    name: "Hanseníase",
    treatment: `EXAMES COMPLEMENTARES:
- Baciloscopia de linfa, Biópsia de pele (se dúvida), Teste de sensibilidade.

PRESCRIÇÃO (Paucibacilar - PB):
1. Rifampicina 600mg (1x/mês) + Dapsona 100mg (diário).
   Duração: 6 meses.

PRESCRIÇÃO (Multibacilar - MB):
1. Rifampicina 600mg + Clofazimina 300mg (1x/mês).
2. Dapsona 100mg + Clofazimina 50mg (diário).
   Duração: 12 meses.`
  },
  {
    name: "HIV (Acompanhamento)",
    treatment: `EXAMES COMPLEMENTARES:
- Carga Viral, CD4/CD8, Genotipagem (se falha), Função Renal/Hepática.

PRESCRIÇÃO (Esquema de 1ª Linha):
1. Tenofovir (TDF) + Lamivudina (3TC) + Dolutegravir (DTG)
   Tomar 1 comp (TDF/3TC) + 1 comp (DTG) VO, 1x ao dia.`
  },
  {
    name: "Gonorréia / Clamídia",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico / Bacterioscopia / PCR em urina ou secreção.

PRESCRIÇÃO:
1. Ceftriaxona 500mg ------------------ 1 ampola
   Aplicar IM, dose única.
2. Azitromicina 500mg ---------------- 2 comp
   Tomar 2 comp VO, dose única (simultâneo).`
  },
  {
    name: "Otite Média Aguda",
    treatment: `EXAMES COMPLEMENTARES:
- Otoscopia.

PRESCRIÇÃO:
1. Amoxicilina 500mg ----------------- 21 caps
   Tomar 1 caps VO, 8/8h por 7 dias.
2. Dipirona 500mg -------------------- 1 frasco
   Tomar 40 gotas VO se dor.`
  },
  {
    name: "Conjuntivite Bacteriana",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico.

PRESCRIÇÃO:
1. Tobramicina 0,3% Colírio ----------- 1 frasco
   Pingar 1 gota no olho afetado, 6/6h por 7 dias.
2. Compressas geladas com soro fisiológico.`
  },
  {
    name: "Anemia Megaloblástica",
    treatment: `EXAMES COMPLEMENTARES:
- Hemograma (VCM elevado), Vitamina B12, Ácido Fólico.

PRESCRIÇÃO (Deficiência B12):
1. Cianocobalamina 1000mcg ------------ 1 ampola
   Aplicar IM, 1x por semana por 4 semanas, depois 1x por mês.`
  },
  {
    name: "Obesidade",
    treatment: `EXAMES COMPLEMENTARES:
- Glicemia, Perfil Lipídico, TSH, Função Hepática.

PRESCRIÇÃO (Opção Farmacológica):
1. Liraglutida (Saxenda) -------------- 1 caneta
   Aplicar via SC, dose progressiva (0.6mg a 3.0mg) conforme tolerância.
OU:
1. Orlistate 120mg -------------------- 42 caps
   Tomar 1 caps VO, junto às principais refeições.`
  },
  {
    name: "Fibromialgia",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (excluir outras causas).

PRESCRIÇÃO:
1. Ciclobenzaprina 5mg ---------------- 30 comp
   Tomar 1 comp VO, ao deitar.
2. Pregabalina 75mg ------------------- 30 caps
   Tomar 1 caps VO, ao deitar (pode progredir dose).`
  },
  {
    name: "Gastrite / Úlcera Péptica",
    treatment: `EXAMES COMPLEMENTARES:
- Endoscopia Digestiva Alta (EDA), Pesquisa de H. pylori (Urease).

PRESCRIÇÃO:
1. Esomeprazol 40mg ------------------- 28 caps
   Tomar 1 caps VO, em jejum (30 min antes do café).
2. Hidróxido de Alumínio -------------- 1 frasco
   Tomar 1 colher de sopa VO, 1h após as refeições ou se dor.`
  },
  {
    name: "Parasitose Intestinal (Verminoses)",
    treatment: `EXAMES COMPLEMENTARES:
- Parasitológico de Fezes (EPF) - 3 amostras.

PRESCRIÇÃO:
1. Albendazol 400mg ------------------- 3 comp
   Tomar 1 comp VO ao dia, por 3 dias (dose única se Ascaris).
2. Anitta (Nitazoxanida) 500mg -------- 6 comp
   Tomar 1 comp VO, 12/12h por 3 dias.`
  },
  {
    name: "Diarreia Aguda (Gastroenterite)",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (avaliar desidratação). EPF/Coprocultura se persistente.

PRESCRIÇÃO:
1. Soro de Reidratação Oral ----------- 10 envelopes
   Diluir 1 env em 1L de água. Tomar após cada evacuação líquida.
2. Racecadotril (Tiorfan) 100mg ------- 9 caps
   Tomar 1 caps VO, 8/8h até cessar diarreia.`
  },
  {
    name: "Insuficiência Venosa (Varizes)",
    treatment: `EXAMES COMPLEMENTARES:
- Doppler Colorido de Membros Inferiores.

PRESCRIÇÃO:
1. Diosmina 450mg + Hesperidina 50mg -- 60 comp
   Tomar 1 comp VO, 2x ao dia.
2. Meias de Compressão Elástica ------- Uso diário.`
  },
  {
    name: "Dermatite Atópica",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico.

PRESCRIÇÃO:
1. Hidratante Corporal (Cetaphil/Fisiogel)
   Aplicar em todo o corpo 2 a 3x ao dia (essencial).
2. Desonida Creme 0,05% --------------- 1 bisnaga
   Aplicar nas lesões 2x ao dia por 7-10 dias (crise).`
  },
  {
    name: "Micoses Superficiais (Tineas)",
    treatment: `EXAMES COMPLEMENTARES:
- Micológico Direto (Raspado de pele).

PRESCRIÇÃO:
1. Terbinafina Creme 1% --------------- 1 bisnaga
   Aplicar no local 2x ao dia por 2 a 4 semanas.
2. Cetoconazol Shampoo 2% ------------- 1 frasco
   Usar no banho (se Tinea Versicolor).`
  },
  {
    name: "Vaginose Bacteriana",
    treatment: `EXAMES COMPLEMENTARES:
- pH vaginal (> 4.5), Teste do mofre (Whiff test), Clue cells.

PRESCRIÇÃO:
1. Metronidazol Gel Vaginal ----------- 1 bisnaga
   Aplicar 1 aplicador cheio via vaginal, ao deitar, por 5 noites.
2. Metronidazol 500mg ----------------- 14 comp
   Tomar 1 comp VO, 12/12h por 7 dias.`
  },
  {
    name: "Tricomoníase",
    treatment: `EXAMES COMPLEMENTARES:
- Microscopia a fresco (protozoário móvel).

PRESCRIÇÃO:
1. Tinidazol 2g ----------------------- 4 comp
   Tomar 4 comp VO, dose única (Tratar parceiro!).`
  },
  {
    name: "Doença Inflamatória Pélvica (DIP)",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (Critérios de Hager), USG Pélvica, Hemograma, PCR.

PRESCRIÇÃO (Ambulatorial):
1. Ceftriaxona 500mg (IM, dose única) + Metronidazol 500mg (12/12h) + Doxiciclina 100mg (12/12h).
   Duração: 14 dias.`
  },
  {
    name: "Climatério / Menopausa",
    treatment: `EXAMES COMPLEMENTARES:
- FSH, Estradiol, Mamografia, Densitometria Óssea.

PRESCRIÇÃO (Sintomático/Fogachos):
1. Isoflavona de Soja 150mg ----------- 30 caps
   Tomar 1 caps VO ao dia.
2. Venlafaxina 37,5mg ----------------- 30 comp
   Tomar 1 comp VO ao dia (opção não hormonal).`
  },
  {
    name: "Impetigo",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico.

PRESCRIÇÃO:
1. Mupirocina Pomada 2% --------------- 1 bisnaga
   Aplicar nas lesões 3x ao dia por 7 dias.
2. Cefalexina 500mg ------------------- 28 comp
   Tomar 1 comp VO, 6/6h por 7 dias (se disseminado).`
  },
  {
    name: "Erisipela / Celulite",
    treatment: `EXAMES COMPLEMENTARES:
- Hemograma, PCR, Proteína C Reativa.

PRESCRIÇÃO:
1. Cefalexina 500mg ------------------- 40 comp
   Tomar 1 comp VO, 6/6h por 10 dias.
2. Repouso com membro elevado.`
  },
  {
    name: "Labirintite (Disfunção Vestibular)",
    treatment: `EXAMES COMPLEMENTARES:
- Manobra de Dix-Hallpike.

PRESCRIÇÃO:
1. Cinarizina 75mg -------------------- 30 comp
   Tomar 1 comp VO ao dia.
2. Meclizina (Meclin) 25mg ------------ 15 comp
   Tomar 1 comp VO, até 8/8h se crise de vertigem.`
  },
  {
    name: "Insônia",
    treatment: `EXAMES COMPLEMENTARES:
- Higiene do sono (orientação).

PRESCRIÇÃO:
1. Zolpidem 10mg ---------------------- 20 comp
   Tomar 1 comp VO, imediatamente antes de deitar (uso pontual).
2. Melatonina 3mg --------------------- 30 comp
   Tomar 1 comp VO, 1h antes de deitar.`
  },
  {
    name: "Tabagismo (Cessação)",
    treatment: `EXAMES COMPLEMENTARES:
- Teste de Fagerström (dependência).

PRESCRIÇÃO:
1. Bupropiona 150mg ------------------- 60 comp
   Tomar 1 comp VO ao dia por 3 dias, depois 1 comp 2x ao dia.
2. Adesivo de Nicotina (21mg/14mg/7mg)
   Trocar 1x ao dia (esquema regressivo).`
  },
  {
    name: "Hemorroidas",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico / Anuscopia.

PRESCRIÇÃO:
1. Proctyl (ou similar) Pomada -------- 1 bisnaga
   Aplicar local 2 a 3x ao dia.
2. Plantago Ovata (Metamucil) --------- 1 frasco
   Tomar 1 colher de sobremesa em 200ml água, 1x ao dia.`
  },
  {
    name: "Constipação Crônica",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico / Toque retal.

PRESCRIÇÃO:
1. Lactulose Xarope ------------------- 1 frasco
   Tomar 15ml VO, 1 a 2x ao dia.
2. Bisacodil 5mg ---------------------- 20 drágeas
   Tomar 1 a 2 drágeas VO ao deitar (uso esporádico).`
  },
  {
    name: "Zika / Chikungunya",
    treatment: `EXAMES COMPLEMENTARES:
- PCR (fase aguda), Sorologia IgM.

PRESCRIÇÃO:
1. Dipirona 500mg -------------------- 1 frasco
   Tomar 40 gotas VO, até 6/6h se dor/febre.
2. Prednisona 20mg -------------------- 10 comp
   Tomar 1 comp VO ao dia por 5 dias (se dor articular intensa na fase subaguda da Chikungunya).`
  },
  {
    name: "Escarlatina",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (Exantema em lixa, língua em framboesa).

PRESCRIÇÃO:
1. Amoxicilina 500mg ----------------- 30 caps
   Tomar 1 caps VO, 8/8h por 10 dias.
2. Dipirona 500mg -------------------- 1 frasco
   Tomar conforme febre.`
  },
  {
    name: "Varicela (Catapora)",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico.

PRESCRIÇÃO:
1. Permanganato de Potássio ----------- 10 comp
   Diluir 1 comp em 4L de água para banhos (secativo).
2. Dexclorfeniramina (Polaramine) ----- 1 frasco
   Tomar 5ml VO, 3x ao dia (se muito prurido).`
  },
  {
    name: "Cefaleia Tensional",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (dor em aperto, holocraniana, sem náuseas).

PRESCRIÇÃO (Crise):
1. Dipirona 1g ------------------------ 10 comp
   Tomar 1 comp VO, até 6/6h se dor.
2. Naproxeno 500mg -------------------- 10 comp
   Tomar 1 comp VO, 12/12h se dor persistente.`
  },
  {
    name: "Cefaleia em Salvas",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico (dor excruciante, periorbitária, unilateral, com sinais autonômicos).

PRESCRIÇÃO (Crise):
1. Oxigenioterapia 100% (12-15L/min) -- 15-20 min
   Via máscara com reservatório.
2. Sumatriptana 6mg SC ---------------- 1 ampola
   Aplicação subcutânea no início da crise.`
  },
  {
    name: "Vertigem Posicional Paroxística Benigna (VPPB)",
    treatment: `EXAMES COMPLEMENTARES:
- Manobra de Dix-Hallpike (Diagnóstico).

PRESCRIÇÃO:
1. Manobra de Epley (Tratamento) ------ Realizar em consultório.
2. Meclizina 25mg --------------------- 10 comp
   Tomar 1 comp VO se náuseas intensas (uso breve).`
  },
  {
    name: "Doença de Crohn",
    treatment: `EXAMES COMPLEMENTARES:
- Colonoscopia com biópsia, Calprotectina fecal, Entero-RM.

PRESCRIÇÃO (Exemplo Manutenção):
1. Azatioprina 50mg ------------------- 60 comp
   Tomar conforme orientação (dose por peso).
2. Adalimumabe 40mg ------------------- 2 canetas
   Aplicação SC a cada 14 dias (conforme protocolo).`
  },
  {
    name: "Retocolite Ulcerativa",
    treatment: `EXAMES COMPLEMENTARES:
- Colonoscopia, Calprotectina fecal, Hemograma, PCR.

PRESCRIÇÃO:
1. Mesalazina 800mg ------------------- 90 comp
   Tomar 1 a 2 comp VO, 3x ao dia.
2. Mesalazina Supositório 1g ---------- 30 unidades
   Usar 1 supositório via retal ao deitar.`
  },
  {
    name: "Hepatite A",
    treatment: `EXAMES COMPLEMENTARES:
- Anti-HAV IgM, TGO/TGP, Bilirrubinas, TAP/INR.

PRESCRIÇÃO:
1. Repouso e Hidratação.
2. Dipirona 500mg -------------------- 1 frasco
   Tomar 40 gotas VO se dor ou febre.
AVISO: Evitar álcool e medicamentos hepatotóxicos.`
  },
  {
    name: "Hepatite B (Crônica)",
    treatment: `EXAMES COMPLEMENTARES:
- HBsAg, Anti-HBs, HBeAg, Anti-HBe, Carga Viral (HBV-DNA), Elastografia.

PRESCRIÇÃO (Se indicação):
1. Tenofovir (TDF) 300mg -------------- 30 comp
   Tomar 1 comp VO ao dia.`
  },
  {
    name: "Hepatite C",
    treatment: `EXAMES COMPLEMENTARES:
- Anti-HCV, Carga Viral (HCV-RNA), Genotipagem.

PRESCRIÇÃO (Esquema Pangenotípico):
1. Sofosbuvir 400mg + Velpatasvir 100mg
   Tomar 1 comp VO ao dia por 12 semanas.`
  },
  {
    name: "Malária (Vivax)",
    treatment: `EXAMES COMPLEMENTARES:
- Gota Espessa / Teste Rápido.

PRESCRIÇÃO (Esquema Padrão):
1. Cloroquina 150mg + Primaquina 15mg
   Seguir esquema de 3 dias (Cloroquina) e 7-14 dias (Primaquina).`
  },
  {
    name: "Leishmaniose Tegumentar",
    treatment: `EXAMES COMPLEMENTARES:
- Intradermorreação de Montenegro, Biópsia/Pesquisa direta.

PRESCRIÇÃO:
1. Antimoniato de N-metil Glucamina (Glucantime)
   Aplicação IM ou EV (dose por peso) por 20-30 dias.`
  },
  {
    name: "Psoríase",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico / Biópsia (se dúvida).

PRESCRIÇÃO (Tópica):
1. Clobetasol Propionato 0,05% Creme -- 1 bisnaga
   Aplicar nas lesões 2x ao dia por 2 semanas.
2. Calcipotriol Pomada ---------------- 1 bisnaga
   Aplicar 1 a 2x ao dia.`
  },
  {
    name: "Vitiligo",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico / Lâmpada de Wood.

PRESCRIÇÃO:
1. Tacrolimus 0,1% Pomada -------------- 1 bisnaga
   Aplicar nas lesões 2x ao dia.
2. Fototerapia (PUVA/Narrow-band) ----- Conforme indicação.`
  },
  {
    name: "Alopecia Areata",
    treatment: `EXAMES COMPLEMENTARES:
- Clínico / Tricoscopia.

PRESCRIÇÃO:
1. Minoxidil 5% Solução --------------- 1 frasco
   Aplicar 1ml no couro cabeludo 2x ao dia.
2. Clobetasol Espuma/Solução ---------- 1 frasco
   Aplicar à noite nas áreas afetadas.`
  },
  {
    name: "Glaucoma de Ângulo Aberto",
    treatment: `EXAMES COMPLEMENTARES:
- Tonometria (PIO), Campimetria, OCT de Nervo Óptico.

PRESCRIÇÃO:
1. Latanoprosta 0,005% Colírio -------- 1 frasco
   Pingar 1 gota no(s) olho(s) afetado(s) ao deitar.`
  },
  {
    name: "Catarata Senil",
    treatment: `EXAMES COMPLEMENTARES:
- Avaliação oftalmológica completa / Biometria.

PRESCRIÇÃO:
1. Tratamento Cirúrgico (Facoemulsificação com Implante de LIO).`
  }
];
