
export class ToggleNews{
  constructor(){

    this.items = document.querySelectorAll('.float-asside__item');
    this.floatAsside = document.querySelector('.float-asside');
  
    this.floatAsside.addEventListener('click', (e) => {

      if(
        e.target.classList.contains('float-asside__item') 
        || e.target.classList.contains('float-asside__item-title') 
        || e.target.classList.contains('float-asside__item-description')
      ){

        this.items.forEach(e => { 
          if(e.classList.contains('float-asside__item-active')){
            e.classList.remove('float-asside__item-active');
          } 
        });

        if(e.target.classList.contains('float-asside__item')){
          e.target.classList.add('float-asside__item-active');
        }
        else if(
          e.target.classList.contains('float-asside__item-title') 
          || e.target.classList.contains('float-asside__item-description')
        ){
          let el = e.target.parentElement;
          el.classList.add('float-asside__item-active');
        }

      }
    });
  }
  
  
  
}

