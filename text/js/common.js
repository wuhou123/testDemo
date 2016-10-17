 window.onload = function () {
            var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var timer;

            function animate(offset) {                
                var newLeft = parseInt(list.style.left) + offset;
                list.style.left = newLeft + 'px';
              
                if (newLeft > -1400) {
                    list.style.left = -7000 + 'px';
                }
                if (newLeft < -7000) {
                    list.style.left = -1400 + 'px';
                }
            }

            function play() {
                
                timer = setInterval(function () {
                    next.onclick();
                }, 2000)
            }

            function stop() {
                clearInterval(timer);
            }

            function buttonsShow() {
                
                for (var i = 0; i < buttons.length; i++) {
                    if (buttons[i].className == "on") {
                        buttons[i].className = "";
                    }
                }
                
                buttons[index - 1].className = "on";
            }

            prev.onclick = function () {
                index -= 1;
                if (index < 1) {
                    index = 5
                }
                buttonsShow();
                animate(1400);
            };

            next.onclick = function () {
                
                index += 1;
                if (index > 5) {
                    index = 1
                }
                animate(-1400);
                buttonsShow();
            };

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    
                    if (this.className == "on") {
                        return;
                    }
                   
                    
                    var clickIndex = parseInt(this.getAttribute('index'));
                    var offset = 1400 * (clickIndex - index); 
                    animate(offset);
                    index = clickIndex; 
                    buttonsShow();
                }
            }

            content1.onmouseover = stop;
            content1.onmouseout = play;
            play();

        }

        //图标下显示
      

