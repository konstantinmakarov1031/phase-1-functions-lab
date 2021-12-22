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
    
    if (((endpoint - startpoint) * 264) < 400)
        return 0; 

    else if ((((endpoint - startpoint) * 264) >= 400) 
    && (((endpoint - startpoint) * 264) <= 2000)) 
        return (((endpoint - startpoint) * 5.28) - 8);

    else if ((((endpoint - startpoint) * -264) >= 400) 
    && (((endpoint - startpoint) * -264) <= 2000)) 
        return (((endpoint - startpoint) * 5.28) - 8);

    else if (((endpoint - startpoint) * 264) > 2000)    
        return 25;

    else if (((endpoint - startpoint) * 264) > 2500) 
        return 'cannot travel that far';

}

            calculatesFarePrice(34,32)

