var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch(
  'https://quran.ppqita.my.id/api/quran?listSurah=true&token=TADABBUR_test@ppqita.com',
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    const root = document.getElementById('root');
    // console.log(result.data); // 1.cek data seluruhnya
    result.data.forEach((data) => {
      // console.log(data.nomor, data.nama_latin); // 2.cek data yg dibutuhkan
      const item = document.createElement('div');

      const link = document.createElement('a');
      link.textContent = `${data.nomor}. ${data.nama_latin}`;
      link.href = '/surat/?id=' + data.nomor;
      item.appendChild(link);

      root.appendChild(item);
    });
  })
  .catch((error) => console.log('error', error));
