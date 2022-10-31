import { AnyObject } from "../types/anyObject";

export const setFormValues = (values: AnyObject) => {

    const form = document.querySelector('form') as HTMLFormElement;

    Object.keys(values).forEach((key) => {

        const field = form.querySelector<HTMLInputElement>(`[name=${key}]`);

        if (field) {
            field.value = values[key];
        }

    });

};