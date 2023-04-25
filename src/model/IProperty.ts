export interface IProperty {
  id: number | null,
  name: string,
  street_number: string,
  city: string,
  country: string,
  postal_code: string,
  rents_collected_in_cent: number,
  gants_special_work_in_cent: number,
  work_expenses_in_cent: number,
  taxation_in_cent: number,
  insurances_premiums_in_cent: number
}