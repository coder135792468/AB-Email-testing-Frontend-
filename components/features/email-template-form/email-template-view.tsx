import { Input } from "../../ui/input";
import { UseFormReturn } from "react-hook-form";
import { TEmailTemplateSchema } from "./types";
import { Button } from "../../ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  form: UseFormReturn<TEmailTemplateSchema>;
  onSubmit: any;
  header?: string | JSX.Element | null;
  formClass?: string;
  inputClass?: string;
  selectClass?: string;
  selectContainer?: string;
  buttonClass?: string;
}

const EmailTemplateView = ({
  form,
  onSubmit,
  header,
  formClass,
  inputClass,
  selectClass,
  buttonClass,
  ...props
}: Props) => {
  const { formState, register, handleSubmit } = form;
  const { errors } = formState;
  return (
    <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
      {header}
      <Input
        placeholder="Receiver Email"
        {...register("receiver")}
        autoComplete={"off"}
        className={inputClass}
      />
      {errors.receiver && (
        <div className="text-red-500 text-xs">{`${errors.receiver.message}`}</div>
      )}

      <Input
        placeholder="Subject.."
        {...register("subject")}
        autoComplete={"off"}
        className={inputClass}
      />
      {errors.subject && (
        <div className="text-red-500 text-xs">{`${errors.subject.message}`}</div>
      )}

      <Textarea
        placeholder="Enter Email description.."
        {...register("description")}
        autoComplete={"off"}
        className={inputClass}
      />
      {errors.description && (
        <div className="text-red-500 text-xs">{`${errors.description.message}`}</div>
      )}

      <Button type={"submit"} className={buttonClass}>
        Save Template
      </Button>
    </form>
  );
};

export default EmailTemplateView;
