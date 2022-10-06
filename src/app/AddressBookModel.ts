
export class AddressBookModel {

    firstName: string = "";
    address: string = "";
    city: string = "";
    state: string = "";
    phoneNumber: Array<string> = [];
    zipCode: number = 0;

    constructor(firstName: string, address: string, city: string, state: string, phoneNumber: Array<string>, zipCode: number) {
        this.firstName = firstName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.zipCode = zipCode;
    }
}