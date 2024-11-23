import {ToggleNews} from './module/toggle.js';
import { CounterLikes } from './module/counter.js';

window.addEventListener('load', function(){

  const news = '.float-asside';
  const likes = '.travel-comments__main-list';

  if(document.querySelector(news) !== null) new ToggleNews();
  if(document.querySelector(likes) !== null) new CounterLikes();


});