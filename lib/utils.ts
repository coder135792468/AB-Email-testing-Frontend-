import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function createCSV(array: any) {
  var keys = Object.keys(array[0]);

  var result = "";
  result += keys.join(",");
  result += "\n";

  array.forEach(function (item: any) {
    keys.forEach(function (key) {
      result += item[key].toString().split(",").join(" ") + ",";
    });
    result += "\n";
  });
  console.log(result);

  return result;
}

export function downloadCSV(array: any) {
  let csv = "data:text/csv;charset=utf-8," + createCSV(array);
  let excel = encodeURI(csv);

  let link = document.createElement("a");
  link.setAttribute("href", excel);
  link.setAttribute("download", `${Date.now()}.csv`);
  link.click();
}
