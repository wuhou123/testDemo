// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

//quanju
    var gid=-1;    
    function danji(id){    
    gid=id;    
    };
    var gid2=0;
    function danji2(id){    
    gid2=id;    
    };
    var gid3=0;
    function danji3(id){    
    gid3=id;    
    };
//urls
var url="http://192.168.1.9:8080/";
// Add view
//zhengzebiaodashi

var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});
//popover 
$$('.create-links').on('click', function () {
  var clickedLink = this;
  var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="list-block">'+
                          '<ul>'+
                          '<li><a href="./problem.html" class="item-link list-button" style="color:#000">常见问题</li>'+
                          '<li><a href="./history.html" class="item-link list-button" style="color:#000">查看历史消息</li>'+                          
                          '</ul>'+
                        '</div>'+
                      '</div>'+
                    '</div>'
  myApp.popover(popoverHTML, clickedLink);
});
//dingyue.html reload
//回调函数
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;

    if (page.name === 'problem'){
    myApp.closeModal(".popover");
    var jurl="http://192.168.1.9:8080/lingke/ptype/list.json?page=1&limit=10";  
$$.ajax({  
    url:jurl,  
    contentType: "OPTIONS",  
    crossDomain: true,//这个一定要设置成true，默认是false，true是跨域请求。  
    dataType:"json",  
    data: {  
    
    },  
     beforeSend:function(e)  
    {  
        //alert("ddddd");//发送数据过程，you can do something,比如:loading啥的  
    },

    
    success: function(response ) {
    var data=response.result;
    //myApp.alert(data[0].typename);//测试返回数据
    //var font=document.getElementsByClassName("font_xiaoxi")[0];
    //font.innerHTML =data[0].name;    
    var problems=document.getElementById("problems");    
     for(var i = 0;i < data.length; i++){
     
     
    problems.innerHTML +='<li >'+
      '<a onclick="danji('+data[i].id+')" href="./yingyong/problem2.html" class="item-link item-content">'+
        
        '<div class="item-inner">'+
          '<div class="item-title">'+data[i].typename+'</div>'+
          
        '</div>'+
      '</a>'+
    '</li>'

   
    }}  
});  
    
//huadong
var page=2;
$(window).swipe({
    swipeUp:function(){
var jurl="http://192.168.1.9:8080/lingke/ptype/list.json?page="+page+"&limit=10";  
$$.ajax({  
    url:jurl,  
    contentType: "OPTIONS",  
    crossDomain: true,//这个一定要设置成true，默认是false，true是跨域请求。  
    dataType:"json",  
    data: {  
    
    },  
     beforeSend:function(e)  
    {  
        //alert("ddddd");//发送数据过程，you can do something,比如:loading啥的  
    },

    
    success: function(response ) {
       
   page++;
    var data=response.result;
    //myApp.alert(data[0].typename);//测试返回数据
    //var font=document.getElementsByClassName("font_xiaoxi")[0];
    //font.innerHTML =data[0].name;    
    var problems=document.getElementById("problems");    
     for(var i = 0;i < data.length; i++){
     
     
    problems.innerHTML +='<li >'+
      '<a onclick="danji('+data[i].id+')" href="./yingyong/problem2.html" class="item-link item-content">'+
        
        '<div class="item-inner">'+
          '<div class="item-title">'+data[i].typename+'</div>'+
          
        '</div>'+
      '</a>'+
    '</li>'

   
    }}  
});  
    },
  
});
//huandongjieshu	
    };
    if (page.name === 'history'){
    myApp.closeModal(".popover");
var jurl=url+'lingke/message/list.json?page=1&limit=10';  
$$.ajax({  
    url:jurl,  
    contentType: "OPTIONS",  
    crossDomain: true,//这个一定要设置成true，默认是false，true是跨域请求。  
    dataType:"json",  
    data: {  
    
    },  
     beforeSend:function(e)  
    {  
        //alert("ddddd");//发送数据过程，you can do something,比如:loading啥的  
    },  
    success: function(response) {
    var data=response.result;
     //myApp.alert(data);//测试返回数据
    //var font=document.getElementsByClassName("font_xiaoxi")[0];
    //font.innerHTML =data[0].name;    
    var history_contents=document.getElementById("history_contents");    
    for(var i=0;i<data.length;i++){
        if(data[i].pic_path == null){
        history_contents.innerHTML +=
        '<div class="history_content">'+
        '<h4>'+data[i].title+'</h4>'+
        '<div class="date">'+data[i].created_date+'</div>'+
        '<div class="content_msg">'+data[i].content+'</div>'+       
        '</div>'
        }
        if(data[i].pic_path!==null){
        history_contents.innerHTML += '<ul id="soucontent" >'+'<li>'+
            '<div class="item-title" style="white-space:pre-wrap;">'+
        '<div class="history_content" >'+
        '<b>'+data[i].title+'</b>'+
        '<div class="date">'+data[i].created_date+'</div>'+
        '<img src="'+data[i].pic_path+'"/>'+
        '<div class="content_msg">'+data[i].content+'</div>'+       
        '</div>'+
          '</div>'+'</li>'+'</ul>'
        }
        }
   
    }  
});
//huadong
var tab=2;
$(window).swipe({
    swipeUp:function jia3(){
var jurl=url+'lingke/message/list.json?page='+tab+'&limit=10';  
$$.ajax({  
    url:jurl,  
    contentType: "OPTIONS",  
    crossDomain: true,//这个一定要设置成true，默认是false，true是跨域请求。  
    dataType:"json",  
    data: {  
    
    },  
     beforeSend:function(e)  
    {  
        //alert("ddddd");//发送数据过程，you can do something,比如:loading啥的  
    },  
    success: function(response) {
    var data=response.result;
     //myApp.alert(data);//测试返回数据
    //var font=document.getElementsByClassName("font_xiaoxi")[0];
    //font.innerHTML =data[0].name;    
    var history_contents=document.getElementById("history_contents");    
    for(var i=0;i<data.length;i++){
        if(data[i].pic_path == null){
        tab++;
        history_contents.innerHTML +=
        '<div class="history_content">'+
        '<h4>'+data[i].title+'</h4>'+
        '<div class="date">'+data[i].created_date+'</div>'+
        '<div class="content_msg">'+data[i].content+'</div>'+       
        '</div>'
        }
        if(data[i].pic_path!==null){
        tab+=1;        
        history_contents.innerHTML += '<ul id="soucontent" >'+'<li>'+
            '<div class="item-title" style="white-space:pre-wrap;">'+
        '<div class="history_content" >'+
        '<b>'+data[i].title+'</b>'+
        '<div class="date">'+data[i].created_date+'</div>'+
        '<img src="'+data[i].pic_path+'"/>'+
        '<div class="content_msg">'+data[i].content+'</div>'+       
        '</div>'+
          '</div>'+'</li>'+'</ul>'
        }

   
    }}  
});  
    },
  
});
//huandongjieshu




    };
    if(page.name==='about'){
var jurl=url+'lingke/app/list.json?page=1&limit=10';  
$$.ajax({  
    url:jurl,  
    contentType: "OPTIONS",  
    crossDomain: true,//这个一定要设置成true，默认是false，true是跨域请求。  
    dataType:"json",  
    data: {  
    
    },  
     beforeSend:function(e)  
    {  
        //alert("ddddd");//发送数据过程，you can do something,比如:loading啥的  
    },  
    success: function(response ) {
    var data=response.result;
    //myApp.alert(data[0].name);//测试返回数据
    //var font=document.getElementsByClassName("font_xiaoxi")[0];
    //font.innerHTML =data[0].name;    
    var cols=document.getElementById("cols");    
     for(var i = 0;i < data.length; i++){
    cols.innerHTML +='<div class="col1" style="width:25%;height:100px;vertical：middle;float:left;">'+'<a  href="http://192.168.1.9:8080/lingke/strategy/read?appid='+data[i].id+'">'+
    '<img class="img" src="'+data[i].picurl+'"/>'+
	
    '</i>'+'</a>'+'<div class="font_xiaoxi2">'+data[i].name+'</div>'+'</div>'

   
    }}  
});  
    

};
//problem2
if(page.name==='problem2'){
	  
var jurl='http://192.168.1.9:8080/lingke/problem/list.json?page=1&limit=10&typeid='+gid;  
$$.ajax({  
    url:jurl,  
    contentType: "OPTIONS",  
    crossDomain: true,//这个一定要设置成true，默认是false，true是跨域请求。  
    dataType:"json",  
    data: {  
    
    },  
     beforeSend:function(e)  
    {  
        //alert("ddddd");//发送数据过程，you can do something,比如:loading啥的  
    },  
    success: function(response ) {
    var data=response.result;
    //myApp.alert(data[0].question);//测试返回数据
    //var font=document.getElementsByClassName("font_xiaoxi")[0];
    //font.innerHTML =data[0].name;    
    var problems2=document.getElementById("problems2");    
     for(var i = 0;i < data.length; i++){
    problems2.innerHTML +='<li >'+
      '<a onclick="danji2('+data[i].id+')" href="./yingyong/wentixiangqing.html" class="item-link item-content">'+
        
        '<div class="item-inner">'+
          '<div class="item-title">'+data[i].question+'</div>'+
          
        '</div>'+
      '</a>'+
    '</li>'

   
    }}  
});  
    
//huadong
var table=2;
$(window).swipe({
swipeUp:function jia2(){
var jurl='http://192.168.9:8080/lingke/problem/list.json?page='+table+'&limit=10&typeid='+gid; 
$$.ajax({  
    url:jurl,  
    contentType: "OPTIONS",  
    crossDomain: true,//这个一定要设置成true，默认是false，true是跨域请求。  
    dataType:"json",  
    data: {  
    
    },  
     beforeSend:function(e)  
    {  
        //alert("ddddd");//发送数据过程，you can do something,比如:loading啥的  
    },  
    success: function(response ) {
    table++;
    myApp.alert(table);
    var data=response.result;
    //myApp.alert(data[0].question);//测试返回数据
    //var font=document.getElementsByClassName("font_xiaoxi")[0];
    //font.innerHTML =data[0].name;    
    var problems2=document.getElementById("problems2");    
     for(var i = 0;i < data.length; i++){
    problems2.innerHTML +='<li >'+
      '<a onclick="danji2('+data[i].id+')" href="./yingyong/wentixiangqing.html" class="item-link item-content">'+
        
        '<div class="item-inner">'+
          '<div class="item-title">'+data[i].question+'</div>'+
          
        '</div>'+
      '</a>'+
    '</li>'

   
    }}  
});  
    },
  
});
//huandongjieshu
};

//jieshu
//wentixiangqing
if(page.name==='wentixiangqing'){
var jurl='http://192.168.1.9:8080/lingke/problem/get.json?id='+gid2;  
$$.ajax({  
    url:jurl,  
    contentType: "OPTIONS",  
    crossDomain: true,//这个一定要设置成true，默认是false，true是跨域请求。  
    dataType:"json",  
    data: {  
    
    },  
     beforeSend:function(e)  
    {  
        //alert("ddddd");//发送数据过程，you can do something,比如:loading啥的  
    },  
    success: function(response) {
    var data=response.result;
    //myApp.alert(data);//测试返回数据
    //var font=document.getElementsByClassName("font_xiaoxi")[0];
    //font.innerHTML =data[0].name;    
    var contents=document.getElementById("contents");    
     
    contents.innerHTML ='<div id="wenti">'+'A:&nbsp'+data.question+'</div>'+
    '<div id="huida">'+'Q:&nbsp'+data.answer+'</div>';
   
    }  
});  
    

};
//jieshu
 });
//防止Popover不弹出问题
$$(document).on('pageAfterAnimation', function (e) {
    var page = e.detail.page;
    // Code for page
    if(page.name==='index'){   
    location.reload();

};
});

//


 var mycharts= echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
$.ajax({
                type: "get",
                async: true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
                url: "./json.js",    
                data: {},//demo 没加条件
                dataType: "json",        //返回数据形式为json

                success: function (response) {
                   var result=response.hao;
                    
                    for (var i = 0; i < result.length; i++)                                 
                    mycharts.setOption({ //加载数据图表                       
                        series: [{
                            data:result
                        }]
                    });
  
                },
                    error: function (errorMsg) {
                        //请求失败时执行该函数
                        alert("图表请求数据失败!");
                         
                    }
  
            });
        // 使用刚指定的配置项和数据显示图表。
        mycharts.setOption(option);
     	
$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
if (page.name === 'test_lingke'){

        refresher.init({
            id: "wrapper",//<------------------------------------------------------------------------------------┐
            pullDownAction: Refresh,
            pullUpAction: Load
        });
        var generatedCount = 0;
        function Refresh() {
            setTimeout(function () {    // <-- Simulate network congestion, remove setTimeout from production!
                
                
                
                
                wrapper.refresh();/****remember to refresh after  action completed！ ---yourId.refresh(); ----| ****/
             
            }, 100);

        }

        function Load() {
        	
         setTimeout(function () {// <-- Simulate network congestion, remove setTimeout from production!
         myApp.showPreloader('没有更多数据了')
         setTimeout(function () {
        myApp.hidePreloader();
    },500);
              
                wrapper.refresh();/****remember to refresh after action completed！！！   ---id.refresh(); --- ****/
                
            }, 1000);
        }
}
});

$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
if (page.name === 'mylingke'){

        refresher.init({
            id: "wrapper1",//<------------------------------------------------------------------------------------┐
            pullDownAction: Refresh,
            pullUpAction: Load
        });
        var generatedCount = 0;
        function Refresh() {
            setTimeout(function () {    // <-- Simulate network congestion, remove setTimeout from production!
                
                
                
                
                wrapper1.refresh();/****remember to refresh after  action completed！ ---yourId.refresh(); ----| ****/
             
            }, 100);

        }

        function Load() {
            
            setTimeout(function () {// <-- Simulate network congestion, remove setTimeout from production!
                var el, li, i;
                el = document.querySelector("#wrapper1 ul");
                for(var i=0;i<3;i++){
                    el.innerHTML+='<h3><a href="./mylingke.html">我提出的需求情况</a></h3>';
                }
              
                wrapper1.refresh();/****remember to refresh after action completed！！！   ---id.refresh(); --- ****/
                
            }, 1000);
        }
}
});
