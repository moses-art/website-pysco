// const messages = document.querySelector('#Messages');
// const message_box = document.querySelector('#message-div-content');


// messages.addEventListener('click', () => {
//     message_box.style.boxShadow = '0 0 1rem var(--color-primary)';
//     alert('Message');
// })


// const msg = document.getElementById('messages');

$(function()
{ 
    let message_box = $('.message-div-content');
    $('#Messages').click( function() {
      $('.message-div-content').addClass('message-box-shadow');

      setTimeout(function() { $('.message-div-content').removeClass('message-box-shadow'); }, 3000);
    });

    $('#svg-moon').click( function() {    
        $('#svg-moon').addClass('hide-icon');
        $('#svg-sun').removeClass('hide-icon');


        $('#nav').addClass('bg-dark navbar-dark');
        $('.main').addClass('main-dark');
        $('.all').addClass('all-dark-text');
        $('.p-card').addClass('p-card-dark');
        $('.p-name').addClass('p-name-dark');
        $('.p-uname').addClass('p-uname-dark');
        $('.a-link').addClass('a-link-dark');
        $('.search-input').addClass('search-input-dark');
        $('.post-input').addClass('post-input-dark');

    });


    $('#svg-sun').click( function() {    
        $('#svg-sun').addClass('hide-icon');
        $('#svg-moon').removeClass('hide-icon');


        $('#nav').removeClass('bg-dark navbar-dark');
        $('.main').removeClass('main-dark');
        $('.all').removeClass('all-dark-text');
        $('.p-card').removeClass('p-card-dark');
        $('.p-name').removeClass('p-name-dark');
        $('.p-uname').removeClass('p-uname-dark');
        $('.a-link').removeClass('a-link-dark');
        $('.search-input').removeClass('search-input-dark');
        $('.post-input').removeClass('post-input-dark');
    });


})


