import { useSetRecoilState, useRecoilValue } from 'recoil';

import { elementsAtom, selectedElementAtom } from './state';
import { Rectangle } from './components/Rectangle/Rectangle';
import { PageContainer } from './PageContainer';
import { Toolbar } from './Toolbar';

export function Canvas() {

  const elements = useRecoilValue(elementsAtom);
  const setSelectedElement = useSetRecoilState(selectedElementAtom);

  return (
    <PageContainer onClick={() => setSelectedElement(null)}>
      <Toolbar />
      {elements.map(id => <Rectangle key={id} id={id} />)}
    </PageContainer>
  );
}
