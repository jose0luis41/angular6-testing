import { Reference } from "./reference";

export class Person {
    $key: string;
    name: string;
    lastname: string;
    documentType: string;
    document: string;
    birthday : string;
    email: string;
    phone: string;
    reference: Reference;
}
