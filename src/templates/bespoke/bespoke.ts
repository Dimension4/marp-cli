import bespoke from 'bespoke'
import bespokeForms from 'bespoke-forms'
import bespokeClasses from './classes'
import bespokeInactive from './inactive'
import bespokeFragments from './fragments'
import bespokeFullscreen from './fullscreen'
import bespokeHash from './hash'
import bespokeNavigation from './navigation'
import bespokeOSC from './osc'
import bespokeProgress from './progress'
import bespokeSync from './sync'
import bespokeTouch from './touch'
import { readQuery } from './utils'

export default function(target = document.getElementById('p')!) {
  window.addEventListener('load', () => document.body.classList.add('loaded'))

  const deck = bespoke.from(target, [
    bespokeForms(),
    bespokeClasses,
    bespokeInactive(),
    bespokeHash({ history: false }),
    bespokeNavigation(),
    bespokeFullscreen,
    bespokeProgress,
    bespokeTouch(),
    bespokeOSC(),
    bespokeFragments,
    bespokeSync({ key: readQuery('sync') || undefined }),
  ])

  window.addEventListener('unload', () => deck.destroy())

  return deck
}
