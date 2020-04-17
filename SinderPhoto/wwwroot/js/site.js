$(function () {
    var portfolioDrop = $("#portfolio-base");
    var galleryImages = $(".gallery").find("img");

    //TODO: Set highlight images here//
    var images = [
        "../sample_pics/sample1.jpg",
        "../sample_pics/sample2.jpg",
        "../sample_pics/sample3.jpg",
        "../sample_pics/sample4.jpg"
    ]
    //portfolioDrop.click(function () {
    //    $(this).text("Changed with jQuery");
    //});

    portfolioDrop.on({
        click: function () {
            //$(this).append("<li> First album </li>")
            $(this).text("Can be dropdown of photo albums")
        },
        mouseenter: function () {
            $(this).css("cursor", "pointer");
        }
    });

    var i = 0;
    setInterval(function () {
        i = (i + 1) % images.length;
        galleryImages.fadeOut(function () {
            $(this).attr("src", images[i]);
            $(this).fadeIn(1500);
        });
    }, 4000);


});

