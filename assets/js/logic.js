//Adding a toggle switch to the landing page and blog page
let lightColor = 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)';
let darkColor = 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)';

const toggleSwitch = document.querySelector("#toggle");

toggleSwitch.addEventListener('change', function(event){
    event.preventDefault();

    if(toggle.checked) {
        //console.log(toggle.checked)        
        document.querySelector('body > div').style.background = darkColor;
    } else {
    document.querySelector('body > div').style.background = lightColor;
}
});