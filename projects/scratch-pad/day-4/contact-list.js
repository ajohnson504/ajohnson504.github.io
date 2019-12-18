// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//creating object literal to add object key/value pairs to. Function will return this object
let contactObject = {};
contactObject['id'] = id; 
contactObject['nameFirst'] = nameFirst; 
contactObject['nameLast'] = nameLast; 
return contactObject;

} 
function makeContactList() {
     
let contacts = []; //will hold our contacts

    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        
            },
        
        addContact: function(contactObject) { //will add contact to contact list
            contacts.push(contactObject); //pushing contact's name into the array
        },

        removeContact: function(contact) {
            for (let i = 0; i < contacts.length; i++) {
                if (contact === contacts[i]) {
                contacts.splice(i, 1);
                    }
                }
        },
            findContact: function(fullName) { //will search through contacts when given a full name string
            for (let i = 0; i < contacts.length; i++) {//for loop to loop through our contactArray
               if (contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName) {
                   return contacts[i];
               } else if (i > contacts.length) {
                   return undefined;
              }
            }
         },
                  
         printAllContactNames: function() {
             let fullNames = [];
             let fullName;
              for (let i = 0; i < contacts.length; i++) {
                let everyContact = contacts[i];
                let fullName =  everyContact.nameFirst + " " + everyContact.nameLast;
                      fullNames.push(fullName);
              }
            var fullNamesString = fullNames.join("\n");
            return fullNamesString;
         }

            };






}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
