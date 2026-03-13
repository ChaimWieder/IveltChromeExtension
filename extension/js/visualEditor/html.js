function fromHTMLs() {

    window.senky_simplewysiwyg_lang = "yi";
    //console.log("senky_simplewysiwyg_lang:", senky_simplewysiwyg_lang);

    window.senky_simplewysiwyg_quote = true;
    //console.log("senky_simplewysiwyg_quote:", senky_simplewysiwyg_quote);

    window.senky_simplewysiwyg_img = true;
    //console.log("senky_simplewysiwyg_img:", senky_simplewysiwyg_img);

    window.senky_simplewysiwyg_url = true;
    //console.log("senky_simplewysiwyg_url:", senky_simplewysiwyg_url);

    window.senky_simplewysiwyg_fontSize_sizes = "Tiny/50%;Small/85%;Normal/100%;Large/150%;Huge/200%;";
    //console.log("senky_simplewysiwyg_fontSize_sizes:", senky_simplewysiwyg_fontSize_sizes);

    window.senky_simplewysiwyg_smiley_images = [];
    //console.log("senky_simplewysiwyg_smiley_images:", senky_simplewysiwyg_smiley_images);

    window.senky_simplewysiwyg_smiley_descriptions = [];
    //console.log("senky_simplewysiwyg_smiley_descriptions:", senky_simplewysiwyg_smiley_descriptions);

    window.senky_simplewysiwyg_smiley_path = "/forum/images/smilies/";
    //console.log("senky_simplewysiwyg_smiley_path:", senky_simplewysiwyg_smiley_path);


    jQuery(function ($) {
        // insert smiley into CKEditor
        $('.inner a[href="#"]').on('click', function () {
            var img = $(this).find('img');

            if (opener.senky_simplewysiwyg_editor.mode == 'source') {
                var sourceTextarea = opener.senky_simplewysiwyg_editor.container.$.querySelector('.cke_source');
                var caretPos = sourceTextarea.selectionStart;
                var value = sourceTextarea.value;

                sourceTextarea.value = value.substring(0, caretPos) + ' ' + img.attr('alt') + ' ' + value.substring(caretPos);
            } else {
                opener.senky_simplewysiwyg_editor.insertElement(opener.senky_simplewysiwyg_editor.document.createElement('img', {
                    attributes: {
                        src: img.attr('src'),
                        'data-cke-saved-src': img.attr('src'),
                        title: img.attr('title'),
                        alt: img.attr('alt'),
                        width: img.attr('width'),
                        height: img.attr('height')
                    }
                }));
            }
        });
    });

}
if (document.getElementById("iveltHelperSettings").getAttribute('data-visual-editor') === 'true') {
  console.log("Visual editor enabled, loading script 1...");
  fromHTMLs();
}


