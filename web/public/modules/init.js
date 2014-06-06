/// <reference path="../lib/headjs/dist/1.0.0/head.js" />


(function (options) {
    var application = {};

    application.options = options;

    


    if (options.load_depends == true) {
        console.log('loading depends');
        // JavaScript Libarires
        head.load('../public/lib/jquery/jquery.min.js');
        head.load('../public/lib/bootstrap/bootstrap.min.js');
        head.load('../public/lib/jstorage/jstorage.min.js');
        head.load('../public/lib/levelgraph/levelgraph.min.js');
        head.load('../public/lib/summernote/summernote.min.js',  function () {
               $('#summernote').summernote({
                height: 300,                 // set editor height

                minHeight: null,             // set minimum height of editor
                maxHeight: null,             // set maximum height of editor

                focus: true,                 // set focus to editable area after initializing summernote
            });
          });

        // Modules
        head.load('../public/modules/_client.js');
        

        head.ready(document, function() {
            console.log('init document editor');
            $('#summernote').summernote({
                height: 300,                 // set editor height

                minHeight: null,             // set minimum height of editor
                maxHeight: null,             // set maximum height of editor

                focus: true,                 // set focus to editable area after initializing summernote
            });
            console.log('init document editor - complete');
        });
    }

    // Verify State Machine
})({
    load_depends : true
});
