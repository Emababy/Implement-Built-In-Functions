function stringReverse(str){

    let reversed_String = "" ;

    // let index = 0 ;
    // while(str[index] !== undefined){

    //     reversed_String = str[index] + reversed_String ;

    //     index++ ;
    // }

    for (let index = 0 ; str[index] !== undefined ; index++){

        reversed_String = str[index] + reversed_String;
    }

    return reversed_String;
}

console.log(stringReverse("ziad"));