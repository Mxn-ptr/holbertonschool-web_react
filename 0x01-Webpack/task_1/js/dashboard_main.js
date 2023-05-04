import $ from 'jquery';
import lodash from 'lodash';

let count = 0;

const updateCounter = () => {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
  $('button').on('click', lodash.debounce(updateCounter));
})

