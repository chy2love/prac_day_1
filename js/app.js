let arr = [
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
document.body.appendChild(checkboxAll);
const submitBtn = document.createElement('button');
infoList.appendChild(submitBtn);
submitBtn.innerText = '제출하기';
submitBtn.className = 'submit-button';
let checkCount = 0;

function paintList(arr) {
  for (let item of arr) {
    const infoListEl = document.createElement('li');
    const infoSpan = document.createElement('span');
    const infoCheckbox = document.createElement('input');
    infoListEl.id = item.value;
    infoSpan.innerText = item.name;
    infoCheckbox.value = item.name;
    infoCheckbox.type = 'checkbox';
    infoCheckbox.className = 'indiv-checkbox';
    infoCheckbox.name = 'content';
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
  if (event.target.checked == false) {
    checkboxAll.checked = false;
    checkCount -= 1;
  } else {
    checkCount += 1;
    if (checkCount == 5) {
      checkboxAll.checked = true;
    }
  }
}
function handleMainCheckList(event) {
  const everyCheckbox = document.querySelectorAll('.indiv-checkbox');
  if (event.target.checked == true) {
    for (let item of everyCheckbox) {
      item.checked = true;
      checkCount = 5;
    }
  } else if (event.target.checked == false) {
    for (let item of everyCheckbox) {
      item.checked = false;
      checkCount = 0;
    }
  }
}
function handleSubmit(event) {
  const everyCheckbox = document.querySelectorAll('.indiv-checkbox');
  let value = [];
  for (let item of everyCheckbox) {
    if (item.checked == true) {
      value.push(item.value);
    }
  }
  console.log(value);
}
submitBtn.addEventListener('click', handleSubmit);
checkboxAll.addEventListener('change', handleMainCheckList);
document.addEventListener('DOMContentLoaded', function () {
  paintList(arr);
});
