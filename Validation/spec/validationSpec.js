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

        it("Sould validate an email which have Turkish characters like sezgi.şensöz@şensöz.com.tr", function(){
            var result = valid.isValidEmail('sezgi.şensöz@şensöz.com.tr');
            expect(result).toBeTruthy();
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

        it("Should be valid Name Surname which contains two name like Sezgi Sezen Sensoz",function(){
            var result = valid.isValidNameSurname('Sezgi Sezen Sensoz');
            expect(result).toBeTruthy();
        });

        it("Should NOT be valid Name Surname which contains number like 'Sez112gi Sen321soz'",function(){
            var result = valid.isValidNameSurname('Sez112gi Sen321soz');
            expect(result).not.toBeTruthy();
        });

        it("Should NOT be valid Name Surname that contains one space after that like 'Sezgi '(one space)",function(){
            var result = valid.isValidNameSurname('Sezgi ');
            expect(result).not.toBeTruthy();
        });

        it("Should NOT be valid Name Surname that contains two space after that like 'Sezgi  '",function(){
            var result = valid.isValidNameSurname('Sezgi  ');
            expect(result).not.toBeTruthy();
        });

         it("Should NOT be valid Name Surname which contains two space before and after that like ' Sezgi '",function(){
            var result = valid.isValidNameSurname(' Sezgi ');
            expect(result).not.toBeTruthy();
        });

         it("Should NOT be valid Name Surname which contains one space before that like ' Sezgi'",function(){
            var result = valid.isValidNameSurname(' Sezgi');
            expect(result).not.toBeTruthy();
        });

        it("Should NOT be valid Name Surname like Sezgi.Sensoz",function(){
            var result = valid.isValidNameSurname('Sezgi.Sensoz');
            expect(result).toBeFalsy();
        });
        it("Should NOT be valid Name Surname which have more than 30 character like 'Fatma Ayse Emine Hatice Yilmazoglu'",function(){
            var result = valid.isValidNameSurname('Fatma Ayse Emine Hatice Yilmazoglu');
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
