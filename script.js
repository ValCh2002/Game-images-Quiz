images=[
    'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg',
    'https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_2004-03-2.jpg/1200px-Giant_Panda_2004-03-2.jpg',
    'https://brisbanekids.com.au/wp-content/uploads/2022/08/koala.jpg',
    'https://www.paigntonzoo.org.uk/wp-content/uploads/2022/07/NZ_Animal_Photos_04-22_LR-43-1024x683.jpg',
    'https://www.thoughtco.com/thmb/7c74HjNwihiJowsewCYFNpO_CkY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/153345626-56a295555f9b58b7d0cc559c.jpg',
    'https://i.pinimg.com/736x/1c/45/23/1c4523c8d739df7e63eb378aa4d6e72c.jpg',
    'https://qph.cf2.quoracdn.net/main-qimg-08f7175ea728682d98bcbc82bf725a2f',
    'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg',
    'https://media.newyorker.com/photos/62c4511e47222e61f46c2daa/4:3/w_2663,h_1997,c_limit/shouts-animals-watch-baby-hemingway.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_2004-03-2.jpg/1200px-Giant_Panda_2004-03-2.jpg',
    'https://brisbanekids.com.au/wp-content/uploads/2022/08/koala.jpg',
    'https://www.paigntonzoo.org.uk/wp-content/uploads/2022/07/NZ_Animal_Photos_04-22_LR-43-1024x683.jpg',
    'https://www.thoughtco.com/thmb/7c74HjNwihiJowsewCYFNpO_CkY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/153345626-56a295555f9b58b7d0cc559c.jpg',
    'https://i.pinimg.com/736x/1c/45/23/1c4523c8d739df7e63eb378aa4d6e72c.jpg',
    'https://qph.cf2.quoracdn.net/main-qimg-08f7175ea728682d98bcbc82bf725a2f',
]
let openedCards = [];
const defaultImage='<img src="https://media.istockphoto.com/id/1186386668/vector/quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=mBQMqQ6kZuC9ZyuV5_uCm80QspqSJ7vRm0MfwL3KLZY=" alt="">'
document.getElementById('mainDiv').innerHTML = images.map(image => `<div class="card" onclick="revealCard(this)">${defaultImage}</div>`).join('');
images.sort(()=>Math.random()-0.5)
let cards=document.getElementsByClassName('card')

let count=0
function revealCard(card) {
    let index
    for(let i=0;i<cards.length;i++){
        if (cards[i]==card) {
            index=i
        }
    }
    if (openedCards.length == 2 || openedCards.includes(card)) return;
    card.innerHTML=`<img src=${images[index]} alt="">`
  openedCards.push(card);
  if (openedCards.length == 2) {
    setTimeout(() => {
      if (openedCards[0].innerHTML == openedCards[1].innerHTML) {
          openedCards.forEach(card => card.style.visibility = 'hidden');
          count++
      } else {
        openedCards.forEach(card => card.innerHTML = defaultImage);
      }
      openedCards = [];
    }, 900);
  }
  setTimeout(() => {
    if (count==8) {
        alert('Winn!!')
    }
}, 1000);
}
