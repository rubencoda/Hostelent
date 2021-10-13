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

function Reject() {
  Swal.fire({
    title: "Apakah ada yakin menolak?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#009688",
    cancelButtonColor: "#d33",
    confirmButtonText: "Reject",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "error",
        title: "Rejected",
        confirmButtonText: "Selesai",
        confirmButtonColor: "#009688",
      });
    }
  });
}
