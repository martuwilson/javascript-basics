function cargarContenido() {
    // func que cargue las cotizaciones
    cargarCotizaciones(mostrarCotizacion);
    // func que cargue los elementos
    cargarElementos();
    // func que cargue los textos
    cargarTextos();
}

async function cargarCotizaciones(callback) {
    let url1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    callback(await url1.json());

    let url2 = await fetch('https://open.er-api.com/v6/latest/USD');

    let datos2 = await url2.json();
    document.getElementById('UsdEur').append(datos2.rates.EUR)

    let datos3 = await fetch('https://open.er-api.com/v6/latest/ARS');
    document.getElementById('UsdArs').append((await datos3.json()).rates.USD);
    document.getElementById('imgEspera').style.visibility = 'hidden';
}

function mostrarCotizacion(datos) {
    document.getElementById('BitcoinUsd').append(datos.bpi.USD.rate);
}

function cargarElementos(){
    document.getElementById('imgLogo').setAttribute('src', 'logo.png');
    document.getElementById('titulo').textContent = 'Te digo el precio';
    document.getElementById('imgEspera').setAttribute('src', 'loading.gif');
    document.getElementById('imgEspera').style.visibility = 'visible';
}

function cargarTextos() {
    document.getElementById('UsdEur').append("Eur a USD: ");
    document.getElementById('UsdArs').append("USD a Ars: ");
    document.getElementById('BitcoinUsd').append("Bitcoin a USD: ");
}