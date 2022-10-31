const page = document.querySelector('#change-photo') as HTMLElement;

if (page) {

    const inputFile = page.querySelector('#file') as HTMLInputElement;
    const chooseButton = page.querySelector('.choose-photo') as HTMLButtonElement;
    const imgPreview = page.querySelector('#photo-preview') as HTMLImageElement;

    chooseButton.addEventListener('click', () => {
        inputFile.click();
    });

    inputFile.addEventListener('change', () => {

        if (inputFile.files?.length) {

            const file = inputFile.files[0];

            const reader = new FileReader();

            reader.onload = () => {

                if (reader.result) {

                    imgPreview.src = String(reader.result);

                }

            }

            reader.readAsDataURL(file);

        }

    });

}