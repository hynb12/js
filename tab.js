// for (let i = 0; i < $(".tab-button").length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       탭열기(i);
//     });
// }

$(".list").click(function (e) {
  console.log(e.target.dataset.id);
  // 지금 누른게 버튼 0이면 버튼0에 orange 박스0 show
  탭열기(e.target.dataset.id);
});

function 탭열기(숫자) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(숫자).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(숫자).addClass("show");
}
