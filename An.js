$(document).ready(function () {

    $('#run').on('click', function () {
        let dat = $('#user_year option:selected').text() + '-' + $('#user_moon option:selected').text() + '-' + $('#user_day option:selected').text();
        let tim = $('#user_hour option:selected').text() + ':' + $('#user_minute option:selected').text() + ':00';
        $("#zodiac > h3").text('');
        $("#zodiac > p").text('');
        $('#zodiac').hide();
        $.ajax({
            type: "post",
            url: "action_sel.php",
            data: { dat: dat, tim: tim},
            dataType: 'json',
            success: function (res) { 
                $("#zodiac h3").text(res[0].zz);
                $("#zodiac p").text(res[0].text_);
                $('#zodiac').show();
            }

        });
        

    });




    $('#run').on('click', function () {
        let dat = $('#user_year option:selected').text() + '-' + $('#user_moon option:selected').text() + '-' + $('#user_day option:selected').text();
        $("zodi > h3").text('');
        $("zodi > p").text('');
        $("zodi").hade();
        $.ajax({
            type: "post",
            url: "action_sun.php",
            data: { dat: dat },
            dataType: 'json',
            success: function (res_sun) {
                $("zodi h3").text(res_sun[0].name);
                $("zodi p").text(res_sun[0].text1);
                $('#zodi').show();

            }
        });
    });


});