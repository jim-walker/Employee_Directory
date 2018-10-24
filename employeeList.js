const resetInputs = function(){
  $('#inputRow').addClass('d-none');
  $('#nameInput').addClass('d-none');
  $('#officeInput').addClass('d-none');
  $('#phoneInput').addClass('d-none');
  $('#plusButton').addClass('d-none');
  $('#minusButton').addClass('d-none');
  $('#searchButton').addClass('d-none');
  $('#editButton').addClass('d-none');
  $('#listContent').addClass('d-none');
  $('#nameInput').val('');
  $('#officeInput').val('');
  $('#phoneInput').val('');
}
resetInputs();

const showAdd = function() {
  resetInputs();
  $('#nameInput').removeClass('d-none');
  $('#officeInput').removeClass('d-none');
  $('#phoneInput').removeClass('d-none');
  $('#plusButton').removeClass('d-none');
  $('#inputRow').removeClass('d-none');
}

const showSearch = function() {
  resetInputs();
  $('#nameInput').removeClass('d-none');
  $('#searchButton').removeClass('d-none');
  $('#inputRow').removeClass('d-none');
}
const showContent = function() {
  resetInputs();
  render();
  $('#listContent').removeClass('d-none');
}
const showDelete = function() {
  resetInputs();
  $('#nameInput').removeClass('d-none');
  $('#minusButton').removeClass('d-none');
  $('#inputRow').removeClass('d-none');
}
const showUpdate = function() {
  resetInputs();
  $('#nameInput').removeClass('d-none');
  $('#officeInput').removeClass('d-none');
  $('#phoneInput').removeClass('d-none');
  $('#editButton').removeClass('d-none');
  $('#inputRow').removeClass('d-none');
}

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
  name: 'Ty', officeNum: 211,
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
    $('.content').append(`
    <div class="card border-dark m-1 p-1">
      <div class="card-header">
        <p>Name: ${employeeList[i].name}</p>
        <div class="card-body">
          <p>Office: ${employeeList[i].officeNum}</p>
          <p>Phone: ${employeeList[i].phoneNum}</p>
    `);
  }
}

const addEmployee = function() {
  const addNameVal = $('#nameInput').val();
  const addOfficeVal = $('#officeInput').val();
  const addPhoneVal = $('#phoneInput').val();
  employeeList.push({"name":addNameVal,"officeNum":addOfficeVal,"phoneNum":addPhoneVal});
  render();
  $('#listContent').removeClass('d-none');
}

const updateEmployee = function() {
  const updateNameVal = $('#nameInput').val();
  const updateIndex = employeeList.findIndex((obj => obj.name == updateNameVal));
  employeeList[updateIndex].officeNum = $('#officeInput').val();
  employeeList[updateIndex].phoneNum = $('#phoneInput').val();
  render();
  $('#listContent').removeClass('d-none');
}

const deleteEmployee = function() {
  const deleteNameVal = $('#nameInput').val();
  const deleteIndex = employeeList.findIndex((obj => obj.name == deleteNameVal));
  employeeList.splice(deleteIndex, 1);
  render();
  $('#listContent').removeClass('d-none');
}
const verifyEmployee = function() {
  const searchNameVal = $('#nameInput').val();
  const searchIndex = employeeList.findIndex((obj => obj.name == searchNameVal));
  $('.content').empty();
  if (searchIndex > -1) {
    $('.content').append(`<p>Yes</p>`);
  } else {
    $('.content').append(`<p>No</p>`);
  }
  $('#listContent').removeClass('d-none');
}

$('#viewButton').on('click', showContent);
$('#addButton').on('click', showAdd);
$('#deleteButton').on('click', showDelete);
$('#updateButton').on('click', showUpdate);
$('#verifyButton').on('click', showSearch);
$('#plusButton').on('click', addEmployee);
$('#minusButton').on('click', deleteEmployee);
$('#searchButton').on('click', verifyEmployee);
$('#editButton').on('click', updateEmployee);
