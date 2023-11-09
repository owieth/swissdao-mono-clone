import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Card } from '../ui/card';

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export default function Listitem({ trigger, children }: Props) {
  return (
    <Card className="mt-6 p-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-0">
          <AccordionTrigger>{trigger}</AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
