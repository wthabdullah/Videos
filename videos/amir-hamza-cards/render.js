const {chromium}=require('playwright');const fs=require('fs');
const [,, scene, dur, fps='30', still]=process.argv;
(async()=>{
 const b=await chromium.launch();
 const p=await b.newPage({viewport:{width:480,height:854},deviceScaleFactor:4.5});
 await p.goto('file://'+__dirname+'/index.html?scene='+scene);
 await p.evaluate(()=>document.fonts.ready);
 await p.waitForTimeout(500);
 const dir=`out/frames_${scene}`;fs.mkdirSync(dir,{recursive:true});
 if(still){await p.evaluate(t=>seek(t),+still);await p.screenshot({path:`out/${scene}_still.png`,omitBackground:scene==='bar'});await b.close();return}
 const n=Math.round(dur*fps);
 for(let i=0;i<n;i++){await p.evaluate(t=>seek(t),i/fps);await p.screenshot({path:`${dir}/f${String(i).padStart(4,'0')}.png`})}
 await b.close();
})();
