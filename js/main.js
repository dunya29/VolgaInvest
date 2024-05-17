// Реализация модального окна
const modal = new GraphModal();

(function(w,d,n,c){w.CalltouchDataObject=n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)},m=typeof Array.prototype.find === 'function',n=m?"init-min.js":"init.js";s.async=true;s.src="https://mod.calltouch.ru/"+n+"?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window,document,"ct","ij0jqaa0");


// Реализация табов
const motion = document.querySelector('.motion');
const prodTabs = document.querySelector('.prod-tab');
if (motion) {
  const tabs = new GraphTabs('motion');
}
if (prodTabs) {
  const tabs = new GraphTabs('prod-tab');
}
const phones = document.querySelectorAll('.phone');
if (phones.length != 0) {
  phones.forEach(phone => {
    var maskOptions = {
      mask: '+7(000)000-00-00'
    };
    var mask = new IMask(phone, maskOptions);
  });
}
const screenWidth = window.innerWidth;

// Menu burger action
const menuBurgerOpen = document.querySelector('.header-burger');
if (menuBurgerOpen) {
  const menuMobile = document.querySelector('.menu');
  const menuBurgerClose = document.querySelector('.menu__close');
  menuBurgerOpen.addEventListener('click', () => {
    menuMobile.classList.add('menu--active');
    document.body.classList.add('noscroll');
  });
  menuBurgerClose.addEventListener('click', () => {
    menuMobile.classList.remove('menu--active');
    document.body.classList.remove('noscroll');
  });
}

// input hover
const inputs = document.querySelectorAll('.input');

if (inputs.length != 0) {
  inputs.forEach(input => {
    const placeholder = input.firstElementChild;
    const inputTag = input.querySelector('input') //input.lastElementChild;

    inputTag.onfocus = function () {
      placeholder.classList.add('focused');
    };

    inputTag.onblur = function () {
      if (inputTag.value == '') {
        placeholder.classList.remove('focused');
      }
    };
  });
}

// Yandex map
function init1() {
  let mapCenter = [56.3034682015124, 43.933365907409666];
  let mapMain = new ymaps.Map('map', {
    center: mapCenter,
    zoom: 16,
    controls: []
  });
  let mapPop = new ymaps.Map('map-popup', {
    center: mapCenter,
    zoom: 16,
    controls: []
  });
  var searchControl = new ymaps.control.SearchControl({
    options: {
      provider: 'yandex#search',
      noPopup: true,
      noSuggestPanel: true,
      boundedBy: [[56.31470576779187, 43.90511485464363], [56.292087803719355, 43.95300837881353]]
    }
  });
  var searchControl1 = new ymaps.control.SearchControl({
    options: {
      provider: 'yandex#search',
      noPopup: true,
      noSuggestPanel: true,
      boundedBy: [[56.31470576779187, 43.90511485464363], [56.292087803719355, 43.95300837881353]]
    }
  });
  mapPop.controls.add(searchControl1);
  mapMain.controls.add(searchControl);
  searchControl.search('Магазины');
  searchControl1.search('Магазины');
  const mapTab = document.querySelector('.map__nav');
  const mapTabs = mapTab.querySelectorAll('.tabs__nav-btn');
  const mapTabPopup = document.querySelector('.map__nav-popup');
  const mapTabsPopup = mapTabPopup.querySelectorAll('.tabs__nav-btn');
  mapTabs.forEach(el => {
    el.addEventListener('click', () => {
      mapTabs.forEach(elem => {
        elem.classList.remove('active');
      });
      mapTabsPopup.forEach(elem => {
        elem.classList.remove('active');
      });
    });
  });
  mapTabs[0].addEventListener('click', () => {
    searchControl.search('Магазины');
    searchControl1.search('Магазины');
    mapTabs[0].classList.add('active');
    mapTabsPopup[0].classList.add('active');
  });
  mapTabs[1].addEventListener('click', () => {
    searchControl.search('Образование');
    searchControl1.search('Образование');
    mapTabs[1].classList.add('active');
    mapTabsPopup[1].classList.add('active');
  });
  mapTabs[2].addEventListener('click', () => {
    searchControl.search('Транспорт');
    searchControl1.search('Транспорт');
    mapTabs[2].classList.add('active');
    mapTabsPopup[2].classList.add('active');
  });
  mapTabs[3].addEventListener('click', () => {
    searchControl.search('Здоровье');
    searchControl1.search('Здоровье');
    mapTabs[3].classList.add('active');
    mapTabsPopup[3].classList.add('active');
  });
  mapTabs[4].addEventListener('click', () => {
    searchControl.search('Развлечения');
    searchControl1.search('Развлечения');
    mapTabs[4].classList.add('active');
    mapTabsPopup[4].classList.add('active');
  });
  mapTabsPopup.forEach(el => {
    el.addEventListener('click', () => {
      mapTabsPopup.forEach(elem => {
        elem.classList.remove('active');
      });
      mapTabs.forEach(elem => {
        elem.classList.remove('active');
      });
    });
  });
  mapTabsPopup[0].addEventListener('click', () => {
    searchControl1.search('Магазины');
    searchControl.search('Магазины');
    mapTabs[0].classList.add('active');
    mapTabsPopup[0].classList.add('active');
  });
  mapTabsPopup[1].addEventListener('click', () => {
    searchControl1.search('Образование');
    searchControl.search('Магазины');
    mapTabs[1].classList.add('active');
    mapTabsPopup[1].classList.add('active');
  });
  mapTabsPopup[2].addEventListener('click', () => {
    searchControl1.search('Транспорт');
    searchControl.search('Транспорт');
    mapTabs[2].classList.add('active');
    mapTabsPopup[2].classList.add('active');
  });
  mapTabsPopup[3].addEventListener('click', () => {
    searchControl1.search('Здоровье');
    searchControl.search('Здоровье');
    mapTabs[3].classList.add('active');
    mapTabsPopup[3].classList.add('active');
  });
  mapTabsPopup[4].addEventListener('click', () => {
    searchControl1.search('Развлечения');
    searchControl.search('Развлечения');
    mapTabs[4].classList.add('active');
    mapTabsPopup[4].classList.add('active');
  });

  // map.controls.remove('geolocationControl'); // удаляем геолокацию
  mapPop.controls.remove('searchControl'); // удаляем поиск
  mapPop.controls.remove('trafficControl'); // удаляем контроль трафика
  mapPop.controls.remove('typeSelector'); // удаляем тип
  mapMain.controls.remove('searchControl'); // удаляем поиск
  mapMain.controls.remove('trafficControl'); // удаляем контроль трафика
  mapMain.controls.remove('typeSelector'); // удаляем тип
  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  mapPop.geoObjects.add(new ymaps.Placemark([56.3034682015124, 43.933365907409666], {
    iconCaption: 'ЖК на Журова'
  }, {
    preset: 'islands#redHomeIcon',
    iconColor: 'green'
  }));
  mapMain.geoObjects.add(new ymaps.Placemark([56.3034682015124, 43.933365907409666], {
    iconCaption: 'ЖК на Журова'
  }, {
    preset: 'islands#redHomeIcon',
    iconColor: 'green'
  }));
  const mapExtand = document.querySelector('.map__open-extend');
  const mapReduce = document.querySelector('.map__open-reduce');
  const mapPopup = document.querySelector('.popup-map');
  mapExtand.addEventListener('click', () => {
    mapPopup.classList.add('active');
    document.body.classList.add('noscroll');
  });
  mapReduce.addEventListener('click', () => {
    mapPopup.classList.remove('active');
    document.body.classList.remove('noscroll');
  });
}
if (document.querySelector('#map')) {
  ymaps.ready(init1);
}

// Yandex map
function init2() {
  let mapCenter = [56.3336348337177,43.94172042480468];
  let map = new ymaps.Map('map1', {
    center: mapCenter,
    zoom: 11,
    controls: ['searchControl']
  });
  if (screenWidth <= 768) {
    map.setZoom(11);
  } else if (screenWidth <= 1200) {
    map.setZoom(12);
  }
  var searchControl = new ymaps.control.SearchControl({
    options: {
      provider: 'yandex#map'
    }
  });
  searchControl.search('Продукты');
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип

  map.geoObjects.add(new ymaps.Placemark([56.3034682015124, 43.933365907409666], {
    iconCaption: 'ЖК на Журова'
  }, {
    preset: 'islands#redHomeIcon',
    iconColor: 'green'
  }))
      .add(new ymaps.Placemark([56.325759068408416,44.015741999999996], {
        iconCaption: 'Офис продаж'
      }, {
        preset: 'islands#redHomeIcon',
        iconColor: 'green'
      }))

      .add(new ymaps.Placemark([56.34624200424052, 43.86168999999998], {
    iconCaption: 'Офис для корреспонденции'
  }, {
    preset: 'islands#redHomeIcon',
    iconColor: 'green'
  }))
}
if (document.querySelector('#map1')) {
  ymaps.ready(init2);
}
const mapTabs = document.querySelectorAll('.map__point');
if (mapTabs.length != 0) {
  mapTabs.forEach(mapTab => {
    mapTab.addEventListener('click', () => {
      mapTabs.forEach(el => {
        el.classList.remove('active');
      });
      mapTab.classList.add('active');
    });
  });
}

const house1 = document.querySelector('.house__img-house-1');
const house2 = document.querySelector('.house__img-house-2');

if (house1) {
  const popup1 = document.querySelector('.house-hover__first');
  const popup2 = document.querySelector('.house-hover__sec');

  if (screenWidth >= 1200) {
    house1.addEventListener('mouseover', () => {
      popup1.classList.add('active');
      house1.classList.add('active');
    });
    popup1.addEventListener('mouseover', () => {
      popup1.classList.add('active');
      house1.classList.add('active');
    });
    house1.addEventListener('mouseleave', () => {
      popup1.classList.remove('active');
      house1.classList.remove('active');
    });
    popup1.addEventListener('mouseleave', () => {
      popup1.classList.remove('active');
      house1.classList.remove('active');
    });
    house2.addEventListener('mouseover', () => {
      popup2.classList.add('active');
      house2.classList.add('active');
    });
    popup2.addEventListener('mouseover', () => {
      popup2.classList.add('active');
      house2.classList.add('active');
    });
    house2.addEventListener('mouseleave', () => {
      popup2.classList.remove('active');
      house2.classList.remove('active');
    });
    popup2.addEventListener('mouseleave', () => {
      popup2.classList.remove('active');
      house2.classList.remove('active');
    });
  } else {
    const choose1 = document.querySelector('.house__choose-1');
    const choose2 = document.querySelector('.house__choose-2');

    //popup1.classList.add('active');
    //house1.classList.add('active');

    choose1.addEventListener('click', () => {
      choose2.classList.remove('active');
      choose1.classList.add('active');
      popup1.classList.add('active');
      popup2.classList.remove('active');
      house1.classList.add('active');
      house2.classList.remove('active');
    });
    choose2.addEventListener('click', () => {
      choose1.classList.remove('active');
      choose2.classList.add('active');
      popup1.classList.remove('active');
      popup2.classList.add('active');
      house2.classList.add('active');
      house1.classList.remove('active');
    });
  }
}


var floorSlider = document.querySelector('#slider-floor');
if (floorSlider) {
  noUiSlider.create(floorSlider, {
    start: [5, 17],
    connect: true,
    step: 1,
    range: {
      'min': 5,
      'max': 17
    }
  });
  const filterInputs = document.querySelectorAll('.floor-input');
  floorSlider.noUiSlider.on('update', function (values, handle) {
    filterInputs[handle].value = Math.round(values[handle]);
  });
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    floorSlider.noUiSlider.set(arr);
  };
  filterInputs.forEach((el, index) => {
    el.addEventListener('change', e => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
var floorSliderMobile = document.querySelector('#slider-floor-1');
if (floorSliderMobile) {
  noUiSlider.create(floorSliderMobile, {
    start: [5, 17],
    connect: true,
    step: 1,
    range: {
      'min': 5,
      'max': 17
    }
  });
  const filterInputs = document.querySelectorAll('.floor-input-1');
  floorSliderMobile.noUiSlider.on('update', function (values, handle) {
    filterInputs[handle].value = Math.round(values[handle]);
  });
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    floorSliderMobile.noUiSlider.set(arr);
  };
  filterInputs.forEach((el, index) => {
    el.addEventListener('change', e => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}


var squareSlider = document.querySelector('#slider-square');
if (squareSlider) {
  noUiSlider.create(squareSlider, {
    start: [39.89, 82.45],
    connect: true,
    range: {
      'min': 39.89,
      'max': 82.45
    }
  });
  const filterInputs = document.querySelectorAll('.square-input');
  squareSlider.noUiSlider.on('update', function (values, handle) {
    filterInputs[handle].value = values[handle];
  });
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    squareSlider.noUiSlider.set(arr);
  };
  filterInputs.forEach((el, index) => {
    el.addEventListener('change', e => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
var squareSliderMobile = document.querySelector('#slider-square-1');
if (squareSliderMobile) {
  noUiSlider.create(squareSliderMobile, {
    start: [39.89, 82.45],
    connect: true,
    range: {
      'min': 39.89,
      'max': 82.45
    }
  });
  const filterInputs = document.querySelectorAll('.square-input-1');
  squareSliderMobile.noUiSlider.on('update', function (values, handle) {
    filterInputs[handle].value = values[handle];
  });
  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    squareSliderMobile.noUiSlider.set(arr);
  };
  filterInputs.forEach((el, index) => {
    el.addEventListener('change', e => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}



/*
const filterRooms = document.querySelectorAll('.filter__room');
if (filterRooms.length != 0) {
  filterRooms.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('active');
    });
  });
}

 */

// Select

const select = document.querySelector('.default');
const defaultSelect = () => {
  const choices = new Choices(select, {
    searchEnabled: false,
    shouldSort: false
  });
};
if (select) {
  defaultSelect();
}
const flatTabBtns = document.querySelectorAll('.flat-tabs__btn');
if (flatTabBtns.length != 0) {
  const flatTabs = document.querySelectorAll('.flat__item');
  flatTabBtns.forEach(flatTabBtn => {
    flatTabBtn.addEventListener('click', () => {
      flatTabBtns.forEach(el => {
        el.classList.remove('active');
      });
      flatTabs.forEach(el => {
        el.classList.remove('active');
      });
      flatTabBtn.classList.add('active');
      if (flatTabBtn.dataset.flat == 'list') {
        flatTabs[0].classList.add('active');
        document.querySelector('.flat-hat__sort').style.display = 'flex';
      } else if (flatTabBtn.dataset.flat == 'scheme') {
        flatTabs[1].classList.add('active');
        document.querySelector('.flat-hat__sort').style.display = 'none';
      }
    });
  });
}



//КОД ПРИБЛИЖЕНИЯ И ОТДАЛЕНИЯ
var flatSchemes = document.querySelectorAll('.flat-scheme__img');
if (flatSchemes.length != 0) {
  const mobileOverlay = document.querySelector('.flat-scheme__overlay');
  if (screenWidth < 768) {
    mobileOverlay.classList.remove('hidden');
    mobileOverlay.addEventListener('touchstart', () => {
      mobileOverlay.classList.add('hidden');
    });
  }
  const zoomInBtn = document.querySelector('.flat-scheme__zoom-in');
  const zoomOutBtn = document.querySelector('.flat-scheme__zoom-out');
  let block = document.querySelector('.flat-scheme__img');
  var x = 0;
  if (block.classList.contains('flat-scheme__img-citybox')) {
    if (screenWidth >= 1200) {
      x = 0.55;
    } else if (screenWidth >= 768) {
      x = 0.8;
    } else if (screenWidth >= 640) {
      x = 1;
    } else if (screenWidth >= 420) {
      x = 1.2;
    } else if (screenWidth > 0) {
      x = 1.3;
    }
  } else {
    if (screenWidth >= 768) {
      x = 0.8;
    } else if (screenWidth >= 640) {
      x = 1;
    } else if (screenWidth >= 420) {
      x = 1.2;
    }
  }

  //КОД ПЕРЕМЕЩЕНИЯ
  var blockmove = document.querySelector('.flat-scheme');
  var left = 0,
    tp = 0,
    xx,
    yy;
  blockmove.ontouchstart = function (e) {
    e.preventDefault();
    xx = e.pageX;
    yy = e.pageY;
    function moveAt(e) {
      block.style.left = left + e.pageX - xx + 'px';
      block.style.top = tp + e.pageY - yy + 'px';
    }
    blockmove.ontouchmove = function (e) {
      moveAt(e);
    };
    blockmove.touchend = blockmove.onmouseup = function (e) {
      left = parseFloat(block.style.left);
      tp = parseFloat(block.style.top);
      blockmove.onmouseleave = null;
      blockmove.onmousemove = null;
      blockmove.onmouseup = null;
    };
  };
  blockmove.onmousedown = function (e) {
    e.preventDefault();
    xx = e.pageX;
    yy = e.pageY;
    function moveAt(e) {
      if (left + e.pageX - xx < 1500 && left + e.pageX - xx > -1500) {
        block.style.left = left + e.pageX - xx + 'px';
      }
      if (tp + e.pageY - yy < 1500 && tp + e.pageY - yy > -1500) {
        block.style.top = tp + e.pageY - yy + 'px';
      }
    }
    blockmove.onmousemove = function (e) {
      moveAt(e);
    };
    blockmove.onmouseleave = blockmove.onmouseup = function (e) {
      left = parseFloat(block.style.left);
      tp = parseFloat(block.style.top);
      blockmove.onmouseleave = null;
      blockmove.onmousemove = null;
      blockmove.onmouseup = null;
    };
  };
  block.onwheel = function (event) {
    if (event.deltaY < 0 && x < 5) {
      x += 0.1;
      this.style.scale = x;
    }
    if (event.deltaY > 0 && x > 0.6) {
      x -= 0.1;
      this.style.scale = x;
    }
    return false;
  };
  zoomInBtn.addEventListener('click', () => {
    if (x < 5) {
      x += 0.4;
      block.style.scale = x;
    }
  });
  zoomOutBtn.addEventListener('click', () => {
    if (x > 0.6) {
      x -= 0.4;
      block.style.scale = x;
    }
  });
  const flatBtns = document.querySelectorAll('.zoom-item');
  flatBtns.forEach(el => {
    el.addEventListener('click', () => {
      let flatId = el.getAttribute('data-tab');
      let block = document.querySelector(flatId);
      var x = 0;
      if (screenWidth >= 768) {
        x = 0.8;
      } else if (screenWidth >= 640) {
        x = 1;
      } else if (screenWidth >= 420) {
        x = 1.2;
      }

      //КОД ПЕРЕМЕЩЕНИЯ
      var blockmove = document.querySelector('.flat-scheme');
      var left = 0,
        tp = 0,
        xx,
        yy;
      blockmove.ontouchstart = function (e) {
        e.preventDefault();
        xx = e.pageX;
        yy = e.pageY;
        function moveAt(e) {
          block.style.left = left + e.pageX - xx + 'px';
          block.style.top = tp + e.pageY - yy + 'px';
        }
        blockmove.ontouchmove = function (e) {
          moveAt(e);
        };
        blockmove.touchend = blockmove.onmouseup = function (e) {
          left = parseFloat(block.style.left);
          tp = parseFloat(block.style.top);
          blockmove.onmouseleave = null;
          blockmove.onmousemove = null;
          blockmove.onmouseup = null;
        };
      };
      blockmove.onmousedown = function (e) {
        e.preventDefault();
        xx = e.pageX;
        yy = e.pageY;
        function moveAt(e) {
          block.style.left = left + e.pageX - xx + 'px';
          block.style.top = tp + e.pageY - yy + 'px';
        }
        blockmove.onmousemove = function (e) {
          moveAt(e);
        };
        blockmove.onmouseleave = blockmove.onmouseup = function (e) {
          left = parseFloat(block.style.left);
          tp = parseFloat(block.style.top);
          blockmove.onmouseleave = null;
          blockmove.onmousemove = null;
          blockmove.onmouseup = null;
        };
      };
      block.onwheel = function (event) {
        if (event.deltaY < 0 && x < 5) {
          x += 0.1;
          this.style.scale = x;
        }
        if (event.deltaY > 0 && x > 0.6) {
          x -= 0.1;
          this.style.scale = x;
        }
        return false;
      };
      zoomInBtn.addEventListener('click', () => {
        if (x < 5) {
          x += 0.4;
          block.style.scale = x;
        }
      });
      zoomOutBtn.addEventListener('click', () => {
        if (x > 0.6) {
          x -= 0.4;
          block.style.scale = x;
        }
      });
    });
  });
}

// Tabs main
const houseBtns = document.querySelectorAll('.tab-btn');
const houseCards = document.querySelectorAll('.tab-item');
if (houseBtns) {
  houseBtns.forEach(houseBtn => {
    if (!houseBtn.classList.contains('unavailable')) {
      houseBtn.addEventListener('click', () => {
        let tabId = houseBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        if (!houseBtn.classList.contains('active')) {
          houseBtns.forEach(houseBtn => {
            houseBtn.classList.remove('active');
          });
          houseCards.forEach(houseCard => {
            houseCard.classList.remove('active');
          });
          houseBtn.classList.add('active');
          currentTab.classList.add('active');
        }
      });
    }
  });
}
const cityboxes = document.querySelectorAll('.flat-scheme__img-citybox');
if (cityboxes.length != 0) {
  cityboxes.forEach(el => {
    const paths = el.querySelectorAll('path');
    paths.forEach(path => {
      path.dataset.graphPath = 'popup-citybox';
    });
  });
}
const commerces = document.querySelectorAll('.flat-scheme__img-commerce');
if (commerces.length != 0) {
  commerces.forEach(el => {
    const paths = el.querySelectorAll('path');
    paths.forEach(path => {
      path.dataset.graphPath = 'popup-commerce';
    });
  });
}

// Accordion product aside
/*
const accordionProd = document.querySelector('.p-info__line-acc');
if (accordionProd) {
  accordionProd.addEventListener('click', () => {
    accordionProd.classList.toggle('active');
    const accordionClauseItemBody = accordionProd.nextElementSibling;
    if (accordionProd.classList.contains('active')) {
      accordionClauseItemBody.style.maxHeight = accordionClauseItemBody.scrollHeight + 'px';
    } else {
      accordionClauseItemBody.style.maxHeight = 0;
    }
  });
}

 */

// Product fancybox
const fancyBtn = document.querySelector('#p-fancy');
if (fancyBtn) {
  const fancyBody = document.querySelector('.p-fancy');
  const fancyClose = fancyBody.querySelector('.graph-modal__close');
  fancyBtn.addEventListener('click', () => {
    fancyBody.classList.add('active');
    document.body.classList.add('noscroll');
  });
  fancyClose.addEventListener('click', () => {
    fancyBody.classList.remove('active');
    document.body.classList.remove('noscroll');
  });
}
const prodTab = document.querySelector('.prod-tab');
if (prodTab) {
  const prodTabBtns = prodTab.querySelectorAll('.tabs__nav-btn');
  const prodTabItems = prodTab.querySelectorAll('.tabs__panel');
  const fancyBtns = document.querySelectorAll('.p-fancy__prev');
  const fancyItems = document.querySelectorAll('.p-fancy__pic');
  for (let i = 0; i < prodTabBtns.length; i++) {
    prodTabBtns[i].addEventListener('click', () => {
      fancyBtns.forEach(el => {
        el.classList.remove('active');
      });
      fancyItems.forEach(el => {
        el.classList.remove('active');
      });
      fancyBtns[i].classList.add('active');
      fancyItems[i].classList.add('active');
    });
  }
  for (let i = 0; i < fancyBtns.length; i++) {
    fancyBtns[i].addEventListener('click', () => {
      prodTabBtns.forEach(el => {
        el.classList.remove('tabs__nav-btn--active');
        el.setAttribute("tabindex", "-1");
        el.setAttribute("aria-selected", "");
      });
      prodTabItems.forEach(el => {
        el.classList.remove('tabs__panel--active');
      });
      prodTabBtns[i].classList.add('tabs__nav-btn--active');
      prodTabItems[i].classList.add('tabs__panel--active');
      prodTabBtns[i].setAttribute("tabindex", "");
      prodTabBtns[i].setAttribute("aria-selected", "true");
    });
  }
}

// mobile cityboxes // commerce
const cityboxTabs = document.querySelectorAll('.citybox__choose');
if (cityboxTabs.length != 0) {
  const cityboxItems = document.querySelectorAll('.citybox-list');
  cityboxTabs[0].addEventListener('click', () => {
    cityboxItems[0].classList.add('active');
    cityboxItems[1].classList.remove('active');
  });
  cityboxTabs[1].addEventListener('click', () => {
    cityboxItems[1].classList.add('active');
    cityboxItems[0].classList.remove('active');
  });
}
const motionSwiper1 = new Swiper('.motion__swiper-1', {
  slidesPerView: '3',
  navigation: {
    nextEl: '.motion__swiper-1-button-next',
    prevEl: '.motion__swiper-1-button-prev'
  },
  spaceBetween: 8,
  simulateTouch: true,
  slidesPerView: '2',
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: '3',
      spaceBetween: 16
    },
    1200: {
      spaceBetween: 32,
      slidesPerView: '3'
    }
  }
});
const motionSwiper2 = new Swiper('.motion__swiper-2', {
  spaceBetween: 32,
  navigation: {
    nextEl: '.motion__swiper-2-button-next',
    prevEl: '.motion__swiper-2-button-prev'
  },
  spaceBetween: 8,
  simulateTouch: true,
  slidesPerView: '2',
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: '3',
      spaceBetween: 16
    },
    1200: {
      spaceBetween: 32,
      slidesPerView: '3'
    }
  }
});
const motionSwiper3 = new Swiper('.motion__swiper-3', {
  slidesPerView: '3',
  spaceBetween: 32,
  navigation: {
    nextEl: '.motion__swiper-3-button-next',
    prevEl: '.motion__swiper-3-button-prev'
  },
  spaceBetween: 8,
  simulateTouch: true,
  slidesPerView: '2',
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: '3',
      spaceBetween: 16
    },
    1200: {
      spaceBetween: 32,
      slidesPerView: '3'
    }
  }
});
const motionSwiper = document.querySelector('.motion__swiper');
if (motionSwiper) {
  const slides = motionSwiper.querySelectorAll('.swiper-slide');
  const firstSlide = motionSwiper.querySelector('.swiper-slide');
  const activeSlide1 = firstSlide.nextElementSibling;
  const activeSlide2 = firstSlide.nextElementSibling.nextElementSibling;

  // firstSlide.classList.add('active-slide')
  // activeSlide1.classList.add('active-slide')
  // activeSlide2.classList.add('active-slide')

  // swiper.on('slideNextTransitionEnd', function() {
  //   slides.forEach((el) => {
  //     el.classList.remove('active-slide')
  //   })

  //   const firstSlide = firstSlide.nextElementSibling
  //   const activeSlide1 = firstSlide.nextElementSibling
  //   const activeSlide2 = firstSlide.nextElementSibling.nextElementSibling

  //   firstSlide.classList.add('active-slide')
  //   activeSlide1.classList.add('active-slide')
  //   activeSlide2.classList.add('active-slide')
  // })
}
window.addEventListener("load", function () {
jQuery(document).on("click", 'form button[type="submit"]', function() { 
        var m = jQuery(this).closest('form');   
         var fio = m.find('input[name*="name"]').val();          		 
          var ct_phone = m.find('input[name*="phone"]').val(); 
		   var mail = m.find('input[name*="Email"]').val(); 
		  	var comm = m.find('textarea[name*="message"]').val();			
					
		       var ct_site_id = '60229';
        var ct_sub = 'Заявка с ' + location.hostname;
        var ct_data = {  
		fio: fio,
		     phoneNumber: ct_phone,  
			 subject: ct_sub,
			  comment: comm,
               email: mail,			  
			  requestUrl: location.href,
            sessionId: window.call_value
        };
        var ct_valid = !!ct_phone;
        console.log(ct_data,ct_valid);
        if (ct_valid){
            jQuery.ajax({  
              url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/'+ct_site_id+'/register/', 
              dataType: 'json', type: 'POST', data: ct_data, async: false
            }); 
        }
		 });
});