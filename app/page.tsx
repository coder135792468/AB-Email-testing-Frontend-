"use client";

import { useAppDispatch, useAppSelector } from "@/store/hook";
import { BarChartContainer } from "../components/charts/bar-chart";
import { Header } from "@/components/layouts/Header";
import { CardContainer } from "@/components/layouts/card-container";
import { deleteTemplate } from "@/store/slices/templateSlice";

export default function Home() {
  const { templates } = useAppSelector((state) => state.template);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Header />
      <div className="mt-3 h-[320px]">
        <BarChartContainer data={templates} x_axis={"id"} num="views" />
      </div>
      <div>
        {templates.map((ele: any, index: number) => (
          <CardContainer
            id={ele.id}
            subject={ele.subject}
            description={ele.description}
            deleteTemplate={(id: any) => dispatch(deleteTemplate(id))}
          />
        ))}
      </div>
    </div>
  );
}
