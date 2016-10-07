import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

 

export const Grocerys = new Mongo.Collection('grocery');

Meteor.methods({
    'grocerys.insert'(text,email) {
        check(text, String);
        check(email, String)
        //TODO add user validation

        Grocerys.insert({
                    text,
                    createdAt : new Date(),
                    user: email,
                    isDelete: false, 
                });

    },
    'grocerys.remove'(groceryID,email) {
        check(groceryID, String)
        check(email, String)
        Grocerys.update(groceryID,{
         $set: {isDelete: true, 
                user: email  
            },
       });
    },

    'grocerys.setChecked'(groceryID,setChecked){
        check(groceryID, String);
        check(setChecked, Boolean);
        Grocerys.update(groceryID,{
           $set: {checked: setChecked }, 
        });
    }

});

