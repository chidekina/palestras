const pptxgen = require('/home/hidekina/.nvm/versions/node/v24.11.1/lib/node_modules/pptxgenjs');
const html2pptx = require('/home/hidekina/.claude/skills/pptx/scripts/html2pptx');
const path = require('path');

async function build() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'César Nagano';
  pptx.title = 'O Método XP Aplicado com IA';

  const slides = [
    'slide1.html',             // Capa
    'slide_xp_values.html',   // XP 5 Valores
    'slide_xp_practices.html',// 12 Práticas
    'slide2.html',             // Pilares core
    'slide_xp_feedback.html', // Ciclos de Feedback
    'slide3.html',             // IA entra no loop
    'slide4.html',             // AI-Assisted Pair
    'slide5.html',             // TDD com IA
    'slide6.html',             // Refatoração + Clean Code
    'slide7.html',             // XP + IA tabela
    'slide_workflow.html',    // Nosso Workflow
    'slide_gsd.html',         // GSD
    'slide_skills.html',      // Skills
    'slide9.html',             // Live Coding
    'slide10.html',            // Orquestração
    'slide11.html',            // Criando um Agente
    'slide8.html',             // Encerramento
  ];

  for (const s of slides) {
    await html2pptx(path.join(__dirname, 'slides', s), pptx);
  }

  const out = path.join(__dirname, 'xp-ia.pptx');
  await pptx.writeFile({ fileName: out });
  console.log('Salvo em:', out);
}

build().catch(err => { console.error(err); process.exit(1); });
