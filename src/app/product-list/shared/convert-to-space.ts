import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'convertToSpace'
})
export class ConvertToSpace implements PipeTransform{
    transform(input: string, symbol : string) :String{
        return input.replace(symbol, " ");
    }
}