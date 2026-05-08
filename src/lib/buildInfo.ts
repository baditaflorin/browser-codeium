export const buildInfo = {
  appName: "browser-codeium",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
  repositoryUrl: __REPOSITORY_URL__,
  paypalUrl: __PAYPAL_URL__,
  pagesUrl: "https://baditaflorin.github.io/browser-codeium/"
} as const;

export function commitUrl(commit = buildInfo.commit): string {
  if (commit === "local") {
    return buildInfo.repositoryUrl;
  }
  return `${buildInfo.repositoryUrl}/commit/${commit}`;
}
