import kebabCase from 'lodash.kebabcase';

export const getAllDesignersById = (state) => state.designer.get('designersById');
export const getDesignerById = (id) => (state) => (state.designer.getIn(['designersById', id]) || null);
export const getDesignerGarmentIds = () => (state) => (state.designer.get('designerGarmentIds'));
export const getDesignerInfoById = (id) => (state) => (state.designer.get('infoByDesignerId'))
  .find((item) => item.id === id);
export const getDesignerInfoByName = (name) => (state) => (state.designer.get('infoByDesignerId'))
  .find((item) => kebabCase(item.designerName) === name);
