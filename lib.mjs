export function listPullRequests(pullRequests) {
  if (pullRequests.data.length === 0) {
    return 'No open pull requests found.'
  } else {
    let result = `Found ${pullRequests.data.length} open pull request(s):`

    for (let pr of pullRequests.data) {
      result += `\n#${pr.number}: ${pr.title} (by ${pr.user.login})`;
    }
    return result;
  }
}
