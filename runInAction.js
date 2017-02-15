console.log('>>>>>>>>>>>>>>> runInAction>>>>>>>>>>>>>>>>');
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
mobx.runInAction(() => {
    _.times(10, () => {
        person.age = _.random(40);
    });
});
person.firstName = 'firts_vingo';
person.lastName = 'last_mao';
mobx.runInAction(() => {
    person.firstName = 'Jon';
    person.lastName = 'Smith';
});

//console result
/*
>>>>>>>>>>>>>>> runInAction>>>>>>>>>>>>>>>>
 fullName: 1
 autorun:  FullName: vingo mao ,age: 27
 autorun:  FullName: vingo mao ,age: 40
 fullName: 2
 autorun:  FullName: firts_vingo mao ,age: 40
 fullName: 3
 autorun:  FullName: firts_vingo last_mao ,age: 40
 fullName: 4
 autorun:  FullName: Jon Smith ,age: 40
*/