const students = [
    {id:3, name:'tom'},
    {id:5, name:'peter'},
    {id:7, name:'john'},
    {id:8, name:'andrew'}
];

const names = students.map(x => x.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);

const biggerId= students.filter( y => y.id > 5);
console.log(biggerId);

const findOne= students.find( a => a.id> 5);
console.log(findOne);