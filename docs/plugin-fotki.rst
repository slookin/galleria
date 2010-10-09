======
Fotki Plugin (http://fotki.yandex.ru)
======


Example usage
=============

**note:** You must include the Fotki plugin script at ``src/plugins/galleria.fotki.js`` to use this plugin.


    var user = 'ya2bj';
    var fotki = new Galleria.Fotki(user);

    fotki.getAllPhotos(function(data) {
        $('#galleria').galleria({
            data_source: data
        });
    });
    
