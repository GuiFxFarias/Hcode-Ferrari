const authPage = document.querySelector("main#auth");

if (authPage) {

    const hideAuthForms = () => {
        authPage
            .querySelectorAll('form')
            .forEach((el) => el.classList.add('hide'));
    };

    const showAuthForm = (id: string) => {
        document.getElementById(id)?.classList.remove('hide');
    };

    const render = () => {
        
        hideAuthForms();

        if (sessionStorage.getItem('email')) {
            document.querySelectorAll<HTMLInputElement>('[name="email"]').forEach((el) => {

                el.value = sessionStorage.getItem('email') ?? '';
    
            });
        }

        switch (window.location.hash) {
            case '#login':
                showAuthForm('login');
                break;
            case '#register':
                showAuthForm('register');
                break;
            case '#forget':
                showAuthForm('forget');
                break;
            case '#reset':
                showAuthForm('reset');
                break;
            default:
                showAuthForm('auth-email');
        }

    }

    window.addEventListener('load', () => {
        // Executado quando a página carrega
        render();
    });
    window.addEventListener('hashchange', () => render());

    const formAuthEmail = document.querySelector('#auth-email') as HTMLFormElement;

    formAuthEmail?.addEventListener('submit', (e) => {

        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const input = form?.querySelector('[type="email"]') as HTMLInputElement;

        sessionStorage.setItem('email', input.value);

        location.hash = '#login';

    });

}