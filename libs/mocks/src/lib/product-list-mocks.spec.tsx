import { render } from '@testing-library/react';

import ProductListMocks from './product-list-mocks';

describe('ProductListMocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductListMocks />);
    expect(baseElement).toBeTruthy();
  });
});
