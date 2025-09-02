/**
 * 
 * @param{string} txt - input text 
 * @param {number} [limit =50] - limit number of characters
 * @returns This sliced text, ith an ellipsis (...) if it exceeds the limit.
 */
export function textSlicer(txt: string, limit: number =50){
    if(txt.length > limit){
        return `${txt.slice(0,limit) + '...'}`;
        return txt;
    }
    else{
                return txt;
    }
}