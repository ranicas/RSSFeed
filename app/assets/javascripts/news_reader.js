window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {  
    new NewsReader.Routers.Router({
      $rootEl: $('#content'),
      $showEl: $('#feed-detail')
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});