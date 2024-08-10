import { CONTACT } from "@/constants";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return (
    <div className=" pb-20 ">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4"> {CONTACT.address}</p>
        <p className="my-4"> {CONTACT.phoneNo}</p>
        <Button variant="link">{CONTACT.email}</Button>
      </div>
    </div>
  );
};

export default Contact;
