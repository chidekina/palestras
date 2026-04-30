const pptxgen = require('/home/hidekina/.nvm/versions/node/v24.11.1/lib/node_modules/pptxgenjs');
const html2pptx = require('/home/hidekina/.claude/skills/pptx/scripts/html2pptx');
const path = require('path');

async function build() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'César Nagano';
  pptx.title = 'O Método XP Aplicado com IA';

  const slides = [
    'slide1.html',
    'slide2.html',
    'slide3.html',
    'slide4.html',
    'slide5.html',
    'slide6.html',
    'slide7.html',
    'slide9.html',
    'slide10.html',
    'slide11.html',
    'slide8.html',
  ];

  for (const s of slides) {
    await html2pptx(path.join(__dirname, 'slides', s), pptx);
  }

  const out = path.join(__dirname, 'xp-ia.pptx');
  await pptx.writeFile({ fileName: out });
  console.log('Salvo em:', out);
}

build().catch(err => { console.error(err); process.exit(1); });
