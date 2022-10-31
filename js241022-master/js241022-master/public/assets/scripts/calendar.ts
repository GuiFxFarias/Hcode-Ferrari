import { addDays, addMonths, differenceInDays, differenceInSeconds, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek, subMonths } from "date-fns";
import locale from "date-fns/locale/pt-BR";

const page = document.querySelector('#schedules-new') as HTMLElement;

if (page) {

    const hoje = new Date();
    let inicioMes = startOfMonth(hoje);
    const btnAnterior = page.querySelector('.btn-prev') as HTMLButtonElement;
    const btnProximo = page.querySelector('.btn-next') as HTMLButtonElement;
    const btnHoje = page.querySelector('.btn-today') as HTMLButtonElement;
    const titulo = page.querySelector('h2') as HTMLHeadingElement;
    const calendario = page.querySelector('.days') as HTMLUListElement;

    const render = () => {

        titulo.innerText = format(inicioMes, "MMMM yyyy", {
            locale,
        });

        calendario.innerHTML = '';

        let diaCorrente = startOfWeek(inicioMes);
        const ultimoDia = endOfWeek(endOfMonth(inicioMes));

        while (differenceInSeconds(ultimoDia, diaCorrente) > 0) {

            const li = document.createElement('li');

            li.innerText = format(diaCorrente, 'd');

            li.dataset.schedule = format(diaCorrente, 'yyyy-MM-dd');

            if (format(diaCorrente, 'yyyyMM') < format(inicioMes, 'yyyyMM')) {
                li.classList.add('month-prev');
            }

            if (format(diaCorrente, 'yyyyMM') > format(inicioMes, 'yyyyMM')) {
                li.classList.add('month-next');
            }

            if (format(diaCorrente, 'yyyyMMdd') === format(hoje, 'yyyyMMdd')) {
                li.classList.add('active');
            }

            li.addEventListener('click', (evento) => {

                const diaSelecionado = calendario.querySelector('.selected');
    
                if (diaSelecionado) {
                    diaSelecionado.classList.remove('selected');
                }

                const meuLi = evento.target as HTMLLIElement;

                meuLi.classList.add('selected');

                const scheduleAt = document.querySelector('[name="schedule_at"]') as HTMLInputElement;

                scheduleAt.value = meuLi.dataset.schedule ?? '';

            });

            calendario.appendChild(li);

            diaCorrente = addDays(diaCorrente, 1);

        }

        /*
        calendario.querySelectorAll('li').forEach((elemento) => {

            elemento.addEventListener('click', (evento) => {
                
                const diaSelecionado = calendario.querySelector('.selected');

                if (diaSelecionado) {
                    diaSelecionado.classList.remove('selected');
                }

                const li = evento.target as HTMLLIElement;

                li.classList.add('selected');

            });

        });
        */

    }

    btnAnterior.addEventListener('click', () => {
        inicioMes = subMonths(inicioMes, 1);
        render();
    });

    btnProximo.addEventListener('click', () => {
        inicioMes = addMonths(inicioMes, 1);
        render();
    });

    btnHoje.addEventListener('click', () => {
        inicioMes = startOfMonth(hoje);
        render();
    });

    render();

}