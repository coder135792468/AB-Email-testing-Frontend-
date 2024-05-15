import React from "react";
import { Drawerbutton } from "./drawer-button";
import { EmailTemplateContainer } from "../features/email-template-form/email-template-container";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { addTemplate } from "@/store/slices/templateSlice";
import { useAddTemplateMutation } from "@/store/slices/templateApiSlice";
import { Button } from "../ui/button";
import { downloadCSV } from "@/lib/utils";
import { RootState } from "@/store/store";

export const Header = () => {
  const dispatch = useAppDispatch();
  const [createTemplate] = useAddTemplateMutation();
  const { templates } = useAppSelector((state: RootState) => state.template);
  const onsubmit = async (data: any) => {
    await dispatch(addTemplate(data));
    await createTemplate(data);
  };

  return (
    <div className="bg-[#dfdfdf] p-2 flex justify-between shadow-md">
      <strong className="p-2">A/B Testing</strong>
      <div>
        <Drawerbutton title="Add Email">
          <EmailTemplateContainer
            onSubmit={onsubmit}
            formClass="grid flex-row"
            inputClass="mb-4"
            buttonClass="mx-auto w-full max-w-sm"
          />
        </Drawerbutton>
        <Button onClick={() => downloadCSV(templates)} className="mx-2">
          Export
        </Button>
      </div>
    </div>
  );
};
