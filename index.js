const distanceFromHqInBlocks = function(currentposition){
    
    if (currentposition >= 42)
        return (currentposition - 42); 

    else 
        return ((currentposition - 42) * (-1));
        // A position below 42nd street will be less than 42, so we want
        // the number to be positive, thus we multiply it by -1.
}
            distanceFromHqInBlocks(43);
            distanceFromHqInBlocks(50);


const distanceFromHqInFeet = function(currentposition){

    if (currentposition >= 42) 
        return ((currentposition - 42) * 264);

    else 
        return ((currentposition - 42) * (-264));
        // Multiply the block distance by 264, multiply by -264 if it is
        // below 42nd street, as in the first example. 
}

            distanceFromHqInFeet(43);
            distanceFromHqInFeet(50);


const distanceTravelledInFeet = function(startpoint, endpoint){

    if (endpoint >= startpoint) 
        return ((endpoint - startpoint) * 264);

    else 
        return ((endpoint - startpoint) * (-264));
        // If the endpoint is less than the startpoint, the value will be
        // negative. Thus, we multiply by -264 to make the distance in 
        // feet a positive value. 
}
            distanceTravelledInFeet(43,48);
            distanceTravelledInFeet(50,60);
            distanceTravelledInFeet(34,28);


const calculatesFarePrice = function(startpoint, endpoint){

    let distance = distanceTravelledInFeet(startpoint, endpoint) 

    if (distance < 400)
        {return 0};
    
    if (distance >= 400 && distance <= 2000)
        {return ((distance - 400) * 0.02)};

    if (distance > 2000 && distance <= 2500) 
        {return 25};
    
    if(distance > 2500)
        {return "cannot travel that far"}};


   
// `calculatesFarePrice`: Given the same starting and ending block as the
// previous test (_hint hint_), return the fare for the customer. The first four
// hundred feet are free. For a distance between 400 and 2000 feet, the price is
// 2 cents per foot (not including 400, which are free!). Then Scuber charges a
// flat fare for a distance over 2000 feet and under 2500 feet.
// Finally, Scuber does not allow any rides over 2500 feet — the function returns
// `'cannot travel that far'` if a ride over 2500 feet is requested.
