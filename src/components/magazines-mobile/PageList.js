import issue1PageList from './issue-1/PageList'
import issue2PageList from './issue-2/PageList'

const issueList = {
  1: issue1PageList,
  2: issue2PageList,
}

const getPageList = issueId => {
  return issueList[issueId]
}

export default getPageList