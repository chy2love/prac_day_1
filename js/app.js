arr = [
  {
    name: '이름',
    value: 'memberName',
  },
  {
    name: '이메일',
    value: 'memberEmail',
  },
  {
    name: '휴대폰번호',
    value: 'memberContactNo',
  },
  {
    name: '생년월일',
    value: 'birthday',
  },
  {
    name: '비밀번호',
    value: 'password',
  },
];

const infoList = document.querySelector('.info-list');
const checkboxAll = document.createElement('input');
checkboxAll.type = 'checkbox';
checkboxAll.className = 'main-checkbox';
infoList.appendChild(checkboxAll);

function paintList(arr) {
  for (let item of arr) {
    const infoListEl = document.createElement('li');
    const infoSpan = document.createElement('span');
    const infoCheckbox = document.createElement('input');
    infoListEl.id = item.value;
    infoSpan.innerText = item.name;
    infoCheckbox.type = 'checkbox';
    infoCheckbox.className = 'indiv-checkbox';
    infoCheckbox.name = item.name;
    infoList.appendChild(infoListEl);
    infoListEl.appendChild(infoCheckbox);
    infoListEl.appendChild(infoSpan);
  }
  const indivCheckbox = document.querySelectorAll('.indiv-checkbox');
  for (let item of indivCheckbox) {
    item.addEventListener('change', singleCheckbox);
  }
}
function singleCheckbox(event) {
  console.log(event.target);
}
function handleMainCheckList(event) {
  const everyCheckbox = document.querySelectorAll('.indiv-checkbox');
  if (event.target.checked == true) {
    for (let item of everyCheckbox) {
      item.checked = true;
    }
  } else if (event.target.checked == false) {
    for (let item of everyCheckbox) {
      item.checked = false;
    }
  }
}

checkboxAll.addEventListener('change', handleMainCheckList);
document.addEventListener('DOMContentLoaded', function () {
  paintList(arr);
});
