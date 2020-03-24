$(document).ready(function(){


//'Start quiz' button - scroll to #1
    $('.start').on('click', function(){
        $('html, body').animate(
            {
                scrollTop: $($('#where')).offset().top,
            },
            600,
            'linear'
        )
    });

//Auto-scroll for each question when answered
    //Q1 to Q2
    $('input[name=where]').on('click', function(){
        $('html, body').animate(
            {
                scrollTop: $($('#style')).offset().top,
            },
            300,
            'linear'
        )
    });

    //Q2 to Q3
    $('input[name=style]').on('click', function(){
        $('html, body').animate(
            {
                scrollTop: $($('#weather')).offset().top,
            },
            300,
            'linear'
        )
    });

    //Q3 to Q4
    $('input[name=weather]').on('click', function(){
        $('html, body').animate(
            {
                scrollTop: $($('#colours')).offset().top,
            },
            300,
            'linear'
        )
    });

    //Q4 to Q5
    $('input[name=colours]').on('click', function(){
        $('html, body').animate(
            {
                scrollTop: $($('#gender')).offset().top,
            },
            300,
            'linear'
        )
    });

    //Q5 to submit button
    $('input[name=gender]').on('click', function(){
        $('html, body').animate(
            {
                scrollTop: $($('#submit')).offset().top,
            },
            300,
            'linear'
        )
    });

    // Customized error msg to notify user to answer all q's

    $('button[type=submit]').on('click', function(){

        //store user inputs into variables
        const userGender = $('input[name=gender]:checked').val();
        const userWhere = $('input[name=where]:checked').val();
        const userWeather = $('input[name=weather]:checked').val();
        const userStyle = $('input[name=style]:checked').val();
        const userColours = $('input[name=colours]:checked').val();  

        //error msg display

        if(userGender === undefined){
            $('.genderError').fadeIn(1500);
            $('html, body').animate(
                {
                    scrollTop: $($('#gender')).offset().top,
                },
                10
            )
        }

        if(userColours === undefined){
            $('.colourError').fadeIn(1500);
            $('html, body').animate(
                {
                    scrollTop: $($('#colours')).offset().top,
                },
                10
            )
        }
        
        if(userWeather === undefined){
            $('.weatherError').fadeIn(1500);
            $('html, body').animate(
                {
                    scrollTop: $($('#weather')).offset().top,
                },
                10
            )
        }

        if(userStyle === undefined){
            $('.styleError').fadeIn(1500);
            $('html, body').animate(
                {
                    scrollTop: $($('#style')).offset().top,
                },
                10
            )
        }
        
        if(userWhere === undefined){
            $('.whereError').fadeIn(1500);
            $('html, body').animate(
                {
                    scrollTop: $($('#where')).offset().top,
                },
                10
            )
        }

    });


//Submit button

    $('form').on('submit', function(e) {

        e.preventDefault();

        // Clear previous image if existing
        if($('input[type=radio]:checked').val() !== undefined){
            $('.results').fadeOut();
        }

        $('.error').fadeOut();

        //Grab user's choices
        const userGender = $('input[name=gender]:checked').val();
        const userWhere = $('input[name=where]:checked').val();
        const userWeather = $('input[name=weather]:checked').val();
        const userStyle = $('input[name=style]:checked').val();
        const userColours = $('input[name=colours]:checked').val();  

        //Filter out suggestions based on the choices
        if(userWhere !== undefined && userStyle !== undefined && userWeather !== undefined && userColours !== undefined && userGender !== undefined){
            if(userGender === 'male'){
                if(userWhere === 'home'){
                    if(userColours === 'vivid'){
                        finalResult = 'pajamaVividM'
                    } else if(userColours === 'pastel'){
                        finalResult = 'pajamaPastelM'
                    } else{
                        finalResult = 'pajamaBlackGreyM'
                    }
                } else if(userWeather === 'rainy'){
                    if(userColours === 'blackGrey'){
                        finalResult = 'rainBootsBlackGreyM'
                    } else{
                        finalResult = 'rainBootsVividM'
                    }
                } else if(userWeather === 'snowy'){
                    finalResult = 'snowyM'
                } else if(userStyle === 'professional'){
                    if(userColours === 'vivid'){
                        finalResult = 'professionalVividM'
                    } else if(userColours === 'pastel'){
                        finalResult = 'professionalPastelM'
                    } else if(userColours === 'whiteBeige'){
                        finalResult = 'professionalWhiteBeigeM'
                    }else{
                        finalResult = 'professionalBlackGreyM'
                    }
                } else if(userStyle === 'casual'){
                    if(userColours === 'pastel'){
                        finalResult = 'casualPastelM'
                    } else {
                        finalResult = 'casualM'
                    }
                } else if(userStyle === 'trendy'){
                    if(userColours === 'pastel'){
                        finalResult = 'trendyPastelM'
                    } else if(userColours === 'vivid'){
                        finalResult = 'trendyVividM'
                    } else if(userColours === 'whiteBeige'){
                        finalResult = 'trendyWhiteBeigeM'
                    } else{
                        finalResult = 'trendyBlackGreyM'
                    }
                } else if(userWeather === 'sunny'){
                    if(userColours === 'vivid'){
                        finalResult = 'sunglassesVividM'
                    } else{
                        finalResult = 'sunglassesM'
                    }
                } else{
                    finalResult = 'basicM'
                }
            }
            if(userGender === 'female'){
                if(userWhere === 'home'){
                    if(userColours === 'whiteBeige'){
                        finalResult = 'pajamaWhiteBeigeF'
                    } else if(userColours === 'pastel'){
                        finalResult = 'pajamaPastelF'
                    } else if(userColours === 'vivid'){
                        finalResult = 'pajamaVividF'
                    } else{
                        finalResult = 'pajamaBlackGreyF'
                    }
                } else if(userWeather === 'rainy'){
                    if(userColours === 'whiteBeige'){
                        finalResult = 'rainBootsWhiteBeigeF'
                    } else if(userColours === 'pastel'){
                        finalResult = 'rainBootsPastelF'
                    } else if(userColours === 'vivid'){
                        finalResult = 'rainBootsVividF'
                    } else{
                        finalResult = 'rainBootsBlackGreyF'
                    }
                } else if(userWeather === 'snowy'){
                    if(userColours === 'whiteBeige'){
                        finalResult = 'snowyWhiteBeigeF'
                    } else if(userColours === 'pastel'){
                        finalResult = 'snowyPastelF'
                    } else if(userColours === 'vivid'){
                        finalResult = 'snowyVividF'
                    } else{
                        finalResult = 'snowyBlackGreyF'
                    }   
                } else if(userStyle === 'professional'){
                    if(userColours === 'whiteBeige'){
                        finalResult = 'professionalWhiteBeigeF'
                    } else if(userColours === 'pastel'){
                        finalResult = 'professionalPastelF'
                    } else if(userColours === 'vivid'){
                        finalResult = 'professionalVividF'
                    } else{
                        finalResult = 'professionalBlackGreyF'
                    }
                } else if(userStyle === 'casual'){
                    if(userColours === 'pastel'){
                        finalResult = 'casualPastelF'
                    } else if(userColours === 'whiteBeige') {
                        finalResult = 'casualWhiteBeigeF'
                    } else if(userColours === 'vivid') {
                        finalResult = 'casualVividF'
                    } else{
                        finalResult = 'casualBlackGreyF'
                    }
                } else if(userStyle === 'trendy'){
                    if(userColours === 'pastel'){
                        finalResult = 'trendyPastelF'
                    } else if(userColours === 'vivid'){
                        finalResult = 'trendyVividF'
                    } else if(userColours === 'whiteBeige'){
                        finalResult = 'trendyWhiteBeigeF'
                    } else{
                        finalResult = 'trendyBlackGreyF'
                    }
                } else if(userWeather === 'sunny'){
                    if(userColours === 'vivid'){
                        finalResult = 'sunglassesVividF'
                    } else if(userColours === 'whiteBeige'){
                        finalResult = 'sunglassesWhiteBeigeF'
                    } else if(userColours === 'pastel'){
                        finalResult = 'sunglassesPastelF'
                    } else{
                        finalResult = 'sunglassesBlackGreyF'
                    }
                } else{
                    finalResult = 'basicF'
                }
            }
        }

        // Display results and scroll to bottom of page
        $('h2').fadeIn(1500);
        $(`.${finalResult}`).fadeIn(1500);
        $('html, body').animate({scrollTop: 9999}, "slow");
    });


//Reset button

    $('.toTop').on('click', function(e){
        
        e.preventDefault()

        // Scroll to question #1
        $('html, body').animate(
            {
                scrollTop: $($('#where')).offset().top,
            },
            900,
            'linear'
        )

        // clear all user inputs
        $('form')[0].reset();
        $('form').find('input:hidden').val('');
        $('input[type="radio"]').prop('checked', false);
        $('h2').fadeOut();
        $(`.${finalResult}`).fadeOut();
        $('.error').fadeOut();
        $("input[type='radio']").parent().removeClass("greyBackground");
    });
});