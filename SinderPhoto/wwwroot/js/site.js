$(function () {
    var portfolioDrop = $("#portfolio-base");
    var galleryImages = $("#gallery").find("img");
    var nextImage = $("#gallery_next");
    var previousImage = $("#gallery_previous");

    //TODO: Set highlight images here//
    var images = [
        "../sample_pics/sample1.jpg",
        "../sample_pics/sample2.jpg",
        "../sample_pics/sample3.jpg",
        "../sample_pics/sample4.jpg"
    ]


    function nextFeatureImage() {
        var id = galleryImages.attr("value", value + 1);
        galleryImages.attr("src", images[id]);
        console.log(id);
    };

    nextImage.on({
        click: nextFeatureImage(),
        mouseenter: function () {
            $(this).css("color", "red");
        },
        mouseleave: function () {
            $(this).css("color", "black");
        }
    });


    portfolioDrop.on({
        click: function () {
            //$(this).append("<li> First album </li>")
            $(this).text("Can be dropdown of photo albums")
        },
        mouseenter: function () {
            $(this).css("cursor", "pointer");
        }
    });

    // TODO: Change to on click to go to next image
    var i = 0;
    galleryImages.click(function () {
        console.log(i);
        if (i >= images.length) {
            i = -1;
        }
        i++;
        $(this).fadeOut(function () {
            $(this).attr("src", images[i]);
            $(this).fadeIn(1500);
        });
    });

});


    

