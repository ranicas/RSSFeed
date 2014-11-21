NewsReader.Models.Entry = Backbone.Model.extend({  
  parse: function (resp) {
    if (resp.json) {
      var regex = /img.*\....\\/;
      var str = resp.json.match(regex)
      if (str) {
        var str = str[0];
        var regex2 = /http.*\..../;
        this.img = str.match(regex2)[0];
      }
      
    }

    return resp;
  }
});
