

var num = [2, 7, 11, 15] ;

const target  =  9 ;
var twoSum  =function(num ,target){
    var hash = {} ;
    var len  = num.length;

    for(i = 0; i<len ; i++){
        if(num[i] in hash) return [hash[num[i]], i];
        hash[target -num[i]] = 1
        
    }
    return [-1 ,-1]
}



