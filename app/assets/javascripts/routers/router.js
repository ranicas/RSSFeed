NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
      this.$rootEl = options.$rootEl
  },

  routes: {
    "": "index"
  },
  
  index: function () {
    NewsReader.Collections.feeds.fetch();
     
    var view = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.Collections.feeds
    });
    
    this.$rootEl.html(view.render().$el);
  }
});
