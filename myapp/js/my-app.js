// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

//回调函数
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;

    if (page.name === 'about') {
     myApp.alert("haole1")
    }

    if (page.name === 'chat') {
     myApp.alert("haole2");
     setInterval(function(){
     var newdate=document.getElementsByClassName("messages-date")[0];
     var thisdate=new Date();
     var year=thisdate.getFullYear();
     var day=thisdate.getDate();
     var month=thisdate.getMonth()+1;
     var hour=thisdate.getHours();
     var minute=thisdate.getMinutes();
     if(minute<10) minute="0"+minute;
     var second=thisdate.getSeconds();
     if(second<10) second="0"+second;    
     if(document.getElementsByClassName("messages-date")[0]){
     	newdate.innerHTML=year+"年"+month+"月"+day+"日"+"星期"+("日一二三四五六").charAt(thisdate.getDay())+hour+":"+minute+":"+second;
     }  
     	
     },100);
          // 会话flag
var conversationStarted = false;
 
// Init Messages
var myMessages = myApp.messages('.messages', {
  autoLayout:true
});
 
// Init Messagebar
var myMessagebar = myApp.messagebar('.messagebar');
 
// Handle message
$$('.messagebar .link').on('click', function () {
  // Message text
  var messageText = myMessagebar.value().trim();
  // Exit if empy message
  if (messageText.length === 0) return;
 
  // Empty messagebar
  myMessagebar.clear()
 
  // 随机消息类型
  var messageType = (['sent', 'received'])[Math.round(Math.random())];  
  // 接收的消息的头像和名称
  var avatar, name;
  if(messageType === 'received') {
    avatar = './images/ground.jpg';
    name = '飞扬之主';
  }
  if(messageType==="sent"){
  	avatar = './images/ground2.jpg';
    name = '禾子';
  }
  // Add message
  myMessages.addMessage({
    // Message text
    text: messageText,
    // 随机消息类型
    type: messageType,
    // 头像和名称
    avatar:avatar,
    name:name,
    // 日期
    day: !conversationStarted ? 'Today' : false,
    time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
  })
 
  // 更新会话flag
  conversationStarted = true;
});
     
    }
});





