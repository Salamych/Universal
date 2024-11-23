export class CounterLikes{
  constructor(){

    this.comentItems = document.querySelector('.travel-comments__main-list');

    this.counts = document.querySelectorAll('.travel-comments__main-list_item-author_overview-social_count');

  
    this.comentItems.addEventListener('click', e => {

      if(e.target.classList.contains('travel-comments__main-list_item-author_overview-social_like') || e.target.classList.contains('like-svg')){
        console.log(e.target);
        if(e.target.classList.contains('like-svg')){
          let el = e.target.parentNode.parentNode.nextElementSibling;
          this.countPlus(el);
          
        }
        else {
          let el = e.target.nextElementSibling;
          this.countPlus(el);
          
        }
      }

      if(e.target.classList.contains('travel-comments__main-list_item-author_overview-social_dislike') || e.target.classList.contains('dislike-svg')){

        if(e.target.classList.contains('dislike-svg')){
          let el = e.target.parentNode.parentNode.previousElementSibling;
          this.countMinus(el);
          
        }
        else {
          let el = e.target.previousElementSibling;
          this.countMinus(el);
          
        }
        
      }
    });
  }

  countMinus(el){
    let a = parseInt(el.innerText, 10);
    a--;
    
    let plus = (a>0) ? '+': '';
    el.textContent = `${plus}${a}`;
    this.toggleClass(el);
  }
  countPlus(el){
    let a = parseInt(el.innerText, 10);
    a++;
    
    let plus = (a>0) ? '+': '';
    el.textContent = `${plus}${a}`;
    this.toggleClass(el);
  }

  toggleClass(el){
    let a = parseInt(el.innerText, 10);
    if(a > 0){
      if(!el.classList.contains('color-tech')){
        el.classList.add('color-tech');
      } 
    }
    else if(a == 0){
      el.classList.remove('color-tech');
      el.classList.remove('color-science');
    }
    else if(a<0){
      if(!el.classList.contains('color-science')){
        el.classList.add('color-science');
      } 
        
    }
  }

}