import React from "react";
import { contactType } from "../types";
import Heading from "./Heading"



type contactInfoProps = {
	contact: contactType
}

const ContactInfo: React.FC<contactInfoProps> = ({contact}) => {
	console.log(contact);
	const {name, email, address} = contact || {}
	const {street, suite, city, zipcode} = address || {}
  
	if(!contact) {

		return (
			<Heading tag="h3" text="Empty contact" />
			)
	}

	return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
}

export default ContactInfo