$(function() {
    // alert('jQuery is working!');
    // 3-7
   $('section h2, aside h2').css('border', 'solid black 1px');
   $('section h2, aside h2').css('color', '#CC1C0D'); 
   $('section h2, aside h2').css('padding', '3px 0px 3px 20px'); 
   $('section h2, aside h2').css('border-radius', '5px 0 5px 0');
   $('section h2, aside h2').css('background-color', '#DFE3E6'); 
   

   //8 -12
   $('nav li a').addClass("navigation");
   $('.navigation').css('border', 'solid #929CA4 1px');
   $('.navigation').css('color', '#CC1C0D');
   $('.navigation').css('padding', '3px 0px 3px 20px'); 
   $('.navigation').css('background-color', '#DFE3E6');


   // 13
   $('section p').removeClass("vprospect vconvert vretain");


   // 14-15
   $('aside :last-child').append('<br>Chevy Dealers Association');
   $('aside p:first-of-type').wrapInner('<q></q>');


   // lab Events
    //16
   $('#clickBtn').click(function () {
       window.alert('Hello');
   });

   //17
   $('#bindBtn').bind("click", function () {
       window.alert('You Did it!');
   })

   //18
   $('#onBtn').on('click', function () {
        window.alert('Woohoo!');
   });

   //19
   $('body').on({
       click: function() {
           window.alert('Zebra!');
       }
   }, '#sameBtn');


   // 20
   $('div.no20').css('width', '400px');
   $('div.no20').css('height', '400px');
   $('div.no20').css('background-color', 'lavender');


   //20
//    $('body').on({
//     mouseenter: function () {
//         window.alert('Mouse in!');
//     },
//     mouseleave: function () {
//         window.alert('Mouse out!');
//     },
//     click: function() {
//         window.alert('Clicked!');
//     }
//    }, 'div.no20');
   
  
// 21
    // $('body').on({
    //     mouseenter: function () {
    //         window.alert('Mouse Enter');
    //     },
    //     mouseleave: function () {
    //         window.alert('Mouse leave!');
    //     },
    //     click: function() {
    //         window.alert('Clicked on!');
    //     }
    //    }, 'span');


//22
   $("a").click(function(e) {
       let media = $(this);
       if (media.attr('href')) {
           e.preventDefault();
           media.css('color', 'red');
           window.alert(e.target.nodeName + ' triggered the event.');
       }
   })


   //23
   $(window).resize(function () {
       $('div.no23').text('width: ' + $(window).width() + ' height: ' + $(window).height() );
   });

   $('input').css('margin-top', '2em');
   

   //24
//    $('input').focus(function () {
//        $('input').css('background-color', 'grey');
//    });
//    $('input').blur(function() {
//        $('input').css('background-color', 'white');

//    });

   //25
   $('email').focus();
   
   $('form').submit(function (e) {
       let isValid = true;

       let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
       let email = $('#email').val().trim();
       if (email == '') {
            //$('#email').next().text('This field is required!');
            window.alert('required field');
            $('#email').css('border-color', 'red');
            isValid = false;
       } else if (!emailPattern.test(email)) {
           //$('#email').next().text('Must be a valid email address!');
           window.alert('must be valid');
           $('#email').css('border', 'red');
           isValid = false;
       } else {
           $('#email').next().text('');
          

       }
    //    $('#email').val(email);

    //    if (isValid == false) {
    //        e.preventDefault();
    //    }
       
   });

   
});