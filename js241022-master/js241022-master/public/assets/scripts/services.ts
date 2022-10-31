import { formatCurrency } from "./functions/formatCurrency";
import { queryStringToJSON } from "./functions/queryStringToJSON";
import { setFormValues } from "./functions/setFormValues";
import { ServiceItem } from "./types/serviceItem";

const page = document.querySelector('#schedules-services') as HTMLElement;

if (page) {

    const services: ServiceItem[] = [{
        id: 1,
        name: 'Revisão',
        description: 'Verificação mínima necessária.',
        price: 100,
    }, {
        id: 2,
        name: 'Alinhamento',
        description: 'Alinhamento e balanceamento.',
        price: 400,
    }, {
        id: 3,
        name: 'Filtros',
        description: 'Troca do filtro de ar e combustível.',
        price: 200,
    }, {
        id: 4,
        name: 'Troca de óleo',
        description: 'Troca de óleo.',
        price: 400,
    }, {
        id: 5,
        name: 'Enceramento',
        description: 'Enceramento.',
        price: 100,
    }];

    const values = queryStringToJSON();
    setFormValues(values);

    services.filter(({ id, description, name, price }) => {

        id
        description
        name
        price

    });

    let selectedServices: number[] = [];

    const renderSummary = () => {

        const tbody = page.querySelector('tbody') as HTMLTableSectionElement;

        tbody.innerHTML = '';

        selectedServices.forEach((id) => {

            const service = services.find((item) => {

                return item.id === id;

            });

            if (service) {

                const tr = document.createElement('tr');

                tr.innerHTML = `
                    <td>${service.name}</td>
                    <td class="price">${formatCurrency(service.price)}</td>
                `;

                tbody.appendChild(tr);

            }

        });   

    }

    const calcTotal = () => {

        const totalElement = page.querySelector('.total') as HTMLSpanElement;

        const selecteds = services.filter((item) => {

            return selectedServices.includes(Number(item.id));
            
        });

        let total = 0;

        /*
        selecteds.forEach((service) => {
            total = total + Number(service.price);
        });
        */

        const prices = selecteds.map((item) => {
            return item.price;
        });

        total = prices.reduce((valorAnterior, valorAtual) => {
            return valorAnterior + valorAtual;
        }, 0);

        totalElement.innerText = formatCurrency(total);

    }

    const options = page.querySelector('.options') as HTMLDivElement;

    options.innerHTML = '';

    services.forEach((item) => {

        const label = document.createElement('label');

        label.innerHTML = `
            <input type="checkbox" name="service" value="${item.id}" />
            <div class="square">
                <div></div>
            </div>
            <div class="content">
                <span class="name">${item.name}</span>
                <span class="description">${item.description}</span>
                <span class="price">${formatCurrency(item.price)}</span>
            </div>
        `;

        const input = label.querySelector('input') as HTMLInputElement;

        input.addEventListener('change', (event) => {

            const element = event.target as HTMLInputElement;

            if (element.checked) {
                selectedServices.push(Number(element.value));
            } else {
                selectedServices = selectedServices.filter((id) => {
                    return id !== Number(element.value);
                });
            }

            renderSummary();
            calcTotal();

        });

        options.appendChild(label);

    });

    renderSummary();

}



/*
    for (let i = 0; i < services.length; i++) {

        const item = services[i];

        const label = document.createElement('label');

        label.innerHTML = `
            <input type="checkbox" name="service" value="${item.id}" />
            <div class="square">
                <div></div>
            </div>
            <div class="content">
                <span class="name">${item.name}</span>
                <span class="description">${item.description}</span>
                <span class="price">${formatCurrency(item.price)}</span>
            </div>
        `;

        options.appendChild(label);

    }
*/