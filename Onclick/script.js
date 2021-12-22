function progressbar()
{
    let progress_bar = document.querySelector('.progress_bar');
    let clickbutton = document.querySelector('.progress_bar_container .button .click');
    let resetbutton = document.querySelector('.progress_bar_container .button .reset');
    let elemRect = progress_bar.getBoundingClientRect();
    let width = elemRect.width;
    clickbutton.addEventListener("click", () =>
    {
       if(progress_bar.style.width != '100%')
       { 
            console.log('width != 100');
            width = width + 20;
            progress_bar.style.width = width + '%';
            if(progress_bar.style.width == '100%')
            {
                console.log('width == 100');
                width = 0;   
            }
       }   
       else
            alert("Already 100%");         
    });
    resetbutton.addEventListener("click", () =>
    {          
        if(progress_bar.style.width != '0%')
        {
            width = 0;     
            progress_bar.style.width = '0%';
        }      
        else
            alert("Already in Reset state");
    });
    
}
progressbar();