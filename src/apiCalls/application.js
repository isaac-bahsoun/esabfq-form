import axios from "axios";
import { BASE_API } from "../constants/APIs.js";
export async function CreateApplication({
  type,
  title,
  first_name,
  last_name,
  father_name,
  mother_name,
  mother_last_name,
  gender,
  dob,
  pod,
  nationality,
  telephone,
  email,
  district,
  city,
  street,
  building,
  po_box,
  marital_status,
  spouse_name,
  spouse_last_name,
  degree,
  major,
  university_name,
  firm_id,
  firm_address,
  position_held,
  office_phone,
  office_fax,
  qualification_id,
  hasSpecialNeeds,
  register_number,
  register_place,
  special_needs,
}) {
  try {
    const response = await axios.post(`${BASE_API}/applications/`, {
      type: type,
      title: title,
      firstName: first_name,
      lastName: last_name,
      fatherName: father_name,
      motherName: mother_name,
      motherLastName: mother_last_name,
      gender: gender,
      dob: dob,
      pob: pod,
      nationality: nationality,
      telephone: telephone,
      email: email,
      district: district,
      city: city,
      street: street,
      building: building,
      poBox: po_box,
      maritalStatus: marital_status,
      spouseName: spouse_name,
      spouseLastName: spouse_last_name,
      degree: degree,
      major: major,
      universityName: university_name,
      firmId: firm_id,
      branch: firm_address,
      position: position_held,
      officePhone: office_phone,
      officeFax: office_fax,
      qualifications: qualification_id,
      hasSpecialNeeds: hasSpecialNeeds,
      registerNumber: register_number,
      registerPlace: register_place,
      specialNeeds: special_needs,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}