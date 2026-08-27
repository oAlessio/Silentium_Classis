/**
 * Procedural Ambient Sound Engine
 * Generates ocean waves + distant jet engine using Web Audio API
 */

let audioCtx: AudioContext | null = null
let masterGain: GainNode | null = null
let isPlaying = false

function createOceanWaves(ctx: AudioContext, dest: AudioNode) {
  const nodes: AudioNode[] = []

  // --- Wave Layer 1: Deep ocean swell ---
  const bufferSize = ctx.sampleRate * 4
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const data = noiseBuffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1)
  }

  const noiseSource = ctx.createBufferSource()
  noiseSource.buffer = noiseBuffer
  noiseSource.loop = true

  // Bandpass to shape into wave-like sound
  const waveFilter = ctx.createBiquadFilter()
  waveFilter.type = 'lowpass'
  waveFilter.frequency.value = 400
  waveFilter.Q.value = 0.5

  // LFO to modulate volume (wave crashing rhythm)
  const lfo = ctx.createOscillator()
  lfo.type = 'sine'
  lfo.frequency.value = 0.08 // ~5 second wave cycle
  const lfoGain = ctx.createGain()
  lfoGain.gain.value = 0.15

  const waveGain = ctx.createGain()
  waveGain.gain.value = 0.35 // Ocean is main volume focus

  lfo.connect(lfoGain)
  lfoGain.connect(waveGain.gain)

  noiseSource.connect(waveFilter)
  waveFilter.connect(waveGain)
  waveGain.connect(dest)

  noiseSource.start()
  lfo.start()

  nodes.push(noiseSource, lfo)

  // --- Wave Layer 2: Higher frequency wash (foam/spray) ---
  const foamBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const foamData = foamBuffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) {
    foamData[i] = (Math.random() * 2 - 1)
  }

  const foamSource = ctx.createBufferSource()
  foamSource.buffer = foamBuffer
  foamSource.loop = true

  const foamFilter = ctx.createBiquadFilter()
  foamFilter.type = 'bandpass'
  foamFilter.frequency.value = 2000
  foamFilter.Q.value = 0.3

  const foamLfo = ctx.createOscillator()
  foamLfo.type = 'sine'
  foamLfo.frequency.value = 0.12
  const foamLfoGain = ctx.createGain()
  foamLfoGain.gain.value = 0.06

  const foamGain = ctx.createGain()
  foamGain.gain.value = 0.05

  foamLfo.connect(foamLfoGain)
  foamLfoGain.connect(foamGain.gain)

  foamSource.connect(foamFilter)
  foamFilter.connect(foamGain)
  foamGain.connect(dest)

  foamSource.start()
  foamLfo.start()

  nodes.push(foamSource, foamLfo)

  return nodes
}

function createJetEngine(ctx: AudioContext, dest: AudioNode) {
  const nodes: AudioNode[] = []
  const bufferSize = ctx.sampleRate * 4

  // --- Distant rumble layer ---
  const rumbleBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const rumbleData = rumbleBuffer.getChannelData(0)
  for (let i = 0; i < bufferSize; i++) {
    rumbleData[i] = (Math.random() * 2 - 1)
  }

  const rumbleSource = ctx.createBufferSource()
  rumbleSource.buffer = rumbleBuffer
  rumbleSource.loop = true

  // Very low pass to simulate distant turbine
  const rumbleFilter = ctx.createBiquadFilter()
  rumbleFilter.type = 'lowpass'
  rumbleFilter.frequency.value = 180
  rumbleFilter.Q.value = 1.5

  // Subtle modulation for "distance" feel
  const rumbleLfo = ctx.createOscillator()
  rumbleLfo.type = 'sine'
  rumbleLfo.frequency.value = 0.03
  const rumbleLfoGain = ctx.createGain()
  rumbleLfoGain.gain.value = 0.04

  const rumbleGain = ctx.createGain()
  rumbleGain.gain.value = 0.04 // Heavily reduced engine presence

  rumbleLfo.connect(rumbleLfoGain)
  rumbleLfoGain.connect(rumbleGain.gain)

  rumbleSource.connect(rumbleFilter)
  rumbleFilter.connect(rumbleGain)
  rumbleGain.connect(dest)

  rumbleSource.start()
  rumbleLfo.start()

  nodes.push(rumbleSource, rumbleLfo)

  // --- Mid-range whine (turbine tone) ---
  const whine = ctx.createOscillator()
  whine.type = 'sawtooth'
  whine.frequency.value = 85

  const whineFilter = ctx.createBiquadFilter()
  whineFilter.type = 'lowpass'
  whineFilter.frequency.value = 250
  whineFilter.Q.value = 2

  const whineGain = ctx.createGain()
  whineGain.gain.value = 0.005 // Barely perceptible whine

  // Slow drift on pitch
  const whineLfo = ctx.createOscillator()
  whineLfo.type = 'sine'
  whineLfo.frequency.value = 0.05
  const whineLfoGain = ctx.createGain()
  whineLfoGain.gain.value = 5

  whineLfo.connect(whineLfoGain)
  whineLfoGain.connect(whine.frequency)

  whine.connect(whineFilter)
  whineFilter.connect(whineGain)
  whineGain.connect(dest)

  whine.start()
  whineLfo.start()

  nodes.push(whine, whineLfo)

  return nodes
}

export function startAmbient(): boolean {
  if (isPlaying) return true

  try {
    audioCtx = new AudioContext()
    masterGain = audioCtx.createGain()
    masterGain.gain.value = 0.5
    masterGain.connect(audioCtx.destination)

    // Fade in
    masterGain.gain.setValueAtTime(0, audioCtx.currentTime)
    masterGain.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 2)

    createOceanWaves(audioCtx, masterGain)
    createJetEngine(audioCtx, masterGain)

    isPlaying = true
    return true
  } catch {
    console.warn('Web Audio API not supported')
    return false
  }
}

export function stopAmbient() {
  if (!audioCtx || !masterGain) return

  // Fade out then close
  const now = audioCtx.currentTime
  masterGain.gain.setValueAtTime(masterGain.gain.value, now)
  masterGain.gain.linearRampToValueAtTime(0, now + 0.5)

  const ctx = audioCtx
  setTimeout(() => {
    try {
      ctx.close()
    } catch { /* ignore */ }
  }, 600)

  audioCtx = null
  masterGain = null
  isPlaying = false
}

export function setVolume(value: number) {
  if (!masterGain || !audioCtx) return
  const clamped = Math.max(0, Math.min(1, value))
  masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime)
  masterGain.gain.linearRampToValueAtTime(clamped, audioCtx.currentTime + 0.1)
}

export function getIsPlaying(): boolean {
  return isPlaying
}

export function playBeep() {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(1200, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.05)
    gain.gain.setValueAtTime(0.1, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.05)
  } catch {
    // audio context blocked or unsupported
  }
}
