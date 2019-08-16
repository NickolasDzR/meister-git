import $ from "jquery";

$(function () {
	$("form.callback").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function () {
			$(th).find(".success").addClass("blur-active").css("display", "flex").hide().fadeIn();
			setTimeout(function () {
				$(th).find(".success").removeClass("blur-active").fadeOut();
				th.trigger("reset");
			}, 2000);
		});
		return false;
	});
});