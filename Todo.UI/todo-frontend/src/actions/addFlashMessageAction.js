import { ADD_FLASH_MESSAGE } from "./types";

export function addFlashMessageAction(message){
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}
