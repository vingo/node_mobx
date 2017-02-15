console.log('>>>>>>>>>>>>>>> action>>>>>>>>>>>>>>>>');
var person = mobx.observable({
    firstName: 'xiao',
    lastName: 'mao',
    age: 0,
    get fullName() {
        console.count('fullName');
        return this.firstName + ' ' + this.lastName;
    },
    setAge: mobx.action(function(age) {
        var self = this;
        _.times(10, function() {
            self.age = _.random(50);
        });
        this.age = age;
    }),
    setFirstName: mobx.action(function(firstName) {
        this.firstName = firstName;
    }),
    setlastName: mobx.action(function(lastName) {
        this.lastName = lastName;
    }),
    setFirstNameAndlastName: mobx.action(function(firstName, lastName) {
        this.setFirstName(firstName);
        this.setlastName(lastName);
    })

});
mobx.autorun(function() {
    console.log('autorun: ' + person.fullName + ' ' + person.age);
});

person.setAge(_.random(40));
person.setFirstNameAndlastName('john', 'smith');

person.firstName = 'firstName';
person.lastName = 'lastName';
//console result
/*
>>>>>>>>>>>>>>> action>>>>>>>>>>>>>>>>
fullName: 1
autorun: xiao mao 0
autorun: xiao mao 23
fullName: 2
autorun: john smith 23
fullName: 3
autorun: firstName smith 23
fullName: 4
autorun: firstName lastName 23
*/