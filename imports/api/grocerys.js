import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

 

export const Grocerys = new Mongo.Collection('grocery');
export const LoginGrocery = new Mongo.Collection('logingrocery')
export const BuyMore = new Mongo.Collection('buymore');

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
    },
    'grocery.loginIn'(username){
        check(username, String);
        LoginGrocery.insert({
            username,
            accessDate: new Date()
        });
    },
    'buymore.insert'(_groceryID,username,iwantedMore){
        check(_groceryID, String);
        check(username, String);
        check(iwantedMore, Number);
        iwantedMore = iwantedMore === 0 ? 1: 0;
        BuyMore.upsert({groceryID : _groceryID},{
            $set: {
                groceryID: _groceryID,
                username: username,
                date: new Date(),
                activeWantedMore: iwantedMore 
            }
        },
        function(error, linesAffect){console.log(error); console.log(linesAffect);});        
    }
});

