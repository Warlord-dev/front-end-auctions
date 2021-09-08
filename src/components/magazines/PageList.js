import issue1PageList from './issue-1/PageList'
import issue2PageList from './issue-2/PageList'
import issue3PageList from './issue-3/PageList'
import issue4PageList from './issue-4/PageList'
import issue5PageList from './issue-5/PageList'

const issueList = {
  1: issue1PageList,
  2: issue2PageList,
  3: issue3PageList,
  4: issue4PageList,
  5: issue5PageList
}

const getPageList = issueId => {
  return issueList[issueId]
}

export default getPageList