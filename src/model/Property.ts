export class Property {
  id: number | null;
  name: string;
  street_number: string;
  city: string;
  country: string;
  postal_code: string;
  rents_collected: number;
  gants_special_work: number;
  work_expenses: number;
  taxation: number;
  insurances_premiums: number;

  constructor(
    id: number | null = null,
    name: string = '',
    street_number: string = '',
    city: string = '',
    country: string = '',
    postal_code: string = '',
    rents_collected_in_cent: number = 0,
    gants_special_work_in_cent: number = 0,
    work_expenses_in_cent: number = 0,
    taxation_in_cent: number = 0,
    insurances_premiums_in_cent: number = 0
  ) {
    this.id = id;
    this.name = name;
    this.street_number = street_number;
    this.city = city;
    this.country = country;
    this.postal_code = postal_code;
    this.rents_collected = rents_collected_in_cent;
    this.gants_special_work = gants_special_work_in_cent;
    this.work_expenses = work_expenses_in_cent;
    this.taxation = taxation_in_cent;
    this.insurances_premiums = insurances_premiums_in_cent;
  }


  public get totalNet(): number {

    return (this.rents_collected+this.gants_special_work-this.work_expenses-this.taxation-this.insurances_premiums);
  }
}