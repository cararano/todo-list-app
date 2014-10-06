$(document).ready(function() {
  // add a task
  $(document).on('click', '.add-task', function () {
    var task = $('.task-input').val();
    $('.task-list').append('<li class="task">' + task + '<span class="remove-task"> &times;</span></li>');
  });

  // remove a task
  $(document).on('click', '.remove-task', function () {
    $(this).parent('li').remove();
  });

});
