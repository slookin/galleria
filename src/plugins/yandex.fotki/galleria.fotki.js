/*!
 * Galleria Fotki Plugin v 0.0.2
 * http://turgumbaev.com
 * http://look-in.net
 * http://fotki.yandex.ru
 * http://api.yandex.ru/fotki/
 *
 * Copyright 2010 - 
 * Licensed under the MIT license.
 */

/**
 * TODO:
 * - paging
 * - original link
 */
(function() {
  
var G = window.Galleria; 
if (typeof G == 'undefined') {
    return;
}

var F = G.Fotki = function(user, album) {
        if (!user) {
          G.raise('Pls, set user name');
        }

	/* yandex fotki API url */
	this.api_url = 'http://api-fotki.yandex.ru/api';

	this.user = user;
	/* Resource USER */
	this.user_url = this.api_url+'/users/' + user + '/';

	/* Resource ALBUM */
        this.album_url = this.user_url+'/album/';

	this.params = {
        format : 'json',
        callback : '?'
	};
};

F.prototype = {
    request: function(url, callback) {
		var params = [];
		$.each(this.params, function(key, value) {
			params.push(key + '=' +value);
		});
		url += params.join('&');
		$.getJSON(url, callback);
	},
     /* private method: parse answer from Yandex.Fotki and prepare data for Galleria */
     _prepareData: function(res){
		    var sizes = ['XL','L', 'M', 'S', 'XS', 'XXS', 'XXXS'];
		    var obj = [];
		    if (res.entries) {
		        var len = res.entries.length;
		        for (var i=0; i<len; i++) {
		            var photo = res.entries[i];
		            
                    var image = '';
                    //look max size
	            for (var j=0; j<sizes.length; j++ ) {
                      if (photo.img[sizes[j]]) {
                          image = photo.img[sizes[j]].href;
                          break;
                      }	                    
	             }
		            var item = {
        				thumb: photo.img.XXXS.href,
        				image: image,
        				title: photo.title
        			};
        			Array.prototype.push.call(obj, item);
		        }
		    }
		   return obj;
		},

     /* return all user photos */
     getAllPhotos: function(callback) {
		fotkiObj = this;  /* hack @TODO */
		this.request(this.user_url +'photos' + '/?', function(res)
		{
                   obj = fotkiObj._prepareData(res);
                   callback.call(this, obj);
		});
	},
     /*	 return photos from specific album */
     getAlbum: function(album,callback) {
		fotkiObj = this;
		this.request(this.album_url + album+'/' +'photos' + '/?', function(res)
		{
                   obj = fotkiObj._prepareData(res);
                   callback.call(this, obj);
		});
	},

}

})();