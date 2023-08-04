import { isConsecutiveNumbers } from "./isConsecutiveNumbers";

export function generateNewPin(): string  {
    
    while (true) {
     const number = String(Math.floor(Math.random() * 900000) + 100000);
         if(!isConsecutiveNumbers(number)){
             return number
         }
    }
 }