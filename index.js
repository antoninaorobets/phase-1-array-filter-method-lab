// Code your solution here


function findMatching(drivers,muchName){
    return drivers.filter((driver) => driver.toLowerCase() === muchName.toLowerCase() )

}


function f1(name,chars){
return  (name.includs(chars) && name[0]=== chars[0])


}

function  fuzzyMatch(drivers,chars){
    return drivers.filter((name) => name.startsWith(chars))


}

function matchName(drivers,string){
    return drivers.filter((element) => element.name === string)

}