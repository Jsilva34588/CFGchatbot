(function() {
  var NYLM, claerResizeScroll, conf, getRandomInt, insertI, lol;

  conf = {
    cursorcolor: "#696c75",
    cursorwidth: "4px",
    cursorborder: "none"
  };

  lol = {
    cursorcolor: "#cdd2d6",
    cursorwidth: "4px",
    cursorborder: "none"
  };

  NYLM = ["Hello there I can see you on your coding course","You look amazing","yes","I want to move in to tech","Jay is the man!","KPMG havea nice building ","Dont you ever feel like a plastic bag...","one day I will learn to code something better than this chat",")","We cant speak anymore","","roses are red violets are blue. I need to go to sleep ","Cake","What is it good for absolutely nothing"];

  getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  claerResizeScroll = function() {
    $("#texxt").val("");
    $(".messages").getNiceScroll(0).resize();
    return $(".messages").getNiceScroll(0).doScrollTop(999999, 999);
  };
  get_message= function (){
  return NYLM[getRandomInt(0, NYLM.length - 1)]
  }
  insertI = function() {
    var innerText, otvet;
    innerText = $.trim($("#texxt").val());
    if (innerText !== "") {
      $(".messages").append("<li class=\"i\"><div class=\"head\"><span class=\"time\">"
      + (new Date().getHours()) + ":" + (new Date().getMinutes())
      + " AM, Today</span><span class=\"name\">Tim</span></div><div class=\"message\">"
      + innerText + "</div></li>");
      claerResizeScroll();
      return otvet = setInterval(function() {
        $(".messages").append("<li class=\"friend-with-a-SVAGina\"><div class=\"head\"><span class=\"name\">Sam</span><span class=\"time\">"
        + (new Date().getHours()) + ":" + (new Date().getMinutes())
        + " AM, Today</span></div><div class=\"message\">" + get_message() + "</div></li>");
        claerResizeScroll();
        return clearInterval(otvet);
      }, getRandomInt(2500, 500));
    }
  };

  $(document).ready(function() {
    $(".list-friends").niceScroll(conf);
    $(".messages").niceScroll(lol);
    $("#texxt").keypress(function(e) {
      if (e.keyCode === 13) {
        insertI();
        return false;
      }
    });
    return $(".send").click(function() {
      return insertI();
    });
  });

}).call(this);
