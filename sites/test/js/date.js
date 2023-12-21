
var dayNames = Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
var monthNames = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
var minutos_y = "Minutes";
var segundos = "Seconds";
    var modalOptions = {
        backdrop: "static",
        keyboard: false,
    };

function scrollTo(a) {
    if ($("#" + a).length) {
        var c = $("#" + a).offset();
        var b = c.top;
        $("html,body").animate({ scrollTop: b }, { duration: "slow" });
    }
}
jQuery(document).ready(function() {

    function f(g) { if (g < 10) { g = "0" + g; } return g; }
    var b = new Date();
    var a = f(b.getHours()) + ":" + f(b.getMinutes());
    jQuery(".p_var-dia").text(b.getDate());
    jQuery(".p_var-mes").text(b.getMonth());
    jQuery(".p_var-anyo").text(b.getFullYear());
    jQuery(".p_var-dia_nombre").text(dayNames[b.getDay()]);
    jQuery(".p_var-mes_nombre").text(monthNames[b.getMonth()]);
});


