//start by declaring known variables
//variable is data storage device
var totalAmmo = 6 //ammo cache value
var maxAmmo = 6 //gun capacity
//below ensures the current gun capacity for ammo is full before start
var currentAmmo = maxAmmo
//shoot function handles updating current ammo on screen (as button is clicked current ammo goes down)
function shoot(){
    //conditional statement checks for truth and uses relational operators
    if (currentAmmo > 0){
        //lower current ammo in gun by 1
        //currentAmmo = currentAmmo - 1 //long way
        currentAmmo-- //fast way, decrementation, minus 1
        //adding in play function for the sound
        document.getElementById("gun").play();
        //gun sounds will play as fast as trigger is pulled by setting it back to zero
        document.getElementById("gun").currentTime=0;
    }
    //once if statement has run, call updatescreen()
    updatescreen()
}//end shoot()
//function to update the total and current ammo values on screen
function updatescreen(){
    //first, connect the HTML elements holding ammo values to the JS and write inside the elements the current ammo values from JS
    document.getElementById("total-ammo").innerHTML = "" + totalAmmo
    document.getElementById("current-ammo").innerHTML = "" + currentAmmo
}//end updatescreen
//functions can also be passed values called parameters (a,b) and ust be sent to the function during the call in order for the function to work (function relies on this data to do its job)
function getDiff(a,b){
    var c = a - b
    return c //once c is calculated the value will be returned to the function where it was called
}//end getDiff
//reload function
function reload(){
    var difference = getDiff(maxAmmo, currentAmmo)
    //find value difference and send ammo values
    //once getDiff job is done, returns c to where it was called
    if(difference > 0 && totalAmmo != 0){
        document.getElementById("reload").play();
    }
    if (totalAmmo >= difference){
        currentAmmo += difference //currentAmmo = currentAmmo + difference
        totalAmmo -= difference //totalAmmo = totalAmmo - difference
    }
    else{ //when the if condition is false the else runs
        currentAmmo += totalAmmo
        totalAmmo -= totalAmmo //totalAmmo = 0
    }
    updatescreen()
}//end reload