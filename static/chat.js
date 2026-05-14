
(function(){
  const launcher = document.getElementById('chatLauncher');
  const box = document.getElementById('chatBox');
  const body = document.getElementById('chatBody');
  const input = document.getElementById('chatInput');
  const send = document.getElementById('chatSend');
  if(!launcher || !box) return;
  function add(text, who='agent'){
    const wrap = document.createElement('div');
    wrap.className = 'msg ' + who;
    const b = document.createElement('div');
    b.className = 'bubble';
    b.textContent = text;
    wrap.appendChild(b);
    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
  }
  launcher.addEventListener('click', ()=>{
    box.style.display = box.style.display==='block' ? 'none' : 'block';
    if(box.style.display==='block' && !box.dataset.boot){
      add('Olá! Bem-vindo ao suporte CarbonTrack 🚚');
      add('Como podemos ajudar hoje?');
      box.dataset.boot = '1';
    }
  });
  function botReply(text){
    const t = text.toLowerCase();
    if(t.includes('login')) return 'Para acessar, use o usuário teste e a senha 1234 nesta demo.';
    if(t.includes('contato') || t.includes('suporte')) return 'Fale com suporte@carbontrack.demo (exemplo).';
    if(t.includes('emiss')) return 'Veja detalhes de emissões nas telas Emissões e Caminhões.';
    return 'Obrigado! Em breve um agente retornará.';
  }
  send.addEventListener('click', ()=>{
    const v = (input.value||'').trim();
    if(!v) return;
    add(v,'user'); input.value='';
    setTimeout(()=> add(botReply(v),'agent'), 400);
  });
  input.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ send.click(); } });
})();
