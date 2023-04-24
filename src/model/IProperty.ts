export interface IProperty {
  id: number | null,
  name: string,
  street_number: string,
  city: string,
  country: string,
  postal_code: string,
  rents_collected_in_cent: string | null,
  gants_special_work_in_cent: string | null,
  work_expenses_in_cent: string | null,
  taxation_in_cent: string | null,
  insurances_premiums: string | null
}