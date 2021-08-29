import _ from 'lodash';




export function Paginate(movies,number,pageSize) 
{
    
    return _(movies).slice((number-1)*pageSize).take(pageSize).value();
}

