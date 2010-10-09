======
Fotki Plugin (http://fotki.yandex.ru)
======

Galleria comes with a flickr plugin that can be used to fetch images from fotki.yandex and display them in your Galleria gallery.

Example usage
=============

**note:** You must include the Fotki.Yandex plugin script at ``src/plugins/galleria.yafotki.js`` to use this plugin.


    var user = 'ya2bj';
    var fotki = new Galleria.Fotki(user);

    fotki.getAllPhotos(function(data) {
        $('#galleria').galleria({
            data_source: data
        });
    });
    
