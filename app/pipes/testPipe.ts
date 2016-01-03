import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'test'})

export class TestPipe implements PipeTransform {
    transform(value:any, args:any[] = []) {
        return value + ' is D Man!!!';
    }
}