export const redirectToWhatsApp = ({ phone, type, data = {} }) => {
  let message = "";

  switch (type) {
    case "faq":
      message = `
Halo Admin Lamonte 

Saya ingin menanyakan beberapa hal terkait program kemitraan.

Mohon penjelasannya ya.
Terima kasih.
`;
      break;

    case "paket":
      message = `
Halo Admin Lamonte 

Saya tertarik dengan ${data.paket}.

Mohon info detail dan langkah selanjutnya untuk bergabung.
Terima kasih.
`;
      break;

    case "mitra":
      message = `
Halo Admin Lamonte 

Saya ingin mendaftar menjadi mitra Lamonte.

Mohon informasi prosedur dan syarat pendaftarannya.
Terima kasih.
`;
      break;

    case "cek_wilayah":
      message = `
Halo Admin Lamonte 

Saya ingin menanyakan apakah pengiriman tersedia ke wilayah saya.

Mohon informasinya ya.
Terima kasih.
`;
      break;

    case "katalog":
      message = `
Halo Admin Lamonte 

Saya ingin bertanya mengenai produk di katalog.

Mohon informasi detail produknya ya.
Terima kasih.
`;
      break;

    default:
      message = `
Halo Admin Lamonte 

Saya ingin mendapatkan informasi lebih lanjut.
Terima kasih.
`;
  }

  const encoded = encodeURIComponent(message.trim());
  const url = `https://wa.me/${phone}?text=${encoded}`;

  window.open(url, "_blank");
};
