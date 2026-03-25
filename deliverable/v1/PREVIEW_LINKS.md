# GitHub Preview Links (No-404 Strategy)

Use one of the following URL patterns so static page previews keep working even after branches are deleted.

## 1) Preferred for PR review (branch link)

Replace `<BRANCH>` with your active branch name:

- Overview  
  `https://htmlpreview.github.io/?https://raw.githubusercontent.com/homelab-net/Broadmoor-Hat-Co/<BRANCH>/deliverable/v1/index.html`
- Hat Quiz  
  `https://htmlpreview.github.io/?https://raw.githubusercontent.com/homelab-net/Broadmoor-Hat-Co/<BRANCH>/deliverable/v1/hat-quiz.html`
- Hat Designer  
  `https://htmlpreview.github.io/?https://raw.githubusercontent.com/homelab-net/Broadmoor-Hat-Co/<BRANCH>/deliverable/v1/hat-designer.html`

## 2) Preferred for long-term sharing (commit permalink)

Use the merge commit SHA so links never 404 because of branch cleanup.

Current merge commit from PR #6: `3739a99`

- Overview  
  `https://htmlpreview.github.io/?https://raw.githubusercontent.com/homelab-net/Broadmoor-Hat-Co/3739a99/deliverable/v1/index.html`
- Hat Quiz  
  `https://htmlpreview.github.io/?https://raw.githubusercontent.com/homelab-net/Broadmoor-Hat-Co/3739a99/deliverable/v1/hat-quiz.html`
- Hat Designer  
  `https://htmlpreview.github.io/?https://raw.githubusercontent.com/homelab-net/Broadmoor-Hat-Co/3739a99/deliverable/v1/hat-designer.html`

## 3) After merge to default branch

If your default branch is `main`, use:

- `https://htmlpreview.github.io/?https://raw.githubusercontent.com/homelab-net/Broadmoor-Hat-Co/main/deliverable/v1/index.html`
- `https://htmlpreview.github.io/?https://raw.githubusercontent.com/homelab-net/Broadmoor-Hat-Co/main/deliverable/v1/hat-quiz.html`
- `https://htmlpreview.github.io/?https://raw.githubusercontent.com/homelab-net/Broadmoor-Hat-Co/main/deliverable/v1/hat-designer.html`

---

If your org/user or repo path differs, replace `homelab-net/Broadmoor-Hat-Co` accordingly.
