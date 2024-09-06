import React from "react";
import SectionComponent from "./SectionComponent";
import { LetterIcon } from "../icons/icons";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInformation";
import CallToAction from "./CallToAction";

const ContactSection: React.FC = () => {
 return (
  <SectionComponent size="h2" heading="Contact" icon={<LetterIcon />}>
   <CallToAction />
   <ContactInfo />
   <ContactForm />
  </SectionComponent>
 );
};

export default ContactSection;
