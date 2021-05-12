import issue1PageList from './issue-1/PageList'

const issueList = {
  1: issue1PageList,
}

const getPageList = issueId => {
  return issueList[issueId]
}

export default getPageList