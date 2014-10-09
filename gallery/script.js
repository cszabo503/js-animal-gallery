// Add your code here


// $('.filter-button').on('click', function () {
//   $(this).hide( , )
// });


// $("#monkey").click(function(){
// 	$(".dog").hide();
// 	$(".cat").hide();
// 	$(".monkey").show();

// $("#dog").click(function(){
// 	$(".monkey").hide();
// 	$(".cat").hide();
// 	$(".dog").show();

// $("#cat").click(function(){
// 	$(".dog").hide();
// 	$(".monkey").hide();
// 	$(".cat").show();


// for ( var i = 0; i < 5; i++ ) {
//   $( "<div>" ).appendTo( document.body );
// }
// $( "div" ).click(function() {
//   $( this ).hide( 2000, function() {
//     $( this ).remove();
//   });
// });


//solution

$('.filter-button').on('click', function () {
	if($("." + this.id).css("display") === "block" ){
		alertify.error("hiding " + this.id + "s");
	} else {
		alertify.success("showing " + this.id + "s");
	}
  $("." + this.id).toggle();
  $("#" + this.id).toggleClass("active");
});


// $('.filter-button').on('click', function () {
//   $("." + this.id).toggle();
//   $("#" + this.id).toggleClass("active");
//   alertify.set({ labels:{
//   	ok : ""
//   });
// });


// attach a click listener on each button

// $("#monkey").on('click', function(){
// 	// grab and hide all the monkeys
// 	// check if the monkeys are hidden somehow
// 		//if they are, show the monkeys
// 		//if they're not hide the monkeys
// 	$(".monkey").hide()
// })











