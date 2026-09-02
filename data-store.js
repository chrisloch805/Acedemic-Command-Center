window.ACC_STORE=(function(){
 const LOCAL_KEY='academic-command-center-v5';
 async function request(path,opts={}){const base=window.ACC_CONFIG?.apiBase||'';const r=await fetch(base+path,{headers:{'Content-Type':'application/json'},...opts});if(!r.ok)throw new Error('Cloud request failed: '+r.status);return r.status===204?null:r.json()}
 async function load(seed){if(window.ACC_CONFIG?.cloudEnabled&&window.ACC_CONFIG.apiBase){try{return await request('/api/state')}catch(e){console.warn('Cloud unavailable; using local cache.',e)}}const cached=localStorage.getItem(LOCAL_KEY);return cached?JSON.parse(cached):structuredClone(seed)}
 async function save(state){localStorage.setItem(LOCAL_KEY,JSON.stringify(state));if(window.ACC_CONFIG?.cloudEnabled&&window.ACC_CONFIG.apiBase){return request('/api/state',{method:'PUT',body:JSON.stringify(state)})}return null}
 async function canvasSync(){if(!window.ACC_CONFIG?.canvasEnabled)throw new Error('Canvas integration is not configured.');return request(window.ACC_CONFIG.canvasSyncEndpoint,{method:'POST'})}
 async function canvasConnect(){if(!window.ACC_CONFIG?.canvasEnabled)throw new Error('Canvas integration is not configured.');return request(window.ACC_CONFIG.canvasAuthEndpoint,{method:'POST'})}
 return {load,save,canvasSync,canvasConnect};
})();
