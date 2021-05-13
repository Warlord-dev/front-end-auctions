import issue1PageList from './issue-1/PageList'

const issueList = {
  1: issue1PageList,
}

const getPage = (issueId, pageNumber) => {
  return import(`./issue-${issueId}/${issueList[issueId][pageNumber]}`) 
}

export default getPage