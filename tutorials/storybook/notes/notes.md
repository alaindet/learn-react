# Storybook

- A "Component Story File" (CSF) is a file usually matching `*.stories.jsx|tsx`, containing one or more stories of Storybook
- Each default export of a CSF is a `Meta` object describing the metadata about the group of stories (title, component, etc.)
- Each named export of a CSF file is a `Story` object describing a single story, where a story is just one use case of one component
- Imagine a Button having two variants, success and error; the Button could have two stories, `Success` and `Error`, each showing the success and error possible state of the Button, accordingly
- Since Storybook 6,
