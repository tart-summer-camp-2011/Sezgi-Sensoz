/**
 * Created by JetBrains PhpStorm.
 * User: sezgi
 * Date: 08.07.2011
 * Time: 23:49
 * To change this template use File | Settings | File Templates.
 */

describe("Validation",function(){

    var valid;

    beforeEach(function(){
       valid = new Validation();
    });

    describe("Control e-mail validation",function(){

        it("Should validate an email like sezgi.sensoz@tart.com.tr should",function(){
            var result = valid.isValidEmail("sezgi.sensoz@tart.com.tr");
            expect(result).toEqual(true);
        });

        it("Sould NOT validate an email like sezgi.sensoz@tart", function(){
            var result = valid.isValidEmail('sezgi.sensoz@tart');
            expect(result).not.toEqual(true);
        });


        it("Sould NOT validate an email which is top level domain have more than 4 character like sezgi.sensoz@tart.com.local", function(){
            var result = valid.isValidEmail('sezgi.sensoz@tart.com.local');
            expect(result).toBeFalsy();
        });

        it("Sould NOT validate an email which have Turkish characters like sezgi.şensöz@tart.com.tr", function(){
            var result = valid.isValidEmail('sezgi.şensöz@tart.com.tr');
            expect(result).not.toBeTruthy();
        });
    });

    describe("Control Name Surname validation",function(){

        it("Should NOT be valid Name Surname which is empty",function(){
            var result = valid.isValidNameSurname('');
            expect(result).toBeFalsy();
        });

        it("Should be valid Name Surname like Sezgi Sensoz",function(){
            var result = valid.isValidNameSurname('Sezgi Sensoz');
            expect(result).toBeTruthy();
        });

        it("Should NOT be valid Name Surname like Sezgi.Sensoz",function(){
            var result = valid.isValidNameSurname('Sezgi.Sensoz');
            expect(result).toBeFalsy();
        });
        it("Should be valid Name Surname which have more than 30 character like 'Fatma Ayse Emine Hatice Yilmaz'",function(){
            var result = valid.isValidNameSurname('Fatma Ayse Emine Hatice Yılmaz');
            expect(result).toBeFalsy();
        });

    });

    describe("Zip Code Validation",function(){

        it("Should be number which have 5 length",function(){
             var result = valid.isValidZipCode('12345');
             expect(result).toBeTruthy();
        });

         it("Should not be valid Zip Code which have space ",function(){
            var result = valid.isValidZipCode('12345');
            expect(result).toBeTruthy();
         });

         it("Should not contain any character in Zip Code", function(){
            var result = valid.isValidZipCode('123ab');
            expect(result).toBeFalsy();
         });
    });

});