import {variants,labels} from "./index"
import * as fs from 'fs';

const argv = process.argv.slice(2)
let theme = ""

let format = argv[0]
let out_file = argv[1]

function append(str: string) {
    theme = theme + str
}

function write(msg: string | Uint8Array) {
    process.stdout.write(msg)
}

function capitalize_first_letter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function write_result(content=theme) {
    if (out_file != undefined) {
        try {
            fs.writeFileSync(out_file, content);
        } catch (err) {
            console.error(err);
        }
        return
    }
    console.log(content)
}

switch (format) {
    case 'css':
        append(":root {\n")
        for (let label in labels) {
            for (let palette in variants) {
                // @ts-ignore
                append("\t--ctp-" + palette + "-" + label + ": " + variants[palette][label]["hex"] + ";\n")
                // @ts-ignore
                append("\t--ctp-" + palette + "-" + label + "-rgb" + ": " + variants[palette][label]["rgb"] + ";\n")
                // @ts-ignore
                append("\t--ctp-" + palette + "-" + label + "-hsl" + ": " + variants[palette][label]["hsl"] + ";\n")
            }
        }
        append("}")
        write_result()
        break
    case 'json':
        append(JSON.stringify(variants))
        write_result()
        break
    case 'markdown':
        for (let palette in variants) {
            append("|                                                                         | Labels     | Hex       | RGB             | HSL             |\n")
            append("| ----------------------------------------------------------------------- | ---------- | --------- | --------------- | --------------- |\n")
            for (let label in labels) {
                append(`| <img src="" height="23" width="23"/> |`)
                append(`${capitalize_first_letter(label)}` + "| ")
                // @ts-ignore
                append(`\`${labels[label][palette]["hex"]} \`` + "| ")
                // @ts-ignore
                append(`\`${labels[label][palette]["rgb"]} \`` + "| ")
                // @ts-ignore
                append(`\`${labels[label][palette]["hsl"]} \`` + "| ")
                append("\n")
            }
            append("\n")
        }
        write_result()
        break
    default:
        console.log('Wrong parameter')
        break
}
