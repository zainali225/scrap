
import api from "./";
import paths from "./paths";



export function getCrickHdHomeMethod(req) { return api(paths.getCrickHdHome) }

export function fetchAddress(url) { return api(url) }


export function getChannelsMethod() { return api(paths.GET_CHANNELS) } 