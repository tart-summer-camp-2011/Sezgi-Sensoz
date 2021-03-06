/**
 * Created by JetBrains PhpStorm.
 * User: sezgi
 * Date: 08.07.2011
 * Time: 23:51
 * To change this template use File | Settings | File Templates.
 */

function Validation(){

};

/**
 * Check email is valid or not.
 * @param {String} email
 * @returns {boolean}
 */
Validation.prototype.isValidEmail = function(email){
    var regExpPattern = /^([A-Za-z0-9şŞıİçÇöÖüÜĞğ_\-\.])+\@([A-Za-z0-9şŞıİçÇöÖüÜĞğ_\-\.])+\.([A-Za-z]{2,4})$/;
    return regExpPattern.test(email);
};

/**
 * Control Name and Surname is valid or not.
 * @param{String} nameSurname
 * @returns {boolean}
 */

Validation.prototype.isValidNameSurname = function(nameSurname){
    var spacePlace = nameSurname.indexOf(' ');
    var nameSurnameList = nameSurname.split(' '); //Spliting string from ' ' and produce and array.

    if(nameSurname == ''){
        return false;
    }

    //Name or surname cannot contain a number
    var isNumberContains = false;
    for(var i=0;i<nameSurname.length; i++){
        if(!isNaN(nameSurname[i])  //Checking one by one is it number or not
            && nameSurname[i] !== ' '){ //it shouldn't be a ' ' (space)
            isNumberContains = true; //Change default value
            break;
        }
    }

    if(spacePlace>1 &&
        nameSurname.length <=30 &&
        nameSurnameList[1] &&
        !isNumberContains){
        return true;
    }
    
};

/**
 * Control Zip Code is valid or not
 * @param zipCode
 * @returns {boolean}
 */
Validation.prototype.isValidZipCode = function(zipCode){
  if(zipCode.length == 5){
    if(zipCode.indexOf(' ') == -1 && !isNaN(zipCode) == true){
      return true;
    }
  }
};