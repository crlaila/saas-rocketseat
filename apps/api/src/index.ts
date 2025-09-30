import { ability } from '@saas/auth'

const userCanInvite = ability.can('invite', 'User')

console.log(userCanInvite)

const userNotDelete = ability.can('delete', 'User')

console.log(userNotDelete)
