$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox">
          <div class="user1">
            <div class="user1-name">
             ${message.user_name}
            </div>
            <div class="user1-createdup">
              ${message.created_at}
            </div>
          </div>
          <div class="user-text">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageBox">
        <div class="user1">
          <div class="user1-name">
           ${message.user_name}
          </div>
          <div class="user1-createdup">
            ${message.created_at}
          </div>
        </div>
        <div class="user-text">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
    return html;
    };
  }

  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,  
      type: 'POST',  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done(function(data){
      let html = buildHTML(data);
      $('.Main_chat__Main').append(html);      
      $('.Main_chat__Main').animate({ scrollTop: $('.Main_chat__Main')[0].scrollHeight});
      $('form')[0].reset();
      $('input.submit-btn').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    })
  });
});