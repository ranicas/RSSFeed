NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
      this.$rootEl = options.$rootEl,
      this.$showEl = options.$showEl
  },

  routes: {
    "": "index",
    "feeds/:id": "feedShow"
  },
  
  index: function () {
    NewsReader.Collections.feeds.fetch();
     
    var view = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.Collections.feeds
    });
    
    this.$rootEl.html(view.render().$el);
  },
  
  feedShow: function (id) {
    var feed = NewsReader.Collections.feeds.getOrFetch(id);
    feed.fetch();
    var view = new NewsReader.Views.FeedsShow({
      model: feed
    })
    
    this.$rootEl.html(view.render().$el);    
  }
});