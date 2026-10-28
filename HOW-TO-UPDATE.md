# TAM Lab website: install and update guide

## Installing the October 2026 update (Kookmin University)

### Files to delete from the repository
Delete these only if they are still in the repository. They were already removed if you installed the first version of the new site.

- `1. aboutme.md`
- `2. education.md`
- `3. Publications.md`
- `4. News.md`
- `Videos.md`

To delete a file on GitHub: open it, click the **⋯** menu (top right), choose **Delete file**, then **Commit changes**.

### Files to upload
On the repository page, click **Add file > Upload files** and drag in these items from the unzipped package. Matching files are replaced.

| Upload this | What changed |
|---|---|
| `index.html` | Kookmin University affiliation, Seoul, photo galleries in news, citation counts, "Most cited" sort |
| `_config.yml` | New email and affiliation (used by the CV and paper-materials pages) |
| `README.md` | Repository description now says Kookmin University |
| `HOW-TO-UPDATE.md` | This guide |
| `assets` folder | Contains `tamlab/lab-data.js` (all content), `tamlab/scholar.json` (citation counts), and 7 photos in `tamlab/img/`: `pi-portrait.jpg` (new headshot), `news-kookmin-1.jpg` to `news-kookmin-3.jpg`, `news-its-1.jpg` to `news-its-3.jpg` |
| `redirects` folder | Unchanged. Upload it only if you didn't install the first version |

Then click **Commit changes**. The site updates in about a minute. Press Ctrl+F5 (Cmd+Shift+R on Mac) to see it.

### Turn on weekly citation updates (one time, about 2 minutes)
The website shows Google Scholar citation counts. A free GitHub Action refreshes them every Monday. No PHP or server is needed.

1. In the repository, click **Add file > Create new file**.
2. In the file name box, type exactly: `.github/workflows/scholar-citations.yml`
   (Typing the `/` characters creates the folders.)
3. Open `scholar-citations.yml` from this package in a text editor (Notepad is fine), copy everything, and paste it into GitHub.
4. Click **Commit changes**.
5. Run it once now: open the **Actions** tab, click **Update Google Scholar citations** in the left list, then **Run workflow**. After about a minute, a green check means it worked. The Publications page will then also show your total citations, h-index, and i10-index.

If the Actions tab asks you to enable workflows, click the button to enable them.

**If a run fails (red X):** Google Scholar sometimes blocks automated visits. Nothing breaks. The site keeps the last numbers it had, and the next Monday run usually succeeds. You can also click **Run workflow** again later.

The Action only updates citation counts. New papers still need to be added to `lab-data.js` (see below), which keeps conference papers and preprints off the list.

## Everyday updates: edit one file

All text lives in **`assets/tamlab/lab-data.js`**. Open it on GitHub, click the pencil icon, edit, and commit. Newest items go at the top of each list. Copy an existing entry and change the values, keeping the commas between entries.

**Add a paper** (top of `publications`). Use the same title as on Google Scholar so its citation count appears automatically:

```js
{
  "authors": "Tamakloe, R., Kim, I., & Lee, H.",
  "year": 2026,
  "title": "Your paper title",
  "journal": "Accident Analysis & Prevention",
  "details": "230, 108200",
  "url": "https://doi.org/...",
  "lines": ["safety", "data"]
},
```

`lines` sets the colored dots and filters: `"safety"`, `"data"`, `"urban"`, `"emerging"`. If `url` is empty, the title links to a Google Scholar search for the paper. Two papers currently have no link yet: the 2026 *Cities* e-scooter paper and the 2026 *Scientific Reports* freight paper. Add their DOI links when you have them.

**Add news** (top of `news`). Put photos in `assets/tamlab/img/` first. About 1400 px wide keeps the site fast.

```js
{
  "date": "2026-11-15",
  "title": "Short headline",
  "imgs": ["news-photo-1.jpg", "news-photo-2.jpg"],
  "alt": "One sentence describing the photos, for screen readers",
  "body": "One or two sentences. Links look like <a href=\"https://...\">this</a>."
},
```

Use `"imgs": []` for a news item without photos. Older items use `"img": "file.jpg"` for a single photo, which also still works.

**Add a lab member** (in `members`):

```js
{ name: "Jane Doe", role: "PhD student", since: 2027, photo: "assets/tamlab/img/people/jane.jpg",
  topic: "Pedestrian safety near school zones", email: "jane@kookmin.ac.kr", link: "" },
```

Use square photos for members. Roles are grouped in this order: Postdoctoral researcher, PhD student, MS student, Research intern, Visiting researcher.

**Add a talk**: copy an entry in `invitedTalks`. For a YouTube recording, put only the video ID in `video` (the part after `watch?v=`).

**Contact details** are in the `lab` section at the top: `email`, `email2`, `phone`, and `address`.

Also update `lastUpdated` at the top of the file. It appears in the footer.

## Links you can share

- https://drtamakloe.github.io/#research
- https://drtamakloe.github.io/#people
- https://drtamakloe.github.io/#publications
- https://drtamakloe.github.io/#publications-safety (also `-data`, `-urban`, `-emerging`)
- https://drtamakloe.github.io/#news
- https://drtamakloe.github.io/#talks
- https://drtamakloe.github.io/#teaching
- https://drtamakloe.github.io/#join
- https://drtamakloe.github.io/#contact
