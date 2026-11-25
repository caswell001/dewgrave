// Auto-ping IndexNow after each deploy so search engines re-crawl changed pages.
const KEY="c1a43e6452ab4c17ac161607521921f6", HOST="dewgrave.com";
const sm = await fetch(`https://${HOST}/sitemap.xml`).then(r=>r.text()).catch(()=>"");
let urls=[...sm.matchAll(/<loc>\s*([^<\s]+)/g)].map(m=>m[1]);
if(!urls.length) urls=[`https://${HOST}/`];
try{
  const r=await fetch("https://api.indexnow.org/indexnow",{method:"POST",headers:{"content-type":"application/json; charset=utf-8"},body:JSON.stringify({host:HOST,key:KEY,keyLocation:`https://${HOST}/${KEY}.txt`,urlList:urls})});
  console.log("IndexNow",r.status,urls.length,"urls");
}catch(e){ console.log("IndexNow error",e.message); }
