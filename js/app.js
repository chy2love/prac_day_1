const arr = [
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
const checkboxAll = document.getElementById('allCheckbox');
const submitBtn = document.getElementById('submitButton');
let everyCheckbox;

function paintDocument(arr) {
  for (let item of arr) {
    const infoListEl = document.createElement('li');
    const infoLabel = document.createElement('label');
    const infoCheckbox = document.createElement('input');
    infoLabel.innerText = item.name;
    infoLabel.setAttribute('for', item.name);
    infoCheckbox.value = item.value;
    infoCheckbox.type = 'checkbox';
    infoCheckbox.className = 'indiv-checkbox';
    infoCheckbox.id = item.name;

    infoList.appendChild(infoListEl);
    infoListEl.appendChild(infoCheckbox);
    infoListEl.appendChild(infoLabel);
  }

  everyCheckbox = document.querySelectorAll('.indiv-checkbox');

  for (let item of everyCheckbox) {
    item.addEventListener('change', singleCheckbox);
  }
}

function singleCheckbox() {
  let count = 0;
  everyCheckbox.forEach((item) => {
    count = item.checked ? count + 1 : count;
  });
  checkboxAll.checked = count === arr.length;
}

function onClickAllCheck(event) {
  everyCheckbox.forEach((item) => {
    item.checked = event.target.checked;
  });
}

function handleSubmit() {
  let value = [];
  let resultText = '';

  for (let item of everyCheckbox) {
    if (item.checked) {
      value.push({ name: item.id, value: item.value });
      resultText += `한국어로는 ${item.id} 영어로는 ${item.value} \n`;
    }
  }

  const result = document.getElementById('result');
  result.innerText = resultText;
  console.log(value);
}
submitBtn.addEventListener('click', handleSubmit);
checkboxAll.addEventListener('change', onClickAllCheck);
document.addEventListener('DOMContentLoaded', function () {
  paintDocument(arr);
});
