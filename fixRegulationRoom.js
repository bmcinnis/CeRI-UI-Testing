window.onload=function (){
    initFix();
};
var initFix = function(){
    $("[src]").each(function(){
        if(!$(this).attr('src').match("^http://regulationroom.org.*")){
              var val = $(this).attr('src')
              $(this).attr({'src':'http://regulationroom.org/'+val})
        }
    });

    $("[href]").each(function(){
         if(!$(this).attr('href').match("^http://regulationroom.org.*")){
               var val = $(this).attr('href')
               $(this).attr({'href':'http://regulationroom.org/'+val})
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
         $(this).on('click',function(){
                $(this).hide('slow');
            });
    });
    
    //$(".subtopic_title").css('background-color','#b31b1b');
    
    var topics = [{'type':'1','title':"Turkers’ rights and responsibilities",'comments':49},
                  {'type':'2','title':'Payment','comments':12},
                  {'type':'3','title':'Providers/requesters relationships','comments':55},
                  {'type':'4','title':"AMT’s role in mediating the provider/requester relationships",'comments':91}];

    $(".subtopic-details div.subtopic_title").each(function(i, elem){
            if (topics.length<=i) {
                $(this).remove();
            }else{
                $(elem).html('<span class="ui-icon ui-icon-triangle-"'+i+'"-e"></span>'+topics[i]["type"]+'<span class="separator">|</span>'+topics[i]["title"]+'   --   <span data-type="comment-count-subtopic">'+topics[i]["comments"]+'</span><span class="subtopic_comments_dialog"></span>');                        
            }
        });

    var body = [{'comment':{'num':2},'text':{'title':"Turkers’ rights and responsibilities",'content':"<p><span style='text-decoration: underline;'>Registering on the site as a Provider</span></p><p>You may only register once with Mechanical Turk as a Provider.  You will not use robots, scripts or other automated methods to complete the Services.</p><em>What are the implications of allowing only one account and not allowing work automation?</em><p><span style='text-decoration: underline;'>Complying with laws, including tax laws</span></p><p>You will not represent yourself as an employee or agent of AMT. You are responsible for, and have and will, comply with all applicable laws and registration requirements, including those applicable to independent contractors and maximum working hours regulations.</p><p>You agree that it is your responsibility to determine any and all taxes in connection with any performance of Services, and to be responsible for the collection and payment of any and all taxes. You agree that AMT is not obligated to determine whether taxes apply and are not responsible to collect, report, or remit taxes arising from any transaction.</p><em>Who should be responsible for complying with applicable laws, maximum working hours regulations, and tax regulations?</em>"}},
                  {'comment':{'num':9},'text':{'title':'Payment','content':"<p><span style='text-decoration: underline;'>Paying for Providers' work</span></p><p>Upon completion of Services to Requesters' reasonable satisfaction, Requesters must pay Providers for their Services. Requester payments are received by AMT on behalf of Providers. AMT will process all payments made by Requesters to Providers. Requesters agree that upon approval of the Services performed by a Provider, payment will be remitted to the Provider automatically. After the Requester has approved the applicable Services, they are not entitled to any refund of their payment for such Services. If a Requester is not reasonably satisfied with the Services, the Requester may reject the Services.</p><em>How should the amount of payment for work on a HIT be determined?</em><em>What should the approval process be for the Services completed by Providers?</em><p><span style='text-decoration: underline;'>Providers using their pay</span></p><p>Providers may disburse funds from their Payment Account by the following methods, at their option: (i) to an ACH-Enabled Bank Account in U.S. dollars; (ii) or by converting such funds to a credit that is held for the benefit of Provider in an Amazon.com gift certificate account. Providers may not share a bank account.</p><em>What could be other methods of using funds from Providers Payment Accounts?</em><p><span style='text-decoration: underline;'>Controlling or limiting Providers' payments</span></p><p>We reserve the right to terminate or suspend any Payment Account, or to delay the transfer or disbursement of any amounts in our sole discretion, if we believe that a Provider is in violation of the Participation Agreement. We reserve the right to restrict the transfer to Providers of any amounts for such time as we reasonable deem necessary to protect us or others: (a) if we are subject to financial risk, (b) if Provider has violated any term of the Participation Agreement or the AMT Policies, or (c) if any dispute exists involving Provider's Payment Account or involving the Services provided by Provider. Further, we reserve the right to restrict the transfer to Providers of any amounts for up to ten (10) Business Days following Requester's acceptance of the Services provided by Provider. Other than a credit to a Provider's Payment Account for Services rendered by such Provider, amounts held in Payment Accounts cannot be transferred to other Requesters or Providers.</p><em>Under what circumstances could AMT restrict or delay payments to Providers?</em>"}},
                  {'comment':{'num':10},'text':{'title':'Providers/requesters relationships','content':"<p><span style='text-decoration: underline;'>Providers are not Requesters' employees</span></p><p>There is no association, joint venture, partnership or franchise, employer/employee relationship between Providers and Requesters. When performing Services for Requesters, a Provider is considered an independent contractor and not an employee of the Requester. Providers are not entitled to any of the benefits that a Requester may make available to its employees, such as vacation pay, sick leave, insurance programs, including group health insurance or retirement benefits. Providers are not eligible to recover worker's compensation benefits in the event of injury. The Participation Agreement states that repeated and frequent performance of Services by the same Provider on the Requester's behalf could result in reclassification of employment status of the Requester.</p><em>When should Providers be treated as employees or as independent contractors?</em><em>What are additional implications of being or not being considered an employee?</em><p><span style='text-decoration: underline;'>Ownership of Providers' work</span></p><p>As a Provider, the Requester for whom you provide Services is your client, and as such, you agree that the work product of any Services you perform is deemed a 'work made for hire' for the benefit of the Requester, and all ownership rights, including worldwide intellectual property rights, will vest with the Requester immediately upon your performance of the Service. Providers exclusively grant (without the right to any compensation) all right, title and interest, including all intellectual property rights, to such work product to the Requester. If the Services do not meet the Requester's reasonable satisfaction, the Requester may reject the Services and repost the specific request.</p><em>What are the implications of granting exclusive rights of the Provider's work to the Requester?</em><p><span style='text-decoration: underline;'>Connections outside the www.mturk.com site</span></p><p>You will provide Requesters for whom you perform Services with any information reasonably requested by them in connection your performance of such Services. If Requesters receive any personal information of a Provider who has performed Services for them, such information may only be used as necessary for them to comply with applicable laws and for no other purpose whatsoever. Providers should submit all work product through the www.mturk.com site only, and not directly to a Requester. Requesters agree that they will only accept work product from Providers that has been submitted through the Site.</p><em>When should there be a connection between providers and requesters outside of the AMT site?</em>"}},
                  {'comment':{'num':3},'text':{'title':"AMT’s role in mediating the provider/requester relationships",'content':"<p><span style='text-decoration: underline;'>AMT is not involved in Provider/Requester relationships</span></p><p>AMT provides a venue for third-party Requesters and third-party Providers to enter into and complete transactions. AMT is not involved in the transactions between Requesters and Providers. As a result, AMT has no control over the quality, safety, or legality of the Services, the ability of Providers to provide the Services to Requesters' satisfaction, or the ability of Requesters to pay for Services. AMT is not responsible for the actions of any Requester or Provider. AMT does not conduct any screening or other verification with respect to Requesters or Providers, nor does AMT provide any recommendations. As a Requester or a Provider, you use the www.mturk.com site at your own risk.</p><p>Because AMT is not involved in the actual transaction between Providers and Requesters, AMT will not be involved in resolving any disputes between participants related to or arising out of the Services or any transaction.</p><em>When should AMT be responsible for the quality of or for payment for the work being completed by Providers?</em><em>When should AMT be involved in Provider-Requester dispute resolution?</em><p><span style='text-decoration: underline;'>Disclosing Provider’s information to Requesters</span></p><p>AMT may disclose to Requesters a Provider’s name, address, data on HITs the Provider has completed, and Provider Tax Information. 'Provider Tax Information' means tax identification information of Providers, such as a Social Security Number or Employer Identification Number.</p><em>When is it okay for AMT to disclose Providers’ names, address, and SSN to Requesters?</em>"}}];

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
        append_to.prepend(comment);
                
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
            var d = new Date();
            var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            var dayTime = d.getHours();
            var amPm = "AM";
            if(dayTime>12){
                dayTime = dayTime - 12;
                amPm = "PM"
            }
            commentWrench($('<div class="comment"><div class="attribution"><div class="submitted"><p class="commenter-name"><a class="username">###-USER-###</a></p><p class="comment-time">###-TIME-###</p></div><div class="comment-extra"><p class="comment-number">###-NUMBER-###</p></div></div><div class="comment-text">    <div class="comment-arrow"></div>    <div class="field field-name-comment-body field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p>###-COMMENT-###</p></div></div></div> <!-- /.content --></div> <!-- /.comment-text --><ul class="links inline"><li class="comment-share first"><a href="http://www.addthis.com/bookmark.php?v=300&amp;pubid=ra-51fbc0211f6a0203" addthis:url="http://regulationroom.org/rules/consumer-debt-collection-practices/discussion/unlawful-collection-practices#cid-427" class="addthis_button_expanded at300m" title="Share this comment" data-rr-event="click" data-rr-event_name="share comment" data-rr-event_entity-type="comment" data-rr-event_entity-id="427" target="_blank"><span>Share</span></a></li><li class="endorsement-counter"></li><li class="comment-endorse"><a title="Endorse a comment that does a good job of making a good point.">Endorse</a></li><li class="comment-reply last"><a>Reply</a></li></ul>  </div>'),
                          $(this).closest('.subtopic_body').find(".subtopic_comments .comments-container"),
                          {'user':'Brian',
                            'number':'77',
                            'date':dayTime+":"+d.getMinutes()+" "+amPm+"    "+month[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear(),
                            'message':'<p>'+$(this).closest(".comment-form").find("textarea").val()+'</p>'});
            $(this).closest(".comment-form").find("textarea").val("");
        });
    
}