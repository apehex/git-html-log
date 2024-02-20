function parseGitLog(logText) {
  // Split logText into an array of commit strings
  const commitStrings = logText.trim().split(/\r?\n\s*\r?\n/);

  // Map each commit string to an object containing commit properties
  const commits = commitStrings.map((commitString) => {
    const lines = commitString.split(/\r?\n/);
    const hash = lines[0].split(' ')[1];
    const parentHashes = lines[1].split(' ').slice(1);
    const author = lines[2].split(':')[1].trim();
    const date = lines[3].split(':')[1].trim();
    const message = lines.slice(4).join('\n').trim();
    return { hash, parentHashes, author, date, message };
  });

  return commits;
}

