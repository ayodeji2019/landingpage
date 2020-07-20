import Mailchimp from "./subscribe";

const CustomForm = () => {
  return (
    <div>
      <Mailchimp
        action="https://cheapsms.us10.list-manage.com/subscribe/post?u=26cdaba5e0f7e62010fa2274f&amp;id=58e480a002"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
          {
            name: "FNAME",
            placeholder: "Your Name?",
            type: "text",
            required: true,
          },
        ]}
        className="myForm"
      />
      <style jsx>{`
        .myForm {
          width: 100%;
        }
        .myInput {
          border: 3px solid #c90859;
          background: rgba(0, 0, 0, 0.8);
          width: 40%;
          height: 50px;
          color: #c90859;
          font-size: 20px;
          padding: 10px;
        }
        button {
          border: 1px solid #c90859;
          color: #c90859;
          text-decoration: none;
          padding: 20px 50px;
          background: black;
          transition: all 0.5s ease-in-out;
        }

        button:hover {
          background: #c90859;
          color: black;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default CustomForm;
