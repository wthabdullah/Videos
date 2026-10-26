// Usage: node render.js <folder> <out.pdf> [?print|?final]
//   ?print adds 3 mm bleed, ?final hides empty photo slots.
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const dir = path.resolve(process.argv[2]); const out = process.argv[3];
  const b = await chromium.launch(); const pg = await b.newPage({viewport:{width:560,height:794}});
  await pg.goto('file://' + dir + '/index.html' + (process.argv[4]||'')); await pg.evaluate('document.fonts.ready'); await pg.waitForTimeout(600);
  const rep = await pg.evaluate(() => [...document.querySelectorAll('.page')].map((p,i)=>{
    const r=p.getBoundingClientRect(); let over=[];
    p.querySelectorAll('*').forEach(e=>{ if(e.closest('[data-nofit]')) return; const q=e.getBoundingClientRect(); if(q.height>0 && (q.bottom-r.top)/3.7795>210.2 && getComputedStyle(e).position!=='absolute') over.push(e.className)});
    const foot=p.querySelector('.foot'); const body=p.querySelector('.body'); let maxb=0;
    if(body) body.querySelectorAll('*').forEach(e=>{ if(e.closest('[data-nofit]')) return; const q=e.getBoundingClientRect(); if(q.height>0 && q.bottom-r.top>maxb) maxb=q.bottom-r.top});
    return {page:i+1, contentMM:+(maxb/3.7795).toFixed(1), footMM: foot?+((foot.getBoundingClientRect().top-r.top)/3.7795).toFixed(1):null, over:[...new Set(over)].slice(0,4)};
  }));
  console.log(JSON.stringify(rep));
  const bleed=(process.argv[4]||'').includes('print'); // 3 mm bleed each side
  await pg.pdf({path: out, width: bleed?'154mm':'148mm', height: bleed?'216mm':'210mm', printBackground:true, preferCSSPageSize:!bleed});
  await b.close();
})();
