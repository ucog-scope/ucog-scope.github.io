const modal = $("#modal");
const modalBg = $("#modalBg");

showModal = () => {
  if (!modal.hasClass("show")) {
    modal.addClass("show");
    modalBg.addClass("show");
  }
};

hideModal = () => {
  if (modal.hasClass("show")) {
    modal.removeClass("show");
    modalBg.removeClass("show");
  }
}

$(".donate").click(showModal);
$(".close").click(hideModal);
modalBg.click(hideModal);
