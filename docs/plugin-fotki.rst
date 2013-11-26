======
Fotki Plugin (http://fotki.yandex.ru)
======


Example usage
=============

Real work example http://2bj.github.com/galleria/demos/plugin-fotki.html

**note:** You must include the Fotki plugin script at ``src/plugins/galleria.fotki.js`` to use this plugin.


    var user = 'ya2bj';
    var fotki = new Galleria.Fotki(user);
    var album = 1234;

    fotki.getAlbum(album,function(data) {
        Galleria.run('.galleria', {
        dataSource: data
      });
    });


    
