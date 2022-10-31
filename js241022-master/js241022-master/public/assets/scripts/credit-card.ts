import IMask from "imask";
import { queryStringToJSON } from "./functions/queryStringToJSON";

const page = document.querySelector("#schedules-payment") as HTMLElement;

if (page) {
  queryStringToJSON();

  const name = page.querySelector("#name") as HTMLInputElement;
  const number = page.querySelector("#number") as HTMLInputElement;
  const expiry = page.querySelector("#expiry") as HTMLInputElement;
  const cvv = page.querySelector("#cvv") as HTMLInputElement;
  const creditCard = page.querySelector("#credit-card") as HTMLDivElement;

  const svgName = page.querySelector("svg .name") as SVGTSpanElement;
  const svgNumber1 = page.querySelector("svg .number-1") as SVGTSpanElement;
  const svgNumber2 = page.querySelector("svg .number-2") as SVGTSpanElement;
  const svgNumber3 = page.querySelector("svg .number-3") as SVGTSpanElement;
  const svgNumber4 = page.querySelector("svg .number-4") as SVGTSpanElement;
  const svgExpiry = page.querySelector("svg .expiry") as SVGTSpanElement;
  const svgCvv = page.querySelector("svg .cvv") as SVGTSpanElement;

  name.addEventListener("keyup", () => {
    svgName.innerHTML = name.value.toUpperCase();
  });

  number.addEventListener("keyup", () => {
    const numberString = number.value.replaceAll(" ", "");

    svgNumber1.innerHTML = numberString.substring(0, 4);
    svgNumber2.innerHTML = numberString.substring(4, 8);
    svgNumber3.innerHTML = numberString.substring(8, 12);
    svgNumber4.innerHTML = numberString.substring(12, 16);
  });

  expiry.addEventListener("keyup", () => {
    svgExpiry.innerHTML = expiry.value;
  });

  cvv.addEventListener("keyup", () => {
    svgCvv.innerHTML = cvv.value;
  });

  cvv.addEventListener("focus", () => {
    creditCard.classList.toggle("flipped");
  });

  cvv.addEventListener("blur", () => {
    creditCard.classList.toggle("flipped");
  });

  IMask(number, {
    mask: "0000 0000 0000 0000",
  });

  const year = new Date().getFullYear();

  IMask(expiry, {
    mask: "MM/YY",
    blocks: {
      YY: {
        mask: IMask.MaskedRange,
        from: String(year).substring(2, 4),
        to: String(year + 10).substring(2, 4),
      },
      MM: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
      },
    },
  });

  IMask(cvv, {
    mask: "000[0]",
  });
}
