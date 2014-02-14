window.onload=function (){
    initFix();
};
var initFix = function(){
    $("[src]").each(function(){
        if(!$(this).attr('src').match("^http://regulationroom.org.*")){
              var val = $(this).attr('src')
              $(this).attr({'src':'http://regulationroom.org'+val})
        }
    });

    $("[href]").each(function(){
         if(!$(this).attr('href').match("^http://regulationroom.org.*")){
               var val = $(this).attr('href')
               $(this).attr({'href':'http://regulationroom.org'+val})
         }
    });
    
    $("script[src*='/custom/regroom/']").remove();
    $("script[src*='googleapis.com']").remove();
    $("script[src*='drupal']").remove();
    $("script[src*='addthis.com']").remove();
    $("script[src*='ajax_comments']").remove();
    $("[type=hidden]").remove();
    
    
    $("label[for='edit-comment-body-und-0-value']").text("Leave some gosh darn stinking comment already!");    
    
    $(".comments-form-container label").each(function(){
         $(this).text("Pretty, pretty please leave a nice comment")
    });
    
    //$(".subtopic_title").css('background-color','#b31b1b');
    
    var topics = [{'type':'A','title':'Something 1','comments':49},
                  {'type':'B','title':'Get to know eachother','comments':12},
                  {'type':'C','title':'I will cut back to ten hours a week','comments':55},
                  {'type':'D','title':'Cant believe I got them back together','comments':91},
                  {'type':'E','title':'Wild goose chase','comments':32}];

    $(".subtopic-details div.subtopic_title").each(function(i, elem){
            if (topics.length<=i) {
                $(this).remove();
            }else{
                $(elem).html('<span class="ui-icon ui-icon-triangle-"'+i+'"-e"></span>'+topics[i]["type"]+'<span class="separator">|</span>'+topics[i]["title"]+'   --   <span data-type="comment-count-subtopic">'+topics[i]["comments"]+'</span><span class="subtopic_comments_dialog"></span>');                        
            }
        });

    var body = [{'comment':{'num':2},'text':{'title':'Something 1','content':'<p>Content</p>'}},
                  {'comment':{'num':9},'text':{'title':'Get to know eachother','content':'<p>Content</p>'}},
                  {'comment':{'num':10},'text':{'title':'I will cut back to ten hours a week','content':'<p>Content</p>'}},
                  {'comment':{'num':3},'text':{'title':'Cant believe I got them back together','content':'<p>Content</p>'}},
                  {'comment':{'num':7},'text':{'title':'Wild goose chase','content':'<p>Content</p>'}}];

    var comment_model = "";
    
    function commentWrench(comment,append_to,comment_data){

        //alert(append_to.closest('.subtopic_body').find('.subtopic_text h3').text());
        //alert(comment.html());

        comment.removeAttr("id");
        comment.find(".username").text(comment_data['user']);

        var currentdate = new Date();        
        var datetime = "Last Comment: " + currentdate.getDate() + "/"
                        + (currentdate.getMonth()+1)  + "/" 
                        + currentdate.getFullYear() + " @ "  
                        + currentdate.getHours() + ":"  
                        + currentdate.getMinutes() + ":" 
                        + currentdate.getSeconds();
        comment.find(".comment-time").text(comment_data['date']);
        comment.find(".comment-number").text(comment_data['number']);
        comment.find("div.field-items div.field-item").html(comment_data['message']);                        
        
        //alert(append_to.attr('class'));        
        append_to.append(comment);
        
    };

    
    var comment, comment_data, append_to = "";
    comment_data = {'user':'Brian',
                    'number':'77',
                    'date':'March 23, 1984',
                    'message':'<p>Attempting to do something cool</p>'};
    
    $(".subtopic-details div.subtopic_body").each(function(i, elem){
            if (body.length<=i) {
                $(this).remove();
            }else{
                $(elem).find("div.subtopic_text").html('<h3>'+body[i]['text']['title']+'</h3>'+body[i]['text']['content']);

                comments = [];
                for(var n = 0; n<body[i]['comment']['num']; n++){
                    comments.push(n);
                }

                $(elem).find(".subtopic_comments").find(".comments-container").removeAttr('data-truncate-limit');
                $(elem).find(".subtopic_comments").find(".comments-wrapper").removeAttr('data-rr-event_entity-id');
                comment_model = $(elem).find(".subtopic_comments").find(".ajax-comment-wrapper").clone().wrap('<div>').parent().html();

                $(elem).find(".subtopic_comments").find(".ajax-comment-wrapper").remove();
                
                //comment = $(comment_model);
                comment = $('<div class="comment"><div class="attribution"><div class="submitted"><p class="commenter-name"><a class="username">###-USER-###</a></p><p class="comment-time">###-TIME-###</p></div><div class="comment-extra"><p class="comment-number">###-NUMBER-###</p></div></div><div class="comment-text">    <div class="comment-arrow"></div>    <div class="field field-name-comment-body field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>###-COMMENT-###</p></div></div></div> <!-- /.content --></div> <!-- /.comment-text --><ul class="links inline"><li class="comment-share first"><a href="http://www.addthis.com/bookmark.php?v=300&amp;pubid=ra-51fbc0211f6a0203" addthis:url="http://regulationroom.org/rules/consumer-debt-collection-practices/discussion/unlawful-collection-practices#cid-427" class="addthis_button_expanded at300m" title="Share this comment" data-rr-event="click" data-rr-event_name="share comment" data-rr-event_entity-type="comment" data-rr-event_entity-id="427" target="_blank"><span>Share</span></a></li><li class="endorsement-counter"></li><li class="comment-endorse"><a title="Endorse a comment that does a good job of making a good point.">Endorse</a></li><li class="comment-reply last"><a>Reply</a></li></ul>  </div>');
                append_to = $(elem).find(".subtopic_comments .comments-container");
                comment_data['number'] = i;
                
                //$(elem).find(".subtopic_comments .comments-wrapper").find(".comments-container").remove();
                //$(elem).find(".subtopic_comments .comments-wrapper").append("<div class='comments-container' style='height:409px;width:auto;'></div>")

                commentWrench(comment,
                              append_to,
                              comment_data);
                                
                $(elem).find(".form-textarea-wrapper").html("<textarea></textarea><div class='grippie'></div>");
                $(elem).find(".form-actions input").remove();
                $(elem).find(".form-actions").append("<input class='form-submit' value='Comment'></input><input value='Cancel' class='form-submit cancel-comment'></input>");
                $(elem).find(".form-actions").find("input[value='Comment']").css({'height':'19px',
                                                                                 'width':'69px',
                                                                                 'cursor':'pointer',
                                                                                '-webkit-touch-callout': 'none',
                                                                                '-webkit-user-select': 'none',
                                                                                '-khtml-user-select': 'none',
                                                                                '-moz-user-select': 'none',
                                                                                '-ms-user-select': 'none',
                                                                                'user-select': 'none'});

                $(elem).find(".form-actions").find("input[value='Cancel']").css({'height':'19px',
                                                                                'width':'45px',
                                                                                'cursor':'pointer',
                                                                                '-webkit-touch-callout': 'none',
                                                                                '-webkit-user-select': 'none',
                                                                                '-khtml-user-select': 'none',
                                                                                '-moz-user-select': 'none',
                                                                                '-ms-user-select': 'none',
                                                                                'user-select': 'none'});
                
/*                
                $(elem).find(".subtopic_comments .ajax-comment-wrapper").each(function(j, comm){
                    if (comments.length<=j) {
                        $(comm).remove();
                    }else{
                        $(comm).find(".username").text("Dima!");
                        var currentdate = new Date(); 
                        var datetime = "Last comment: " + currentdate.getDate() + "/"
                                        + (currentdate.getMonth()+1)  + "/" 
                                        + currentdate.getFullYear() + " @ "  
                                        + currentdate.getHours() + ":"  
                                        + currentdate.getMinutes() + ":" 
                                        + currentdate.getSeconds();
                        $(comm).find(".comment-time").text(datetime);
                        $(comm).find(".comment-number").text(j);
                        $(comm).find("div.field-items div.field-item").html("<p>I love Ithaca and I am sad to be leaving, but am excited about Mechanical Turk!!</p>");                        
                    }
                });
*/  
            }
        });        
                 
    $(document).on('focus','textarea',function(event){
            $(this).closest(".form-item").find("label").hide("fast");
        });

    $(document).on('blur','textarea',function(event){
            if ($(this).val()=="") {
                $(this).closest(".form-item").find("label").show("fast");
            }
        });
        
        
    $(document).on('click','input[value="Comment"]',function(event){
            event.preventDefault();
            commentWrench(comment,
                          $(this).closest('.subtopic_body').find(".subtopic_comments .comments-container"),
                          {'user':'Brian',
                            'number':'77',
                            'date':'March 23, 1984',
                            'message':'<p>'+$(this).closest(".comment-form").find("textarea").val()+'</p>'});
        });
    
}