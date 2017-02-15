console.log('>>>>>>>>>> when >>>>>>>>>>>>>');
var person = mobx.observable({
    firstName: 'vingo',
    lastName: 'mao',
    age: 0
});
//处理者
// you can call the disposer() to kill off the when early.
var disposer = mobx.when(
    function() {
        console.log('age: ' + person.age);
        return person.age >= 20; // break when
    },
    function() {
        console.log('you are too young now.....');
    });
// this will print 'Age: NN' until the age randomly is 20 or higher
_.times(10, () => {
    person.age = _.random(30);
});