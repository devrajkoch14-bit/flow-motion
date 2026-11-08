# Changelog

## v0.3 — Core Timeline Engine polish

- Fixed touch clip dragging so Android pointer events are accepted even when `button` is `-1`.
- Added a draggable playhead handle and scrubbing from the ruler or empty track lanes.
- Made playhead positioning use the actual responsive timeline origin instead of a hard-coded desktop offset.
- Added frame-snapped movement and trimming; left trim advances the source in-point using clip speed.
- Added playhead-anchored timeline zoom so the viewed frame stays in place while zooming.
- Added keyframe diamonds to clips and a boundary keyframe on both sides of a split.
- Shifted keyframes when moving or duplicating a clip; duplicate animations now follow the duplicated clip.
- Added project schema v3 with v1/v2 keyframe migration, selected-layer and timeline-state persistence, and JSON project import.
- Added a session-memory fallback when browser local storage is unavailable, so the editor remains usable in restricted local-file contexts.
- Added media-missing preview placeholders and clarified that project JSON stores media metadata, not media bytes.
- Added frame-step keyboard navigation, Home/End, and Delete shortcuts.
- Preserved the temporary FM mark and dark Flow Motion shell.

## v0.2 — Core Timeline Engine foundation

- Added multilayer rows, clip drag, trim handles, split at playhead, timeline zoom, frame-based timecode, undo/redo, layer visibility, and schema v2.


## v0.3.1 — Official branding and PWA preparation
- Added the exact supplied Flow Motion logo and generated 192px/512px launcher icons.
- Updated the PWA manifest to use PNG icons.
- Added basic app-shell service-worker caching and registration on HTTPS/localhost.
- Documented the Android packaging path. This remains a PWA-ready web prototype, not an APK.
