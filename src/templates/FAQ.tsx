import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQ = () => {
  return (
    <section id="faq" className="mx-auto max-w-3xl py-12">
      <h2 className="mb-8 text-center font-inter text-3xl font-bold text-[#22225a]">FAQs</h2>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How is Jibhi different from MakeMyTrip or Booking.com?</AccordionTrigger>
          <AccordionContent>Jibhi plans and books your entire trip, 100% personalized, in minutes. No generic results, no info overload.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I trust AI to make bookings for me?</AccordionTrigger>
          <AccordionContent>Yes. Jibhi only books via trusted partners and shows you every detail before you confirm.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What if I want to change or cancel a booking?</AccordionTrigger>
          <AccordionContent>You’re always in control. Modify or cancel easily—our team and smart AI are here to help.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Do I need to pay to try Jibhi?</AccordionTrigger>
          <AccordionContent>No credit card needed. Planning is 100% free. Pay only if you book.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Will I get support if I’m stuck abroad?</AccordionTrigger>
          <AccordionContent>Absolutely. Jibhi is always your travel ally—24/7 support via WhatsApp, chat, or call.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Is my data safe?</AccordionTrigger>
          <AccordionContent>Yes. We use bank-grade security. Your info is never sold or shared.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
