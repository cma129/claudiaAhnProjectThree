//triple check responsive (check on mobile)

//My future goal is to DRY my code using forEach loops for similar/same functions repeated.


$(document).ready(function(){


//'Start quiz' button - scroll to #1
    $('.start').on('click', function(e){

        $('html, body').animate(
            {
                scrollTop: $($('#where')).offset().top,
            },
            600,
            'linear'
        )
    }); //Retrieved from https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/


//Auto-scroll for each question when answered

    //Q1 to Q2
    $('input[name=where]').on('click', function(e){
        $('html, body').animate(
            {
                scrollTop: $($('#style')).offset().top,
            },
            300,
            'linear'
        )
    });

    //Q2 to Q3
    $('input[name=style]').on('click', function(e){
        $('html, body').animate(
            {
                scrollTop: $($('#weather')).offset().top,
            },
            300,
            'linear'
        )
    });

    //Q3 to Q4
    $('input[name=weather]').on('click', function(e){
        $('html, body').animate(
            {
                scrollTop: $($('#colours')).offset().top,
            },
            300,
            'linear'
        )
    });

    //Q4 to Q5
    $('input[name=colours]').on('click', function(e){
        $('html, body').animate(
            {
                scrollTop: $($('#gender')).offset().top,
            },
            300,
            'linear'
        )
    });


// Customized error msg to notify user to answer all q's

    $('button[type=submit]').on('click', function(e){

        //check if individual q's have been answered
        const userGender = $('input[name=gender]:checked').val();
        const userWhere = $('input[name=where]:checked').val();
        const userWeather = $('input[name=weather]:checked').val();
        const userStyle = $('input[name=style]:checked').val();
        const userColours = $('input[name=colours]:checked').val();  
        
        //error msg display
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


//Submit button

    $('form').on('submit', function(e) {

        e.preventDefault();

        // Clear previous image if existing
        if($('input[type=radio]:checked').val() !== undefined){
            $('.results').fadeOut();
        }

        //Grab user's choices
        const userGender = $('input[name=gender]:checked').val();
        const userWhere = $('input[name=where]:checked').val();
        const userWeather = $('input[name=weather]:checked').val();
        const userStyle = $('input[name=style]:checked').val();
        const userColours = $('input[name=colours]:checked').val();  

        //Filter out suggestions based on the choices
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
        $('input[type="radio"]').prop('checked', false);  //https://stackoverflow.com/questions/50159793/jquery-javascript-reset-clear-radio-button-value-and-un-checke-the-element
        $('h2').fadeOut();
        $(`.${finalResult}`).fadeOut();
        $('.error').fadeOut();
    });

});