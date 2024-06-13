// Changing guest list: You've just learned that one of your guests won't be able to attend the dinner, so you'll have to send out a new set of invitations. You will need to consider inviting a different person



//Starting with Exercise 14's program, get started. The guest name that cannot be reached shall be entered in the printed statement at the end of your program


//You can change your list and replace a guest who cannot come in with the new person you're going to invite here.invite


//Print a second set of invitation messages, one for each person who is still in your list.invite


let Guest_List: string[] = ["Aiman", "Zunaiba", "Zimal", "Muqadas", "Zunaira", "Izma"];
for(let Guest of Guest_List){
	console.log(Guest, "I  would like to invite to dinner. ");
}

console.log("\n");


Guest_List.pop();
console.log("Changing_Guest_List", Guest_List, "can't make the dinner");


console.log("\n");


let Modify_Guest_list = Guest_List;
Modify_Guest_list.push("Zulqarnain");
console.log(Modify_Guest_list);


console.log("\n");



let add_new_guest_list = Guest_List;
for(let set of add_new_guest_list){
	console.log(set, "is still in my list");
}