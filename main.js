const strikers = [
  {
    name: 'HARMONY площадка установочная под евровинт 6.3x14 (0мм)',
    article: '525A16M500C',
    amount: 14,
    type: 0,
    img: 'https://www.mdm-complect.ru/CONTENT/catalogue/fasady/525A16M500C.jpg'
  },
  {
    name: 'HARMONY площадка установочная под евровинт 6.3x14 (2мм)',
    article: '525A16M502C',
    amount: 7,
    type: 0,
    img: 'https://www.mdm-complect.ru/CONTENT/catalogue/fasady/525A16M500C.jpg'
  },
  {
    name: 'HARMONY площадка установочная под евровинт 6.3x14 (4мм)',
    article: '525A16M504C',
    amount: 4,
    type: 0,
    img: 'https://www.mdm-complect.ru/CONTENT/catalogue/fasady/525A16M500C.jpg'
  },
  {
    name: 'HARMONY площадка установочная под саморезы (0мм), бронза',
    article: '525A01M500CBR',
    amount: 4
  },
  {
    name: 'HARMONY площадка установочная под саморезы (2мм), черный никель',
    article: '525A01M520CB',
    amount: 1,
    type: 1,
    img: 'https://www.mdm-complect.ru/CONTENT/catalogue/fasady/525A01M500CBN.jpg'
  },
  {
    name: 'Mini QS площадка установочная/евровинт 6.3x14 (2 мм)',
    article: '520316M502C',
    amount: 8,

  },
  {
    name: 'SLIDE-ON площадка установочная под саморезы (2 мм)',
    article: '520201M502P',
    amount: 500
  },
  {
    name: 'Slide-on площадка установочная/саморез (4 мм)',
    article: '520201M5041',
    amount: 72
  },
  {
    name: 'TIOMOS линейная установочная площадка под саморез, (0 мм)',
    article: 'F059139701',
    amount: 11,
    type: 2,
    img: 'https://www.mdm-complect.ru/CONTENT/catalogue/fasady/F059139701.jpg'
  },
  {
    name: 'Планка монтажная Firmax для петель серии Clickline, H=2, крестовая с предустановленными евровинтами',
    article: 'FRM0119.H2/2',
    amount: 74
  },
  {
    name: 'Планка монтажная для петель Firmax Advanced, H=0, крестовая с регулировкой по высоте, с предустановленным евровинтами',
    article: 'FRM0139.H2/2',
    amount: 8
  },
  {
    name: 'Планка монтажная Firmax для петель серии Slide-on, H=2, шуруп',
    article: 'FRM0141',
    amount: 21
  },
  {
    name: 'Ответная планка H0 под шуруп/евровинт Clip-on (cam), прямоугольная, отделка никель',
    article: 'MP.406.H0.N',
    amount: 40,
    type: 3,
    img: 'https://makmart.ru/upload/iblock/164/r6dxd10r0xksayf8ozsjw2qwkfddryg1.jpg'
  },
  {
    name: 'Ответная планка Н2 с евровинтом, Clip-on (cam), отделка никель',
    article: 'MP.342.H2.N',
    amount: 129,
    type: 0,
    img: 'https://makmart.ru/upload/iblock/f80/n49wbu0mlxy0p88rf2e33g4nau0icy9l/002.jpg'
  },
  {
    name: 'Ответная планка Н4 под шуруп, крестообразная',
    article: 'B2V3H49/15',
    amount: 17,
    type: 7,
    img: 'https://makmart.ru/upload/iblock/7e0/rsyzniwmztjhceyxhp8cvy6cih0v3nkl/001.jpg'
  },
  {
    name: 'Монтажная планка для петли Sensys/Intermat H=3, в комплекте с 2 евровинтам',
    article: '9071627',
    amount: 35,
    type: 8,
    img: 'https://www.tdserver.ru/upload/iblock/b8e/114681.jpg'
  },
  {
    name: 'Планка CLIP крестообразная с установл. евровинтами, 0мм',
    article: '173L8100',
    amount: 30,
    type: 4,
    img: 'https://www.itkt.ru/upload/iblock/b48/b4807a62c79a1680b7a3adde23fe4771.gif'
  },
  {
    name: 'Планка CLIP крестообразная с установл. евровинтами, 3мм',
    article: '173L8130',
    amount: 6,
    type: 4,
    img: 'https://www.itkt.ru/upload/iblock/a45/a45d13419e37679caac940dc86fd725b.jpg'
  },
  {
    name: 'Планка CLIP крестообразная под евровинт, подъем 6мм, двусост., с доп.отверстиями',
    article: '175H9160',
    amount: 28,
    type: 4,
    img: 'https://fierashop.ru/upload/resize_cache/pictures/365_243_029093fcf5930a7be73961e4a94933403/4974013.jpg'
  },
  {
    name: 'Планка CLIP крестообразная под евровинт, подъем 9мм, двусост., с доп.отверстиями',
    article: '175H7190',
    amount: 26,
    type: 4,
    img: 'https://fierashop.ru/upload/resize_cache/pictures/1000_1000_129093fcf5930a7be73961e4a94933403/7323033.jpg'
  },
  {
    name: 'Планка MODUL крестообразная с евровинтами, подъем 3 мм для петель 99B9550',
    article: '199.8130',
    amount: 2,
    type: 6,
    img: 'https://kdm24.ru/upload/iblock/74f/74f36212e56441e573caa4fad0c7548e.jpg'
  },
  {
    name: 'Ответная планка MODUL с еврошурупом',
    article: '193L8100',
    amount: 10
  },
  {
    name: 'AVS HF, HKS, Прям планка под шуруп',
    article: '175H3100',
    amount: 30,
    type: 4,
    img: 'https://fierashop.ru/upload/resize_cache/pictures/1000_1000_129093fcf5930a7be73961e4a94933403/5891994.jpg'
  },
  {
    name: 'Подкладка клинообразная +5° под угловые петли CLIP top, подъем 3 мм',
    article: '171A5040',
    amount: 16,
    type: 4,
    img: 'https://fierashop.ru/upload/resize_cache/pictures/1000_1000_129093fcf5930a7be73961e4a94933403/2518453.jpg'
  },
  {
    name: 'Ограничитель угла открывания 104° для AVENTOS HF',
    article: '20F7051',
    amount: 8
  },
  {
    name: 'Монтажная планка System 8099 Sensys, Intermat, L37, D0, под прикручивание',
    article: '9071575',
    amount: 19,
    type: 5,
    img: 'https://ihnlver43yzmlyywutd270y.blob.core.windows.net/azureimages/400Wx400H/MPL_8099_1teil_ansch_TA_shop.jpg'
  }
];


const strikersButtons = document.querySelectorAll('.strikers-button');

let strikersBg, strikersPopup, row, col, popupCloseButton;



strikersButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    strikersBg = document.createElement('div');
    strikersBg.className = 'strikers-bg';

    strikersPopup = document.createElement('div');
    strikersPopup.className = 'strikers-popup';

    popupCloseButton = document.createElement('button');
    popupCloseButton.type = 'button';
    popupCloseButton.className = 'close-button';
    popupCloseButton.innerText = 'X';
    popupCloseButton.addEventListener('click', () => {
      strikersBg.remove();
      strikersBg = null;
      strikersPopup = null;
      popupCloseButton = null;
      row = null;
      col = null;
    });

    row = document.createElement('div');
    row.className = 'row';

    strikers.forEach(el => {
      if (el.type == e.target.dataset.type) {
        col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
          <img src="${el.img}">
          <p>${el.name}</p>
          <p>${el.article}</p>
          <div class="amount">${el.amount}</div>
          `;
        row.append(col);
      }
    });

    strikersPopup.append(row);

    strikersPopup.append(popupCloseButton);

    strikersBg.append(strikersPopup);

    document.body.append(strikersBg);
  });
});

