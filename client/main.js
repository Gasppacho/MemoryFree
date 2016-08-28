import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Tickets = new Mongo.Collection("tickets"); 
Tickets.allow({ 
    insert: function(){ 
        return true; 
    }, 
    update: function(){ 
        return true; 
    }, 
    remove: function(){ 
        return true; 
    } 
});


Template.ticketAdd.helpers({ 
    create: function(){ 
         
    }, 
    rendered: function(){ 
         
    }, 
    destroyed: function(){ 
         
    }, 
}); 

Template.ticketAdd.events({ 
    "click #btnAddTicket": function(event, template){
        var textAreaContent = $('#inputTicketContent').val();
        if(textAreaContent != ""){
            Tickets.insert({
                text: textAreaContent
            });
            $('#inputTicketContent').val("");
        }
    } 
}); 


Template.ticketItem.helpers({ 
    create: function(){ 
         
    }, 
    rendered: function(){ 
         
    }, 
    destroyed: function(){ 
         
    }, 
    tickets: function(){
        return Tickets.find().fetch();
    }
}); 

Template.name.events({ 
    "click #foo": function(event, template){ 
         
    } 
}); 

