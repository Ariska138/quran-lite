//@todo1: memastikan script.js berjalan
console.log('detail surat');

//@todo2: mengambil data yg dikirim lewat paramater
const params = new URLSearchParams(document.location.search);
const id = params.get('id');
console.log('id: ', id);

//@todo3: memanggil element root yg di html
const root = document.getElementById('root');

// @todo4: menampilkan judul dari id param
const title = document.createElement('h1');
title.textContent = 'Surat Ke ' + id;
root.appendChild(title);

//@todo5: get data list ayat dari api
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch(
  'https://quran.ppqita.my.id/api/quran?surat=1&token=TADABBUR_ariska138',
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    result.data.forEach((data) => {
      console.log(data);
      //@todo6: menampilkan list surat ke html
      const ayat = document.createElement('div');
      ayat.setAttribute(
        'style',
        'font-size:50px; text-align:right; margin:14px;'
      );
      ayat.textContent = data.ayat.arab;

      root.appendChild(ayat);
    });
  })
  .catch((error) => console.log('error', error));
