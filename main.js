document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById('header');
    var fontSize = 12
    var interval = null;

    // perperual color change
    setInterval(function() {
        el.style.color = el.style.color === 'red' ? 'blue' : 'red';            
    }, 500);

    // grow font until 200px
    function growFont() {
        interval = setInterval(function() {
            fontSize += 1;
            el.style.fontSize = fontSize + 'px';

            if (fontSize >= 200) {
                clearInterval(interval);
            }
        }, 50);

        return interval;
    }

    growFont()

    // reset the font back to 12px on click
    document.addEventListener('click', function() {
        clearInterval(interval);
        fontSize = 12;
        el.style.fontSize = fontSize + 'px';
        growFont()
    });
});