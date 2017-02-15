console.log('>>>>>>>>>>> whyrun ?>>>>>>>>>>>>>>');
var person = mobx.observable({
    firstName: 'vingo',
    lastName: 'mao',
    age: 0,
    get fullName() {
        // this call is not list out the observeed fields 
        // why? they haven't been accessed yet ,so mobx doesn't know about them yet
        mobx.whyRun();
        return this.firstName + ' ' + this.lastName;
    },
    get fullName2() {
        var fullname = this.firstName + ' ' + this.lastName;
        mobx.whyRun();
        return fullname;
    },
    setFirstAndLastName: mobx.action(function(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    })
});
mobx.autorun(function() {
    console.log('autorun fullname: ' + person.fullName + ' ' + person.age);
});
mobx.autorun(function() {
    console.log('autorun fullname2: ' + person.fullName2 + ' ' + person.age);
});
person.setFirstAndLastName('john', 'berry');