console.log('>>>>>>>>>>>>>>> extendObservable>>>>>>>>>>>>>>>>');
var person = function(firstName, lastName, age) {
    this.id = _.uniqueId('person_');
    mobx.extendObservable(this, {
        firstName: firstName,
        lastName: lastName,
        age: age,
        get fullName() {
            console.count('fullName');
            return this.firstName + ' ' + this.lastName;
        }
    });
};
var person = new person('vingo', 'mao', 27);
mobx.autorun(() => {
    console.log('auto1:', person.fullName + ' ' + person.age);
});
mobx.extendObservable(person, { nickName: 'small_cat' });
mobx.autorun(() => {
    console.log('auto2: ', 'nickName: ' + person.nickName + ' ' + person.age);
});
person.firstName = 'first_vingo';
person.lastName = 'last_mao';
person.nickName = 'nick_smallcat';
//console result
/*
>>>>>>>>>>>>>>> extendObservable >>> >>> >>> >>> >>> >
 fullName: 1
 auto1: vingo mao 27
 auto2: nickName: small_cat 27
 fullName: 2
 auto1: first_vingo mao 27
 fullName: 3
 auto1: first_vingo last_mao 27
 auto2: nickName: nick_smallcat 27
*/