import _ from 'lodash';

export function pagniate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
    // const sliced =  _.slice(items, startIndex);
    // console.log("sliced {}",sliced);
    // const taken = _.take(sliced, pageSize);
    // console.log("taken {}",taken);
    
    //below is the wrapper object
    //to convert in to array use .value method
   return  _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}