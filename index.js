
const fileBtn = document.querySelector('#file');
const submitBtn = document.querySelector('#submit');
const contentContainer = document.querySelector('.content__container')

let array = [{h1: 'Каждую пятницу'}, {h1: 'Он ударил твою девушку по жопе', p: 'твои действия?'}, {h1: 'Украина ищет новые источники газа'}, {h1: 'Крест Доминика Торетто', p: '+пирамидка в подарок'},{h1: 'Это избавляет от геморроя', p:'надо всего лишь...'},{h1: 'ТВОЙ НАРКОТИК', p:'сколько ты протянешь без него?'}, {h1:'Добро пожаловать в Тайланд', p: 'текст'}, {h1:'Довольны?', p:'довели...'}, {h1: 'Биг таймер, мой белый биг таймер', p:'был в яме но я ща ношу дизайнер'},{h1:'НИКОГДА', p:'не сдавайся'},{h1:'Вместо тысячи слов', p:'поразительно...'},{h1:'Это когда то засохло на простыне'},{h1:'А эту серию Простоквашино я не видел...',p:'заставляет задуматься'},{h1:'У меня так друг умер',p:'справедливо'},{h1:'Охуенная тема'},{h1:'Одобряем всей батальоном',p:'США В ШОКЕ...'},{h1:'Украинская разведка',p:'украинские технологии поражают..'},{h1:'Если это не правда',p:'то что?'},{h1:'Коронавирусным не понять'},{h1:'Ученых повергло в ШОК',p:'когда они увидели это...'},{h1:'кто'},{h1:'Вставай заебал, на работу пора'},{h1:'А?'},{h1:'Тема раскрыта ПОЛНОСТЬЮ', p:'вопросов нет'},{h1:'Если не лайкнешь у тебя нет сердца'},{h1:'Погладь кота', p:'погладь кота сука'},{h1:'А ведь это идея'},{h1:'Где-то в Мукачеве'},{h1:'Назло старухам',p:'на радость онанистам'},{h1:'Он обязательно выживет'},{h1:'При Сталине такой хуйни не было', p:'а у вас было?'},{h1:'Нихуя он умный'},{h1:'вот они, слева направо',p:'Намджун, Чонгук, Чингачгук, Гойко Митич, Джин, Юнги. Люблю вас'},{h1:'Одиночество сука'},{h1:'АХАХАХАХАХАХАХАХХАХАХАХАХАХАХАХАХ'},{h1:'Вот она настоящая дружба',p:'без политики и лицемерия'},{h1:'Не перевелись ещё романткии'},{h1:'Вся суть современного общества',p:'в одном фото'}]

submitBtn.addEventListener('click',(e) => {
  e.preventDefault()
  const file = fileBtn.files[0]
  
  if (file == undefined) {
    return
  }
  
  var div = document.createElement("div");
  var img = document.createElement("img");
  var h1 = document.createElement("h1");
  img.classList.add("obj");
  img.file = file;
  h1.textContent = `${array[Math.floor(Math.random() * array.length)].h1}`
  h1.classList.add('content__h1')
  
  div.classList.add('demot-item')
  
  div.appendChild(img)
  div.appendChild(h1)
  console.log(div);
    var p = document.createElement("p")
    p.textContent = array[Math.floor(Math.random() * array.length)].p;
    div.appendChild(p)
    
  contentContainer.appendChild(div)
  
  
  var reader = new FileReader();
  reader.onload = (function(aImg) { return function(e) { img.src = e.target.result; }; })(img);
  reader.readAsDataURL(file);

})