const botonPro = document.querySelector('.boton-producto1');
const botonPro2 = document.querySelector('.boton-producto2');
const botonPro3 = document.querySelector('.boton-producto3');
const botonPro4 = document.querySelector('.boton-producto4');
const botonPro5 = document.querySelector('.boton-producto5');
const botonPro6 = document.querySelector('.boton-producto6');

function cambiadisplay(id) {
    if (document.getElementById('uno').style.display == 'block') {
        document.getElementById('uno').style.display = 'none';
        botonPro.style.backgroundColor = '#cc0303';
        botonPro.style.color = '#fff';
    } else {
        document.getElementById('uno').style.display = 'block';
        document.getElementById('dos').style.display = 'none';
        document.getElementById('tres').style.display = 'none';
        document.getElementById('cuatro').style.display = 'none';
        document.getElementById('cinco').style.display = 'none';
        document.getElementById('seis').style.display = 'none';

        botonPro.style.backgroundColor = '#cc0303';
        botonPro.style.color = '#fff';

        botonPro2.style.backgroundColor = '#fff';
        botonPro2.style.color = '#cc0303';

        botonPro3.style.backgroundColor = '#fff';
        botonPro3.style.color = '#cc0303';

        botonPro4.style.backgroundColor = '#fff';
        botonPro4.style.color = '#cc0303';

        botonPro5.style.backgroundColor = '#fff';
        botonPro5.style.color = '#cc0303';
        
        botonPro6.style.backgroundColor = '#fff';
        botonPro6.style.color = '#cc0303';
    }
}

function cambiadisplaydos(id) {
    if (document.getElementById('dos').style.display == 'block') {
        document.getElementById('dos').style.display = 'none';
    } else {
        document.getElementById('uno').style.display = 'none';
        document.getElementById('dos').style.display = 'block';
        document.getElementById('tres').style.display = 'none';
        document.getElementById('cuatro').style.display = 'none';
        document.getElementById('cinco').style.display = 'none';
        document.getElementById('seis').style.display = 'none';


        botonPro.style.backgroundColor = '#fff';
        botonPro.style.color = '#cc0303';

        botonPro2.style.backgroundColor = '#cc0303';
        botonPro2.style.color = '#fff';

        botonPro3.style.backgroundColor = '#fff';
        botonPro3.style.color = '#cc0303';

        botonPro4.style.backgroundColor = '#fff';
        botonPro4.style.color = '#cc0303';

        botonPro5.style.backgroundColor = '#fff';
        botonPro5.style.color = '#cc0303';
        
        botonPro6.style.backgroundColor = '#fff';
        botonPro6.style.color = '#cc0303';
    }
}

function cambiadisplaytres(id) {
    if (document.getElementById('tres').style.display == 'block') {
        document.getElementById('tres').style.display = 'none';
    } else {
        document.getElementById('uno').style.display = 'none';
        document.getElementById('dos').style.display = 'none';
        document.getElementById('tres').style.display = 'block';
        document.getElementById('cuatro').style.display = 'none';
        document.getElementById('cinco').style.display = 'none';
        document.getElementById('seis').style.display = 'none';
        
        botonPro.style.backgroundColor = '#fff';
        botonPro.style.color = '#cc0303';

        botonPro2.style.backgroundColor = '#fff';
        botonPro2.style.color = '#cc0303';

        botonPro3.style.backgroundColor = '#cc0303';
        botonPro3.style.color = '#fff';

        botonPro4.style.backgroundColor = '#fff';
        botonPro4.style.color = '#cc0303';

        botonPro5.style.backgroundColor = '#fff';
        botonPro5.style.color = '#cc0303';
        
        botonPro6.style.backgroundColor = '#fff';
        botonPro6.style.color = '#cc0303';
    }
}

function cambiadisplaycuatro(id) {
    if (document.getElementById('cuatro').style.display == 'block') {
        document.getElementById('cuatro').style.display = 'none';
    } else {
        document.getElementById('uno').style.display = 'none';
        document.getElementById('dos').style.display = 'none';
        document.getElementById('tres').style.display = 'none';
        document.getElementById('cuatro').style.display = 'block';
        document.getElementById('cinco').style.display = 'none';
        document.getElementById('seis').style.display = 'none';

        botonPro.style.backgroundColor = '#fff';
        botonPro.style.color = '#cc0303';

        botonPro2.style.backgroundColor = '#fff';
        botonPro2.style.color = '#cc0303';

        botonPro3.style.backgroundColor = '#fff';
        botonPro3.style.color = '#cc0303';

        botonPro4.style.backgroundColor = '#cc0303';
        botonPro4.style.color = '#fff';

        botonPro5.style.backgroundColor = '#fff';
        botonPro5.style.color = '#cc0303';
        
        botonPro6.style.backgroundColor = '#fff';
        botonPro6.style.color = '#cc0303';
    }
}

function cambiadisplaycinco(id) {
    if (document.getElementById('cinco').style.display == 'block') {
        document.getElementById('cinco').style.display = 'none';
    } else {
        document.getElementById('uno').style.display = 'none';
        document.getElementById('dos').style.display = 'none';
        document.getElementById('tres').style.display = 'none';
        document.getElementById('cuatro').style.display = 'none';
        document.getElementById('cinco').style.display = 'block';
        document.getElementById('seis').style.display = 'none';

        botonPro.style.backgroundColor = '#fff';
        botonPro.style.color = '#cc0303';

        botonPro2.style.backgroundColor = '#fff';
        botonPro2.style.color = '#cc0303';

        botonPro3.style.backgroundColor = '#fff';
        botonPro3.style.color = '#cc0303';

        botonPro4.style.backgroundColor = '#fff';
        botonPro4.style.color = '#cc0303';

        botonPro5.style.backgroundColor = '#cc0303';
        botonPro5.style.color = '#fff';
        
        botonPro6.style.backgroundColor = '#fff';
        botonPro6.style.color = '#cc0303';
    }
}

function cambiadisplayseis(id) {
    if (document.getElementById('seis').style.display == 'block') {
        document.getElementById('seis').style.display = 'none';
    } else {
        document.getElementById('uno').style.display = 'none';
        document.getElementById('dos').style.display = 'none';
        document.getElementById('tres').style.display = 'none';
        document.getElementById('cuatro').style.display = 'none';
        document.getElementById('cinco').style.display = 'none';
        document.getElementById('seis').style.display = 'block';

        botonPro.style.backgroundColor = '#fff';
        botonPro.style.color = '#cc0303';

        botonPro2.style.backgroundColor = '#fff';
        botonPro2.style.color = '#cc0303';

        botonPro3.style.backgroundColor = '#fff';
        botonPro3.style.color = '#cc0303';

        botonPro4.style.backgroundColor = '#fff';
        botonPro4.style.color = '#cc0303';

        botonPro5.style.backgroundColor = '#fff';
        botonPro5.style.color = '#cc0303';
        
        botonPro6.style.backgroundColor = '#cc0303';
        botonPro6.style.color = '#fff';
    }
}
