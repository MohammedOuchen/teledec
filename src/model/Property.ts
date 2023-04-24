import { IProperty } from "./IProperty";

export class Property implements IProperty {
  id: number | null;
  name: string;
  street_number: string;
  city: string;
  country: string;
  postal_code: string;
  rents_collected_in_cent: string | null;
  gants_special_work_in_cent: string | null;
  work_expenses_in_cent: string | null;
  taxation_in_cent: string | null;
  insurances_premiums: string | null;

  constructor(
    id: number | null = null,
    name: string = '',
    street_number: string = '',
    city: string = '',
    country: string = '',
    postal_code: string = '',
    rents_collected_in_cent: string | null = null,
    gants_special_work_in_cent: string | null = null,
    work_expenses_in_cent: string | null = null,
    taxation_in_cent: string | null = null,
    insurances_premiums: string | null = null
  ) {
    this.id = id;
    this.name = name;
    this.street_number = street_number;
    this.city = city;
    this.country = country;
    this.postal_code = postal_code;
    this.rents_collected_in_cent = rents_collected_in_cent;
    this.gants_special_work_in_cent = gants_special_work_in_cent;
    this.work_expenses_in_cent = work_expenses_in_cent;
    this.taxation_in_cent = taxation_in_cent;
    this.insurances_premiums = insurances_premiums;
  }
}