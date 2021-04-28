import slug from "./slug"

const camelCase = (string) => {
    string = slug(string, false)

    return string
        .replace(/\s(.)/g, function ($1) { return $1.toUpperCase() })
        .replace(/\s/g, '')
        .replace(/^(.)/, function ($1) { return $1.toLowerCase() })
}

export default camelCase