// Import images
import volunterImage1 from "@/assets/images/resources/become-volunter-1.jpg";
import volunterImage2 from "@/assets/images/resources/become-volunter-2.jpg";

export const volunteerContent = {
   title: "Volunteer Requirements",
   text: "Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
   highlight: "Helped fund 589,537 Projects in 24 Countries, Benefiting over 45k+ Million people.",
   list: [
      {
         icon: "icofont-check-circled",
         text: "We help companies develop powerful corporate social",
         linkText: "Responsibility",
         linkUrl: "/about",
      },
      {
         icon: "icofont-check-circled",
         text: "Helped fund 3,265 Project powerful corporate poor.",
      },
   ],
   images: [volunterImage1, volunterImage2],
   form: {
      fields: [
         { name: "name", type: "text", placeholder: "Your Name" },
         { name: "email", type: "email", placeholder: "Email Address" },
         { name: "phone", type: "tel", placeholder: "Phone No" },
         { name: "address", type: "text", placeholder: "Address" },
         {
            name: "occupation",
            type: "select",
            placeholder: "Occupation",
            options: [
               { value: "1", label: "Business Man" },
               { value: "2", label: "Lawyer" },
               { value: "3", label: "Doctor" },
               { value: "4", label: "Engineer" },
               { value: "5", label: "Social Worker" },
               { value: "6", label: "Agricultural" },
            ],
         },
         { name: "message", type: "textarea", placeholder: "Write a Message" },
      ],
      submitText: "Send Request",
   },
};
