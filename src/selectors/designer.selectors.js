export const getAllDesignersById = (state) => state.designer.get('designersById');
export const getDesignerById = (id) => (state) => (state.designer.getIn(['designersById', id]) || null);
export const getDesignerGarmentIds = () => (state) => (state.designer.get('designerGarmentIds'));
