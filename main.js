const details = {
    1: {
      title: 'Mystic Falls Viewpoint',
      text: 'This waterfall is surrounded by lush greenery, blue water, and a peaceful forest ambience. The wooden deck offers a perfect place to relax and enjoy the mist.'
    },
    2: {
      title: 'Emerald Tea Gardens',
      text: 'Endless rolling hills covered with fresh tea plantations. Perfect for nature walks, photography, and enjoying cool mountain weather.'
    },
    3: {
      title: 'Valley Trek Waterfall Point',
      text: 'A stunning trekking spot with a tall cliff waterfall and breathtaking valley views. Ideal for trekkers and adventure lovers.'
    }
  };
  
  
  document.getElementById('year').textContent = new Date().getFullYear();
  
  document.querySelectorAll('.more-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const id = btn.dataset.id;
      showDetail(id);
    });
  });
  
  document.getElementById('backBtn').addEventListener('click', ()=>{
    document.getElementById('detail').classList.add('hidden');
    document.getElementById('spots').classList.remove('hidden');
  });
  
  function showDetail(id){
    const d = details[id];
    const el = document.getElementById('detailContent');
    el.innerHTML = `<h2>${d.title}</h2><p>${d.text}</p>`;
    document.getElementById('spots').classList.add('hidden');
    document.getElementById('detail').classList.remove('hidden');
  }
  