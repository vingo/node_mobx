console.log('>>>>>>>>>>>>>>> map>>>>>>>>>>>>>>>>');
var person = mobx.observable({
    stats: mobx.observable.map({})
});

mobx.autorun(() => {
    console.log('autorun: ' + person.stats);
});
person.stats.set('height', 6);
person.stats.set('weight', 100);
person.stats.set('weight', 101);
person.stats.delete('height');

mobx.runInAction(() => {
    person.stats.set('height', 7);
    person.stats.set('weight', 700);
    person.stats.set('weight', 701);
    person.stats.set('height', 8);
});
//console result
/*
>>>>>>>>>>>>>>> map>>>>>>>>>>>>>>>>
autorun: ObservableMap@1[{  }]
autorun: ObservableMap@1[{ height: 6 }]
autorun: ObservableMap@1[{ height: 6, weight: 100 }]
autorun: ObservableMap@1[{ height: 6, weight: 101 }]
autorun: ObservableMap@1[{ weight: 101 }]
autorun: ObservableMap@1[{ weight: 701, height: 8 }]
*/