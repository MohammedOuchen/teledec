import { Property } from "./Property";

export class PropertiesList {
  public propertiesList= [] as Property[]

  constructor(Properties : Property[])  {
    Properties.forEach(property => {
      this.propertiesList.push(new Property(property.id, property.name, property.street_number, property.city, property.country, property.postal_code, property.rents_collected, property.gants_special_work, property.work_expenses, property.taxation, property.insurances_premiums))
    })
  }
}