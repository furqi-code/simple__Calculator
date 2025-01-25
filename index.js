let str = "";

$(".nums, .operation").on("click", function (e) {
  let num = $(this).html();   // Get the text of the clicked button
  console.log(num);
  str += num;   // append it
  $("input").val(str);  // var() instead of html() for specifically input element
  console.log(str);
});

$(".equal").on("click", function () {
  let ans = eval(str);
  $("input").val(ans);
  str = "";
});

$(".clearr").on("click", function () {
  $("input").val("");
  str = "";
});
