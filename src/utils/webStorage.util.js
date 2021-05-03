export const APPROVAL_FOR_ALL = 'APPROVAL_FOR_ALL';

export const getApprovalStatus = () => {
  const isApproved = localStorage.getItem(APPROVAL_FOR_ALL) || 'false';
  return JSON.parse(isApproved);
};

export const setApprovalStatus = (isApproved) => {
  localStorage.setItem(APPROVAL_FOR_ALL, JSON.stringify(isApproved));
};
