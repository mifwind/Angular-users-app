import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})
export class SerachPipe implements PipeTransform {
    transform(users, value){
        return users.filter(user => {
            return user.name.toUpperCase().includes(value.toUpperCase());
        })
    }
}