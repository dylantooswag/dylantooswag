document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ['dayGrid'],
    events: [
      // You can add events dynamically here
    ],
    dateClick: function(info) {
      var date = info.dateStr;
      // Handle marking the date (e.g., change background color)
      info.dayEl.style.backgroundColor = 'green';
      // For a persistent solution, you'd need backend and storage
    }
  });

  calendar.render();
});
