//---------SELECTORS
const stickers = [
  {
    id: 1, 
    img: "img/sticker1.png",
  },
  {
    id: 2, 
    img: "img/sticker2.png",
  }, 
  {
    id: 3, 
    img: "img/sticker3.png",
  },
  {
    id: 4, 
    img: "img/sticker4.png",
  },
  {
    id: 5, 
    img: "img/sticker5.png",
  },
  {
    id: 6, 
    img: "img/sticker6.png",
  },
  {
    id: 7, 
    img: "img/sticker7.png",
  },
  {
    id: 8, 
    img: "img/sticker8.png",
  },
  {
    id: 9, 
    img: "img/sticker9.png",
  },
  {
    id: 10, 
    img: "img/sticker10.png",
  },
  {
    id: 11, 
    img: "img/sticker11.png",
  },
  {
    id: 12, 
    img: "img/sticker12.png",
  },
  {
    id: 13, 
    img: "img/sticker13.png",
  },
  {
    id: 14, 
    img: "img/sticker14.png",
  },
  {
    id: 15, 
    img: "img/sticker15.png",
  },
];

const userImgContainer = document.querySelector('.user__img--container');
const userImg = document.getElementById('user__img');
const userImgSelection = document.querySelector('.user__img--select');
const userImgs = document.querySelectorAll('.user__img--option');
const reward = document.getElementById('reward');
const stickerContainer = document.getElementById('sticker__container');

//------DISPLAY USER OPTIONS 
/*userImgContainer.addEventListener('click', function () {
  userImgSelection.classList.toggle('container__display');
});

//----- SELECT USER IMG OPTIONS & DISPLAY

userImgs.forEach(function(img) {
  img.addEventListener('click', function () {
    let chosenImg = img.getAttribute('src'); 
    let displayImg = `<img src="${chosenImg}" class="user__img" id="user__img" alt="">`;
    userImgContainer.innerHTML = displayImg;
    userImgSelection.classList.remove('container__display');
  }); 
});*/

//-----------SAVE STICKER
/*function saveSticker(savedSticker) {
  let savedStickers;
  if (localStorage.getItem("savedStickers") === null) {
    savedStickers = [];
  } else {
    savedStickers = JSON.parse(localStorage.getItem("savedStickers"));
  };

  savedStickers.push(savedSticker);
  localStorage.setItem("savedStickers", JSON.stringify(savedStickers));
};*/



/*function getUserImg() {
  let userSavedImg;
  if (localStorage.getItem("userSavedImg") === null) {
    userSavedImg = [];
  } else {
    userSavedImg = JSON.parse(localStorage.getItem("userSavedImg"));
  };

//stickerContainer.innerHTML = `<img src=${userSavedImg} alt="" ///class="sticker"></img>`;
};*/



/*----DISPLAY STICKERS*/
let chosenSticker = 0; 

function showSticker(sticker) {
  const item = stickers[sticker]; 
  stickerContainer.innerHTML = `<img src=${item.img} alt="" class="sticker"></img>`;
};

/*-----ADD RANDOM STICKERS----*/

reward.addEventListener('click', function() {
  chosenSticker = Math.floor(Math.random() * stickers.length);
  showSticker(chosenSticker); 

});



