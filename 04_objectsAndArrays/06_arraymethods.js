var levels = [20, 10, 50, 30, 150];
//array methods
console.log(levels.toString());
console.log(levels.join(" "));
console.log(levels.slice(1, 3)); // 1st index to 2nd index(end-1)
console.log(levels.slice(3)); //from 3rd index to end of array
//delete using splice
levels.splice(1, 2); //change from index 1 and delete 2 elements from index 1
console.log(levels);
//add using splice
levels.splice(1, 0, 10, 50); // from index 1 add elements but delete nothing
console.log(levels); //existing numbers will be pushed to right
//delete and add, both
levels.splice(1, 2, 11, 22); //start from index 1, delete two elements and add 11, 22
console.log(levels);
//adding and removing elements
//push,pop -> stack
levels.push(1); //add at end
console.log(levels.toString());
//delete at end
levels.pop();
console.log(levels.toString());
//add at begining, unshift
levels.unshift(2);
console.log(levels.toString());
//delete at beginning, shift
levels.shift();
console.log(levels.toString());
