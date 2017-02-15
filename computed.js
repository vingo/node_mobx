console.log('>>>>>>>>>>>>>>> computed>>>>>>>>>>>>>>>>');
var person = mobx.observable({ //
    firstName: 'vingo',
    lastName: 'mao',
    age: 27,
    get fullName() { return this.firstName + ' ' + this.lastName }
});
mobx.autorun(() => {
    console.log('autorun: ' + ' FullName: ' + person.fullName + ' ,age: ' + person.age);
});
_.times(10, () => {
    person.age = _.random(40);
});