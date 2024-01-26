//
// Copyright C 2024 The BBJProjeK Organization
//

const qs = document.querySelector.bind(document);

const copied = document.querySelector('#copied');

const delay = ms => new Promise(res => setTimeout(res, ms));

function ifEmpty(input, fb) {
    return input ? `${input}` : fb;
}

function doReplace() {
    const title = qs('#title').value;
    const previous_title = qs('#previous_title').value;
    const date = qs('#date').value;
		const author = qs('#author').value;
		const content = qs('#content').value;
    const content_link = ifEmpty(qs('#content_link').value, '/');
    // const donate_url = ifEmpty(qs('#donate_url').value, 'https://t.me/EvolutionX/');
    // const xda_url = qs('#xda_url').value;
    // const kernel_source_url = qs('#kernel_source_url').value;

    qs('#output').value =
        template.replace(/##TITLE##/g, title)
				.replace(/##PREVIOUS_TITLE##/g, previous_title)
        .replace(/##DATE##/g, date)
				.replace(/##AUTHOR_EMAIL##/g, author)
				.replace(/##CONTENT##/g, content)
        .replace(/##CONTENT_LINK##/g, content_link)
        // .replace(/##DONATE_URL##/g, donate_url)
        // .replace(/##XDA_URL##/g, xda_url)
        // .replace(/##KERNEL_SOURCE_URL##/g, kernel_source_url)
        .replace(/@@/g, '\n')
}

qs('#form').addEventListener('submit', (event) => {
    event.preventDefault();

    doReplace();
    copied.style.opacity = 1;
    document.getElementById('output').select();
    document.execCommand('copy');
    document.getElementById('copied').innerHTML = 'Copied';
    delay(2000).then(() => {
        copied.style.opacity = 0;
    });
});
