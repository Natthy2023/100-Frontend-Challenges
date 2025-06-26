// Dropdown toggle script
      let toggleBtn = document.getElementsByClassName('btn');
      let rowBox = document.getElementsByClassName('rowBox');
      for (let i = 0; i < rowBox.length; i++) {
        rowBox[i].addEventListener('click', () => {
          let contentBox = document.getElementsByClassName('content');

          if (contentBox[i].style.display != 'none') {
            contentBox[i].style.display = 'none';
          } else {
            contentBox[i].style.display = 'block';
          }
        });
      }

      // Dark mode script
      let toggle = document.getElementById('toggle');
      let link = document.getElementById('link');
      toggle.addEventListener('click', () => {
        if (toggle.style.color != 'black') {
          link.setAttribute('href', 'light.css');
          toggle.setAttribute('class', 'fa fa-sun-o');
          toggle.style.color = 'black';
        } else {
          link.setAttribute('href', 'dark.css');
          toggle.setAttribute('class', 'fa fa-moon-o');
          toggle.style.color = 'cyan';
        }
      });
      
      // Animation on social media icon
      let mediaIcon = document.getElementsByClassName('icon');
      for(let item = 0; item<mediaIcon.length;item++){
        mediaIcon[item].addEventListener('mouseover',()=>{
          mediaIcon[item].setAttribute('class','icon icon-Decoration');
        });
        mediaIcon[item].addEventListener('mouseout',()=>{
          mediaIcon[item].setAttribute('class','icon');
        });
      }
