const baseUrl = 'https://raw.githubusercontent.com/JasonPWhite/StrudelSounds/main/'

samples({
  spl: ['burp', 'fakkin','lasttime',
'moynd',
'myhouse',
'oi',
'outme',
'punch',
'whoareyou',
'yeah'].map(name => baseUrl + name + '.wav')
})

setcps(0.5)

$: s("<spl:2 - [spl:1 [spl:1 spl:1]] - [spl:1 spl:1] - spl:0  ->*2").gain(slider(0.786))

$: s("<- - - spl:7 - - >*4").gain(slider(0.386))

$: s("- - - - - <spl:4 - - - - >*1").gain(slider(0.827)).room(.3)

$: s("<- - - - [spl:3]>*1").gain(slider(0.827)).delay(.6)

$: s("<- - - [spl:6 spl:6 spl:6 spl:3] ->*1").gain(slider(0.827))

$: s("triangle*4").decay(0.5).n(irand(12)).scale("<C3:mixolydian F3:mixolydian>/4")
  .release(0.125).decay("<0.1 0.25 0.3 0.4>").sustain(0)
.cutoff(2000).cutoff("<1000 2000 4000>")
.room(1).roomsize(10).delay(.3)