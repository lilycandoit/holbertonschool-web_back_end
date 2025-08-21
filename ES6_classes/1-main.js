import initializeRooms from './1-make_classrooms.js';
import ClassRoom from './0-classroom';

console.log(initializeRooms());

// test how Nodejs auto format the instance object
const arr = [new ClassRoom(5)];
console.log(arr); // [ ClassRoom { _maxStudentsSize: 5 } ]
console.log(arr[0]); // ClassRoom { _maxStudentsSize: 5 }
console.log(arr[0]._maxStudentsSize); // 5 (just the number)
