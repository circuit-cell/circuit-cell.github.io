$(document).ready(function() {
    $('.menu-link').bigSlide({
            menuWidth: '8em'
    });
    slidr.create('slidr-magnets', {
        breadcrumbs: true,
        overflow: true,
        touch: true,
        keyboard: true,
        pause: false,
        transition: 'cube'
}).add('h', ['one', 'two', 'three', 'four', 'five', 'one']).auto();
    slidr.create('slidr-electricity', {
        breadcrumbs: true,
        overflow: true,
        touch: true,
        keyboard: true,
        pause: false,
        transition: 'cube'
}).add('h', ['one', 'two', 'one']).auto();
    slidr.create('slidr-circuits', {
        breadcrumbs: true,
        overflow: true,
        touch: true,
        keyboard: true,
        pause: false,
        transition: 'cube'
}).add('h', ['one', 'two', 'three', 'one']).auto();

});