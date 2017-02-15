console.log('>>>>>>>>>>>>>reaciton >>>>>>>>>>>>>');
var person = mobx.observable({
    firstName: 'vingo',
    lastName: 'mao',
    age: 0
});

// thai will not fire initially only on change 
// so you'll not see the age 0 run first unlike autorun
mobx.reaction(function() {
    return person.firstName + ' ' + person.age;
}, function(fnnameAndAge) {
    console.log('reaction: ' + fnnameAndAge + ' ' + person.lastName);
});
//print 10 
_.times(10, function() {
    person.age = _.random(40);
});
//print nothing
_.times(10, function() {
    person.lastName = _.random(40);
});
//console result
/**
>>>>>>>>>>>>>reaciton >>>>>>>>>>>>>
reaction: vingo 12 mao
reaction: vingo 8 mao
reaction: vingo 37 mao
reaction: vingo 23 mao
reaction: vingo 33 mao
reaction: vingo 20 mao
reaction: vingo 38 mao
reaction: vingo 7 mao
reaction: vingo 33 mao
reaction: vingo 18 mao
*/