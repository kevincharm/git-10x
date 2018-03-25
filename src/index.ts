import branch from 'git-10x-branch'

export default async function main() {
    const args = process.argv.slice(2)
    switch (args[0]) {
        case 'branch':
            await branch()
            break
    }
}
