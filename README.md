# FLOW MOTION — Core Timeline Engine v0.3

A mobile-first, local-first browser prototype for the Flow Motion motion-editing app. This build advances the timeline interaction and project model. **It is not a native Android APK.**

## Run

- Open `index.html` in a modern browser, or serve this folder from a local/HTTPS web server.
- On Android, the single-file companion build `Flow_Motion_v0_3.html` can be opened directly in Chrome without extracting this source ZIP.
- Browser storage is local to the browser/origin. If the browser blocks storage for a local file, Save keeps a session-only copy; use Export JSON for a durable backup. Export a JSON project backup before clearing browser data.

## Implemented and smoke-tested in v0.3

- Separate timeline rows for each layer/clip, with per-layer visibility controls and color-coded clip types.
- Touch and mouse clip dragging. Pointer handling explicitly supports touch events (`button === -1` on touch devices).
- Frame-snapped clip movement and left/right trimming.
- Left trim advances the clip source in-point according to playback speed.
- Draggable playhead handle plus tap/drag scrubbing on the ruler and empty track lanes.
- Frame-based playhead and timecode at 24, 30, 60 and 120 FPS.
- Timeline zoom from 20–240 px/s, preserving the playhead's screen position while zooming.
- Split at playhead. Both resulting clips receive a boundary keyframe sampled from the animated transform at the cut.
- Visible keyframe diamonds inside clips.
- Moving and duplicating clips shifts their frame-based keyframes with them.
- Undo/redo history (up to 100 snapshots) for project/layer edits, including split, move, trim, delete, duplicate and inspector edits.
- Project schema v3, with migration of older v1 time-based and v2 frame-based keyframes.
- JSON project import/export and local metadata save.
- Project duration grows automatically when clips extend beyond the current end.
- Dark Flow Motion shell, preview canvas, media import, text layers, transform inspector, speed and compositing controls are retained.

## Partially implemented

- Preview renderer draws text and imported images. Imported video can display a loaded frame, but video frames are not synchronized/seeking with timeline playback.
- Imported audio is represented as a timeline layer; playback, waveform, mixing and sync are not implemented.
- Project JSON stores media metadata and references, not the media bytes. After opening a project in a fresh browser session, re-import its source media to restore the preview.
- Linear/hold keyframe evaluation is available in the preview. Bezier graph editing is not implemented.
- Blend mode controls and strength are stored, but the preview does not yet render all blend modes distinctly.
- Responsive browser UI only; no native Android packaging/APK in this build.

## Planned / not implemented

- Final video/audio render and export pipeline.
- Audio playback, waveform display, mixing and synchronization.
- Bezier graph editor, expressions, parenting and nulls.
- Advanced effects, masks, rotoscoping, background removal and vector drawing.
- Frame blending and optical-flow interpolation.
- True 3D scene graph, imported 3D models, cameras, lights and environments.
- AI-assisted tools and pivot-aware motion blur.
- Native Android APK build and device-level optimization.

## Project data

Schema v3 contains project settings, selected layer, timeline frame rate/duration/playhead/zoom, ordered layer records, source in-points, speed, transform values, frame-number keyframes, visibility, compositing fields and media metadata. Media bytes are deliberately not embedded in project JSON or browser storage.

## Reference collection status

The existing dark editor direction and the previously supplied Keyflow/Keyflaw timeline references remain design inputs. The consolidated UI/reference analysis is intentionally **not final** and must wait until the user explicitly says **“That's all.”** The exact original Flow Motion logo from the other conversation was not present in the accessible project assets, so this build retains the temporary FM SVG mark. The Keyflaw APK was not present in the current accessible file listing; do not infer its contents.

## Developer smoke test

With Node.js installed, run `node tests/core-smoke.js` from this folder. The test exercises schema migration, frame timecode, split boundary keys, undo/redo, touch clip dragging, trim/source-in behavior, zoom state and schema v3 export. It is a logic smoke test, not a substitute for testing on a real Android browser/device.


## Official logo and Android packaging preparation

- The exact supplied 1536×1536 Flow Motion logo is stored at `assets/flow-motion-logo.png`.
- Launcher icons at 192×192 and 512×512 are generated from that image.
- The PWA manifest now uses those PNG icons, and `sw.js` caches the app shell for offline reopening after the first successful online load.
- This is still a web app, **not an APK**.

### No-cost Android packaging route
1. Publish the entire `flow_motion_starter` folder to a free HTTPS host (GitHub Pages is one option).
2. Open the live HTTPS address in PWABuilder and choose its Android package option.
3. Download the generated package and install the APK on Android. Play Store publishing has separate developer-account and signing requirements.

This produces a Trusted Web Activity wrapper around the web app; it does not convert the editor's JavaScript into a native rendering engine. A native Capacitor/Android build can be considered later.
