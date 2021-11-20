document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('form_input').forEach(function(input){
        input.addEventListener('input',function(){
            input.className=this.className.replace(/form_input--error ?/, "");
        })
    });
});
/*this javascript isn't working on the page..*/

