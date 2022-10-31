import { format, parse } from "date-fns";
import locale from "date-fns/locale/pt-BR";
import { queryStringToJSON } from "./functions/queryStringToJSON";
import { TimeOptionItem } from "./types/timeOptionItem";

const page = document.querySelector('#time-options') as HTMLElement;

if (page) {

    const timeOptions: TimeOptionItem[] = [{
        name: '9:00',
        value: 9,
    }, {
        name: '11:00',
        value: 11,
    }, {
        name: '12:00',
        value: 12,
    }, {
        name: '13:00',
        value: 13,
    }, {
        name: '14:00',
        value: 14,
    }, {
        name: '15:00',
        value: 15,
    }, {
        name: '16:00',
        value: 16,
    }];

    const queryString = location.search.split('?')[1];

    const scheduleAt = queryString.split('=')[1];

    queryStringToJSON();

    const parsedScheduleAt = parse(scheduleAt, 'yyyy-MM-dd', new Date());

    if (String(parsedScheduleAt) === 'Invalid Date') {
        location.href = "schedules-new.html";
    } else {

        const checkSelectedOption = () => {

            const button = page.querySelector('[type=submit]') as HTMLButtonElement;

            if (page.querySelector('[name=time_option]:checked')) {
                button.disabled = false;
            } else {
                button.disabled = true;
            }


        }

        const options = page.querySelector('.options') as HTMLDivElement;

        options.innerHTML = '';

        timeOptions.forEach((item) => {

            const label = document.createElement('label');

            label.innerHTML = `
                <input type="radio" name="time_option" value="${item.value}" />
                <span>${item.name}</span>
            `;

            const input = label.querySelector('input') as HTMLInputElement;

            input.addEventListener('change', () => checkSelectedOption());

            options.appendChild(label);

        });

        const title = page.querySelector('h3') as HTMLHeadingElement;

        title.innerText = format(parsedScheduleAt, "cccc, d 'de' MMMM 'de' yyyy", {
            locale,
        });

        const scheduleEl = document.querySelector('[name=schedule_at]') as HTMLInputElement;

        scheduleEl.value = scheduleAt ?? '';

    }

}