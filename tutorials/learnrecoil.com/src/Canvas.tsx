import { useSetRecoilState, useRecoilValue } from 'recoil';

import { elementsAtom, selectedElementAtom } from './state';
import { Rectangle } from './components/Rectangle/Rectangle';
import { PageContainer } from './PageContainer';
import { Toolbar } from './Toolbar';
import { EditProperties } from './EditProperties';

export function Canvas() {

  const elements = useRecoilValue(elementsAtom);
  const setSelectedElement = useSetRecoilState(selectedElementAtom);

  return (
    <PageContainer onClick={() => setSelectedElement(null)}>
      <Toolbar />
      <EditProperties />
      {elements.map(id => <Rectangle key={id} id={id} />)}
    </PageContainer>
  );
}
