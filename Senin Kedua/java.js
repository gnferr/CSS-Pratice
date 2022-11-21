
$(document).ready(function () {
    // email alert
    $("#emailBtn").click(function () {
        $("#Alert").removeClass("d-none");
        const val = $("#emailInput").val();
        $("#textAlert").html(val);
        window.scrollTo(top);
    })

    $("#AlertClose").click(function () {
        $("#Alert").addClass("d-none");
    })

    // Change Gambar //

    // $("#gambar img").click(function () {
    //     const gambar = $(this).attr("src");
    //     $("#tgambare").attr("src", gambar);
    //     $("#tgambare").css("width", "500");
    //     window.scrollTo(top);

    // })

    $("#gambare1").click(function () {
        $("#tgambare").attr("src", "assets/chair-1.png");
        $("#tgambare").css("width", "500");
        $("#namaKursi").html("Cangkir Mauttle");
        $("#hargaKursi").html("IDR 90.000.000");
        window.scrollTo(top);
    })
    $("#gambare2").click(function () {
        $("#tgambare").attr("src", "assets/chair-2.png");
        $("#tgambare").css("width", "500");
        $("#namaKursi").html("Saman Kakka");
        $("#hargaKursi").html("IDR 15.500.000");
        window.scrollTo(top);
    })
    $("#gambare3").click(function () {
        $("#tgambare").attr("src", "assets/chair-3.png");
        $("#tgambare").css("width", "500");
        $("#namaKursi").html("Lino Dino");
        $("#hargaKursi").html("IDR 40.000.000");
        window.scrollTo(top);
    })
    $("#gambare4").click(function () {
        $("#tgambare").attr("src", "assets/chair-4.png");
        $("#tgambare").css("width", "500");
        $("#namaKursi").html("Buggati");
        $("#hargaKursi").html("IDR 22.000.000");
        window.scrollTo(top);
    })

    // Shipping thing
    $("#shipButton").click(function () {
        const first = $("#first").val();
        const last = $("#last").val();
        $("#iniUtama").addClass("d-none");
        $("#notif").removeClass("d-none");
        $("#namaNotif").html(first + " " + last);
    })

})

