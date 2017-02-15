var person = mobx.observable({ //
    firstName: 'vingo',
    lastName: 'mao',
    age: 27
});
mobx.autorun(() => {
    console.log('autorun: ' + ' firstName: ' + person.firstName + 'lastName: ' + person.lastName);
});
_.times(10, () => {
    person.age = _.random(40);
});
_.times(10, () => {
    person.lastName = _.random(40);
});