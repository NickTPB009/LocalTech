import React, { useMemo, useState } from "react";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import MultipleSelect from "../features/MultipleSelect"; 
import servicesData from "../../localtech_services.json"; 

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Grid = tw.div`mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2`;
const GroupTitle = tw.h5`font-semibold text-gray-900 mb-2`;
const Card = tw.div`bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col`;
const Row = tw.div`flex items-start justify-between gap-3`;
const Title = tw.h6`font-semibold text-gray-900`;
const Price = tw.span`inline-flex items-center px-3 py-1 rounded-full text-sm border border-gray-200`;
const Text = tw.p`mt-1 text-sm text-gray-600`;

export default function ServiceFinder({
  subheading = "Pricing",
  heading = "Find your services.",
  description = "Find the Service you need and Check the price"
}) {
 
  const categories = useMemo(() => Object.keys(servicesData || {}), []);
  const [picked, setPicked] = useState([]); 
  const activeCats = picked.length ? picked : categories;

  const grouped = useMemo(() => {
    return activeCats.map((cat) => {
      const group = servicesData[cat] || {};
      const items = (group.services || []).map((svc) => ({
        name: svc.name,
        desc: svc.description,
        price: svc.price
      }));
      return { category: group.category || cat, items };
    });
  }, [activeCats]);

  const handleSelection = (selected) => {
    setPicked(selected || []);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeaderContainer>

        <div class="flex justify-center mt-6">
          <MultipleSelect label="Select Service" options={categories} onChange={handleSelection} />
        </div>

        <div class="mt-10 space-y-10">
          {grouped.map((group) => (
            <section key={group.category}>
              <GroupTitle>{group.category}</GroupTitle>
              <Grid>
                {group.items.map((it) => (
                  <Card key={`${group.category}-${it.name}`}>
                    <Row>
                      <Title>{it.name}</Title>
                      {it.price ? <Price>{it.price}</Price> : <span />}
                    </Row>
                    {it.desc && <Text>{it.desc}</Text>}
                  </Card>
                ))}
              </Grid>
            </section>
          ))}
        </div>
      </ContentWithPaddingXl>
    </Container>
  );
}
