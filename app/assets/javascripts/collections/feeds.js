NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "api/feeds",
  
  model: NewsReader.Models.Feed,
  
  getOrFetch: function (id) {
    var feed = NewsReader.Collections.feeds.get(id);
    
    if (!feed) {
      feed = new NewsReader.Models.Feed({ id: id });
      feed.fetch();
      NewsReader.Collections.feeds.add(feed);
    } 
    
    return feed;
  }
});

NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();