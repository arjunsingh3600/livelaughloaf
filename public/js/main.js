$(document).ready(function() {


    var listItems = $(".word");
    var wrapper = $(".word-wrapper");

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
        event.stopPropagation();    
        
       if ( $(this).hasClass('word') ){
           console.log(event.target)

        $.get( window.location+ 'word', function(data) {
           

    
            if(data.statusCode==200){
                
                 new_word = data.body;
                  
                 
                 
            }

        }).done(()=>{
            console.log(new_word);
            change_word($(this),new_word);
        });

       }

        

        
        



    };

    var handleClickWrapper = function(event){  
        
        var new_word ;
        event.stopPropagation();    
        
       if ( $(this).hasClass('word-wrapper') ){



           $.get( window.location+ 'wordAll', function(data) {
           

    
            if(data.statusCode==200){
                
                 new_word = data.body;
                  
                 
                 
            }

        }).done(()=>{
            var index =0;
            $(this).children().each(function()
            {
                change_word($(this),new_word[index++]);
               
            }
            );
            
          
            
        });

       }


       };
        

        
        





    listItems.on( 'click', handleClick);

    wrapper.on( 'click', handleClickWrapper);




    
});