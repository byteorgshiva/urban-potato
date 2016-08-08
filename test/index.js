var urbanpotato = require('urban-potato');

var person = [{
		name : 'John',
		details: {
				firstname: 'John',
				middlename: 'Mike',
				lastname: 'Radio',
			}
		}];

function sayHello() {
	var first = Array.prototype.shift.apply(arguments),
	    rest  = [].shift.apply(arguments);
	console.log('Hello ' + first);

}

console.log(urbanpotato(person).
			bind(function(person) { return person[0];}).
			bind(function(p) { return p.details; } ).
			bind(function(d) { sayHello(d.middlename); return d.middlename;}).
			maybe("unknown result", function(result){
				return result;
				}
			)
	);

console.log(urbanpotato(person).
			bind(function(person) { return person[0];}).
			bind(function(p) { return p.details; } ).
			bind(function(d) { sayHello(d.middlename); return d;}).
			bind(function(e) { sayHello(e.lastname); return e.lastname;}).
			maybe("unknown result", function(result){
				return result;
				}
			)
	);

console.log(urbanpotato(person).
			bind(function(person) { return person[0];}).
			bind(function(p) { return p.details; } ).
			bind(function(d) { return d.secondname;}).
			maybe("unknown result", function(result){
				return result;
				}
			)
	);
