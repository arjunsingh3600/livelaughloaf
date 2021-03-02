$(document).ready(function() {

    var listItems = $(".word");
    console.log(listItems);

    function change_word (element,new_word){
        const anim_sp= 300;

        
       var old_word = element.children(":first");
  
       old_word.slideToggle(anim_sp,function(){
           old_word.text(new_word);
           old_word.slideToggle(anim_sp);
       });

    }

 

    var handleClick = function(event){  
        
        var new_word ;
        

        $.get( window.location+ 'word', function(data) {
            if(data.statusCode==200){
                
                 new_word = data.body.slice(2,-2);
                  
                 
                 
            }

        }).done(()=>{
            console.log(new_word);
            change_word($(this),new_word);
        });

        
        



    };

    listItems.on( 'click', handleClick);


    
});