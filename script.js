// Todo: github push, photo desc, crop long img

$(document).ready(function(){

    $('.start').on('click', function(e){

        $('html, body').animate(
            {
                scrollTop: $($('#maincontent')).offset().top,
            },
            1000,
            'linear'
        )
    }); //Retrieved from https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/


    $('input[name=where]').on('click', function(e){

        console.log('click');
        $('html, body').animate(
            {
                scrollTop: $($('#style')).offset().top,
            },
            700,
            'linear'
        )
    });

    $('input[name=style]').on('click', function(e){

        console.log('click');
        $('html, body').animate(
            {
                scrollTop: $($('#weather')).offset().top,
            },
            700,
            'linear'
        )
    });

    $('input[name=weather]').on('click', function(e){

        console.log('click');
        $('html, body').animate(
            {
                scrollTop: $($('#colours')).offset().top,
            },
            700,
            'linear'
        )
    });

    $('input[name=colours]').on('click', function(e){

        console.log('click');
        $('html, body').animate(
            {
                scrollTop: $($('#gender')).offset().top,
            },
            700,
            'linear'
        )
    });

    $('button[type=submit]').on('click', function(e){

        const userGender = $('input[name=gender]:checked').val();
        const userWhere = $('input[name=where]:checked').val();
        const userWeather = $('input[name=weather]:checked').val();
        const userStyle = $('input[name=style]:checked').val();
        const userColours = $('input[name=colours]:checked').val();  
        
        if(userGender === undefined){
            $('.genderError').fadeIn(1500);
        }

        if(userWhere === undefined){
            $('.whereError').fadeIn(1500);
        }

        if(userWeather === undefined){
            $('.weatherError').fadeIn(1500);
        }

        if(userStyle === undefined){
            $('.styleError').fadeIn(1500);
        }

        if(userColours === undefined){
            $('.colourError').fadeIn(1500);
        }

    });

    $('.toTop').on('click', function(e){
        e.preventDefault()

        $('html, body').animate({scrollTop: 0}, "slow");
    });


    $('form').on('submit', function(e) {

        e.preventDefault();

        const userGender = $('input[name=gender]:checked').val();
        const userWhere = $('input[name=where]:checked').val();
        const userWeather = $('input[name=weather]:checked').val();
        const userStyle = $('input[name=style]:checked').val();
        const userColours = $('input[name=colours]:checked').val();  

        if(userGender === 'male'){
            if(userWhere === 'home'){
                finalResult = 'pajamaM'
            } else if(userWeather === 'rainy'){
                finalResult = 'rainBootsM'
            } else if(userWeather === 'snowy'){
                finalResult = 'snowyM'
            } else if(userStyle === 'professional'){
                finalResult = 'professionalM'
            } else if(userColours === 'pastel'){
                finalResult = 'pastelM'
            } else if(userStyle === 'trendy'){
                finalResult = 'fashionableM'
            } else if(userWeather === 'sunny'){
                finalResult = 'sunglassesM'
            } else{
                finalResult = 'casualM'
            }
        }
        if(userGender === 'female'){
            if(userWhere === 'home'){
                finalResult = 'pajamaF'
            } else if(userWeather === 'rainy'){
                finalResult = 'rainBootsF'
            } else if(userWeather === 'snowy'){
                finalResult = 'snowyF'    
            } else if(userStyle === 'professional'){
                finalResult = 'professionalF'
            } else if(userColours === 'pastel'){
                finalResult = 'pastelF'
            } else if(userStyle === 'trendy'){
                finalResult = 'fashionableF'
            }  else if(userWeather === 'sunny'){
                finalResult = 'sunglassesF'
            } else{
                finalResult = 'casualF'
            }
        }

        $('h2').fadeIn(1500);
        // const resultImg = `<img class="result" src="styles/assets/${finalResult}">`;
        // $('.resultImage').html(resultImg);

        // const resultDiv = `.${finalResult}`
        $(`.${finalResult}`).fadeIn(1500);

        $('html, body').animate({scrollTop: 9999}, "slow");

    });


});