# Contributing

Welcome! Coding, design, writing, and documentation contributions all count.
Be kind and specific in comments and reviews. Ask for help if you get stuck.

## 1. Claim one issue

Choose an unclaimed issue labeled `workshop` and `good first issue`.
Comment: “I'd like to work on this issue. May I take it?”
Wait for an organizer to reply with approval. The organizer will mark it claimed.
Do not start an issue already claimed by another participant.

## 2. Create your working copy

Fork the organizer's repository to your GitHub account. Copy your fork's clone URL.
Run these commands, replacing YOUR_USERNAME and REPOSITORY with your values:

```bash
git clone https://github.com/YOUR_USERNAME/REPOSITORY.git
cd REPOSITORY
git switch -c add-resource-card
```

Use a short branch name matching your issue. If Git needs your commit identity,
configure your name and preferred commit email before committing; ask an organizer for help.
For a documentation-only change, you may instead edit a file in your fork using
GitHub's browser editor and commit to a new branch.

## 3. Make and check the change

Follow your issue's acceptance criteria. Edit only the relevant files and section.
Open `index.html` in a browser and refresh after saving. Try your feature and
check that existing content still works. For documentation, use Markdown preview.
Do not commit unrelated files, editor settings, secrets, or generated archives.

## 4. Commit and push

Example for an HTML change (stage only the files you intentionally edited):

```bash
git status
git diff
git add index.html
git commit -m "Add a developer resource card"
git push -u origin add-resource-card
```

## 5. Open a pull request

Open a PR from your fork's feature branch to the organizer's original repository
and its default branch. Check the destination carefully.
Use a descriptive title, explain the change, and say how you checked it.
Include `Closes #ISSUE_NUMBER`, replacing ISSUE_NUMBER with the actual GitHub issue
number, not the workshop file's numeric prefix. Include a screenshot for visual changes.

## 6. Respond to review

Read the review and make requested adjustments on the same branch. Commit and push
again; the existing PR updates automatically. The organizer reviews and merges it.
If you see a merge conflict, ask an organizer to help rather than overwriting others' work.
