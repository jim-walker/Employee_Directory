
const showAdd = function() {
  $('#addEmployee').show();
}
const showSearch = function() {
  $('#searchEmployee').show();
}
const showContent = function() {
  $('#listContent').show();
}
const hideAdd = function() {
  $('#addEmployee').hide();
}
const hideSearch = function() {
  $('#searchEmployee').hide();
}
const hideContent = function() {
  $('#listContent').hide();
}

hideAdd();
hideSearch();
hideContent();

const employeeList = [{
  name: 'Jan',
  officeNum: 1,
  phoneNum: '222-222-2222'
},
{
  name: 'Juan',
  officeNum: 304,
  phoneNum: '489-789-8789'
},
{
  name: 'Margie',
  officeNum: 789,
  phoneNum: '789-789-7897'
},
{
  name: 'Sara',
  officeNum: 32,
  phoneNum: '222-789-4654'
},
{
  name: 'Tyrell',
  officeNum: 3,
  phoneNum: '566-621-0452'
},
{
  name: 'Tasha',
  officeNum: 213,
  phoneNum: '789-766-5675'
},
{
  name: 'Ty',
  officeNum: 211,
  phoneNum: '789-766-7865'
},
{
  name: 'Sarah',
  officeNum: 345,
  phoneNum: '222-789-5231'
}
];

const render = function() {
  $('.content').empty();

  for( let i = 0; i < employeeList.length; i++ ) {
    $('.content').append(`<div class="card">`);
    $('.content').append(`<p>${employeeList[i].name}</p>`);
    $('.content').append(`<p>${employeeList[i].officeNum}</p>`);
    $('.content').append(`<p>${employeeList[i].phoneNum}</p>`);
    $('.content').append(`</div>`);
  }
}
render();

$('#viewButton').on('click', showContent);
$('#addButton').on('click', showAdd);
$('#verifyButton').on('click', showSearch);
