function Apply() {
  Swal.fire({
    title: "Apakah yakin menerima pekerja tersebut?",
    icon: "warning",
    showDenyButton: true,
    confirmButtonColor: "#009688",
    denyButtonColor: "#d33",
    denyButtonText: "Batalkan",
    confirmButtonText: "Terima",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "Diterima",
        confirmButtonText: "Selesai",
        confirmButtonColor: "#009688",
      });
    }
  });
}

function mulai() {
  Swal.fire({
    title: "Apakah ingin memulai pekerjaan?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#009688",
    cancelButtonColor: "#d33",
    confirmButtonText: "Mulai",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "Pekerjaan Dimulai",
        confirmButtonText: "Selesai",
        confirmButtonColor: "#009688",
      });
    }
  });
}
