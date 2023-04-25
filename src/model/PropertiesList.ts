import { Property } from "./Property";

export class PropertiesList {
  public propertiesList= [] as Property[]

  constructor(Properties : Property[])  {
    Properties.forEach(property => {
      this.propertiesList.push(new Property(property.id, property.name, property.street_number, property.city, property.country, property.postal_code, property.rents_collected_in_cent, property.gants_special_work_in_cent, property.work_expenses_in_cent, property.taxation_in_cent, property.insurances_premiums_in_cent))
    })
  }
}