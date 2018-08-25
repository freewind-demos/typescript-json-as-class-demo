import data from './data.json'

class Lang {
    name: string
    description?: string

    constructor(name: string, description?: string) {
        this.name = name
        this.description = description
    }

}

const langs = <Array<Lang>>data

console.log(langs.map(l => l.name))