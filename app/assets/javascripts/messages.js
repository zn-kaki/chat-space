$(function() {
  //メッセージ表示のHTML生成
  function buildHTML(message){
    var html = `<div class="message">
                 <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${ message.user_name}
                  </div>
                  <div class="upper-message__date">
                      ${message.created_at}
                  </div>
                 </div>
                 <div class="lower-message>
                     <p class="lower-message__content">
                       ${ message.content }
                     </p>
                 </div>
                </div>`;
  return html;
  }
function scroll(){
  $(.'messages').animate({ scrollTop: $(.'messages')[0].scrollHeight }, 'fast');
}
  //メッセージの非同期通信
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
     url: url,
     type: "POST",
     data: formData,
     dataType: 'json',
     processData: false,
     contentType: false
    })
    .done(function(data) {
      .var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__message').val("");
      $('.form__submit').prop('disabled',false);
    })
    .fail(function() {
      alert('error');
    })
    return false;
  })
//自動更新機能
  $(function() {
    seInterval(autoUpdate, 5000);
//5000ミリ秒ごとにupdateという関数を実行する
  });
  function autoUpdate() {
    var url = window.location.href
    if (url.match(/\/groups\/\d+\/message/)) {
      var message_id = $('.message').last().data('message_id');
        $.ajax({
          url: url,
          type: 'GET',
          data: { id: message_id },
          dataType: 'json'
        })
        .done(function(messages) {
          if (messages.length !== 0) {
            messages.forEach(function(message) {
              var html = buildHTML(message);
              $('.messages').append(html);
            });
          }
        })
        .fail(function() {
          alert('自動更新に失敗しました');
        })
    }
    else {
      clearInterval(autoUpdate);
    }
  }
});
