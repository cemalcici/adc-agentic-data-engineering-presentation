# ADC #3 - Agentic Data Engineering: DataOps'ta Kuraldan Ajana

An open-source presentation about Agentic Data Engineering and its role in the
way modern data systems are designed, operated, observed, and improved.

**[View the presentation](https://cemalcici.github.io/adc-agentic-data-engineering-presentation/)**

## Purpose

Agentic Data Engineering is broader than adding an LLM to a pipeline or building
a chatbot for a data team. This presentation introduces the concept through the
way data systems are designed, operated, observed, and improved.

The talk starts with the familiar DataOps development and feedback cycle, then
examines where deterministic rules work well and where they stop being enough.
From there, it develops a practical view of an agent as a system that can
interpret a goal, gather current evidence, use tools, validate its proposal, and
stop at an explicit authority boundary.

The goal is not to prescribe a specific vendor or technology stack. It is to
give data professionals a durable mental model they can use to evaluate agentic
capabilities in their own environment.

## What the Presentation Aims to Provide

After the talk, an attendee should be able to:

- Explain how an agent differs from deterministic automation and a copilot.
- Recognize Agentic Data Engineering as a broader approach across the data
  lifecycle, rather than a single tool or workflow.
- Identify the context and evidence an agent needs before making a decision.
- Distinguish grounding from validation and understand why both are necessary.
- Define tool permissions, guardrails, human approval points, and operational
  limits for a trustworthy agent.
- Select a bounded first use case whose success can be measured, tested, and
  safely reversed.

The live demo makes one small but valuable part of this picture concrete. It is
an example of the concept, not the definition of the concept itself.

## Run Locally

```bash
npm run serve
```

Then open [http://localhost:4173](http://localhost:4173). Using a local server is
recommended because some browsers restrict iframe access when the files are
opened directly with `file://`.

Navigate with the arrow keys, Page Up and Page Down, Enter, Space, or a supported
presentation remote. Press `F` to enter full-screen mode.

For HyperFrames development mode, run:

```bash
npm run dev
```

## Repository Contents

- `index.html`: The public presentation shell.
- `composition/index.html`: The HyperFrames slide composition.
- `assets/`: Presentation visuals, speaker identity assets, and QR codes.
- `SOURCES.md`: Primary references organized by slide.
- `FURTHER-READING.md`: A guided reading list for exploring the subject further.
- `frame.md`: The visual language, color semantics, and motion rules.

Speaker and rehearsal notes are intentionally not included in this public
repository. The slides are designed to remain understandable without access to
those private notes.

## Demo

The live proof of concept is maintained in the separate
[adc-agentic-data-engineering-demo](https://github.com/cemalcici/adc-agentic-data-engineering-demo)
repository.

The demo focuses on a controlled self-healing scenario within the **Operate and
Improve** area of the broader Agentic Data Engineering landscape. It demonstrates
schema drift detection, root cause analysis, a validated fix, human approval,
and a controlled rerun.

## Design Principles

- One idea and one dominant visual per slide.
- Light backgrounds for explanation; dark backgrounds for narrative thresholds
  and the technical core.
- Blue for evidence and context, coral for action and attention, green for
  validated success, and red for failure.
- Animation only when it reveals a new part of the argument.
- Slide titles and visuals follow the same reveal logic.
- Audience-facing copy follows Turkish grammar while retaining established
  English technical terminology where it improves clarity.

## Validation

```bash
npm run sync
npm run check
npm run test:remote
```

`sync` copies the slideshow manifest from the composition into the public
presentation shell. `check` runs lint, runtime, layout, motion, and contrast
checks. `test:remote` verifies keyboard and presentation-remote navigation.
