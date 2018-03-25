import { spawnSync } from 'child_process'
import branch from 'git-10x-branch'

export default async function main() {
    const args = process.argv.slice(2)
    switch (args[0]) {
        case 'branch':
            stripSubCommand()
            await branch()
            break
        default:
            spawnSync('git', args, {
                stdio: 'inherit'
            })
    }
}

function stripSubCommand() {
    process.argv = process.argv.slice(1)
}
