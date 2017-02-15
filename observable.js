console.log('>>>>>>>>>>>>>>> observable>>>>>>>>>>>>>>>>');
var person = mobx.observable({ //
    firstName: 'vingo',
    lastName: 'mao',
    age: 27,
    get fullName() {
        console.count('fullName');
        return this.firstName + ' ' + this.lastName
    }
});
mobx.autorun(() => { // init exec once 
    console.log('autorun: ' + ' FullName: ' + person.fullName + ' ,age: ' + person.age);
});

person.firstName = 'first_vingo';
person.lastName = 'last_mao';

//console result
/*
>>>>>>>>>>>>>>> observable>>>>>>>>>>>>>>>>
 fullName: 1
 autorun:  FullName: vingo mao ,age: 27
 fullName: 2
 autorun:  FullName: first_vingo mao ,age: 27
 fullName: 3
 autorun:  FullName: first_vingo last_mao ,age: 27
*/