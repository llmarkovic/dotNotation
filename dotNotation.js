const person = {
    name: 'John',
};

person.age = 25;

console.log(person)




const items = {
    'featured-items': ['item1', 'item2']
}

console.log(items["featured-items"])




let appState = 'loading';
const app = {
    [appState]: true
}

console.log(app);




const state = {
    loading: true,
    name: '',
    job: ''
};
function updateState(key, value) {
    state[key] = value
}
updateState('name', 'John', 'job', 'entrepreneur')
updateState('job', 'entrepreneur')

console.log(state)