function Approve() {
  Swal.fire({
    title: "Apakah ada yakin menyetujui?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#009688",
    cancelButtonColor: "#d33",
    confirmButtonText: "Approve",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: "success",
        title: "Approved",
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
