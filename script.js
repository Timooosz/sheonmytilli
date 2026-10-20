const noun = async (amt) => {
    const res = await fetch(`https://randomapi.dev/api/words?type=noun&count=${amt}`);
    const { data } = await res.json();

    return data.map(element => element.word);
}

const verb = async (amt) => {
    const res = await fetch(`https://randomapi.dev/api/words?type=verb&count=${amt}`);
    const { data } = await res.json();

    return data.map(element => element.word);
}

const generate = async () => {
    const nouns = await noun(1);
    const verbs = await verb(2);
    document.getElementById("sentence").innerText = `She ${verbs[0]} on my ${nouns[0]} till I ${verbs[1]}`;
}

window.onload = () => {
    generate();
}