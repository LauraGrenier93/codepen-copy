function updateOutput() {
    let htmlCode = "<html><head><style>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>";
    $("iframe").contents().find("html").html(htmlCode);
    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());
}

$(".toggleButton").hover(function () {
    $(this).addClass("highlightedButton");
}, function () {
    $(this).removeClass("highlightedButton");
})
$(".toggleButton").click(function () {
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");
    let panelId = $(this).attr("id") + "Panel";
    $("#" + panelId).toggleClass("hidden");
    let numberOfActivePanels = 3 - $("textarea.hidden").length;
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
});
$(".panel").height($(window).height() - $("#header").height() - 76);
$(".panel").width(($(window).width()) - 10);
updateOutput();
$("textarea").on('change keyup paste', function () {
    updateOutput();
});
