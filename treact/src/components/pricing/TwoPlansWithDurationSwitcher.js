import React, {useState} from "react";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { MultipleSelect } from "components/features/MultipleSelect";

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;
const services = [
    "Laptop Repair",
    "Software Troubleshooting",
    "Wi-Fi Setup",
    "Security Check",
    "Mobile Screen/Battery",
];

const handleSelection = (selected) => {
    console.log("Selected:", selected);
    // you can show details/pricing based on `selected`
};

export default ({
  subheading = "Pricing",
  heading = "Find your services.",
  description = "",

}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
                  {description && <Description>{description}</Description>}

        </HeaderContainer>
              <MultipleSelect label="Services" options={services} onChange={handleSelection} />
      </ContentWithPaddingXl>

    </Container>
  );
};
