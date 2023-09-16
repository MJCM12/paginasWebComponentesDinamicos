const nightModeButton = document.getElementById('night-mode');
nightModeButton.addEventListener('click', NightMode);

function NightMode() {

  

    const isNightMode = document.body.classList.contains('night-mode');
    const foto = document.getElementById('foto');
    const fotoNight = document.getElementById('foto-night');

    document.body.classList.toggle('night-mode');

        if (isNightMode) {

        foto.style.display = 'none';
        fotoNight.style.display = 'block';
        
    } else {
      
        foto.style.display = 'block';
        fotoNight.style.display = 'none';
    }

}