$(document).ready(function() {
  const listForums = document.querySelectorAll('div.forabg');
  if (listForums) {
  listForums.forEach((item, index) => {
    item.insertAdjacentHTML('beforebegin', '<div class="forum-event"><div class="col-span-forum col-span-forum-1"></div><div class="col-span-forum col-span-forum-2"></div><div class="col-span-forum col-span-forum-3 image_winter' + index + '"></div></div>');
  });
  } 
  const listTopicsSection = document.querySelectorAll('.forumbg');
    if (listTopicsSection) {
    listTopicsSection.forEach((item) => {
        item.insertAdjacentHTML('beforebegin', '<div class="forum-event"><div class="col-span-forum col-span-forum-1"></div><div class="col-span-forum col-span-forum-2"></div><div class="col-span-forum col-span-forum-3 image_winter-section"></div></div>');
  });
  }
  });
