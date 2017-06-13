
    function success_alert(msg) {
      var item = $('<div class="notification success"><span>' + msg + '</span></div>');
      $("#toastem").append($(item));
      $(item).animate({"right": "12px"}, "fast");
      setInterval(function () {
        $(item).animate({"right": "-400px"}, function () {
          $(item).remove();
        });
      }, 4000);
    }


    function danger_alert(msg) {
      var item1 = $('<div class="notification error"><span>' + msg + '</span></div>');
      $("#toastem").append($(item1));
      $(item1).animate({"right": "12px"}, "fast");
      setInterval(function () {
        $(item1).animate({"right": "-400px"}, function () {
          $(item1).remove();
        });
      }, 4000);
    }


    function info_alert(msg) {
      var item2 = $('<div class="notification info"><span>' + msg + '</span></div>');
      $("#toastem").append($(item2));
      $(item2).animate({"right": "12px"}, "fast");
      setInterval(function () {
        $(item2).animate({"right": "-400px"}, function () {
          $(item2).remove();
        });
      }, 4000);
    }
        function normal_alert(msg) {
      var item2 = $('<div class="notification normal"><span>' + msg + '</span></div>');
      $("#toastem").append($(item2));
      $(item2).animate({"right": "12px"}, "fast");
      setInterval(function () {
        $(item2).animate({"right": "-400px"}, function () {
          $(item2).remove();
        });
      }, 4000);
    }