$(document).ready(function(){
    setupView();
});
/**
 * 
 */
function setupView(){
    $('#mainMenu').hide();
    $('#mainWindow').width("100%");
    

    $('#b_about').removeAttr("href");
    $('#b_about').click(function(){
        $('#mainMenu').hide();
    })
}
function assignButtons(){
    $('#about').click()
}