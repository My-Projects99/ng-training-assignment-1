import {Config} from "./Services/config";

export function createURL(path){
    return`${Config.serverURL}/${path}`
}